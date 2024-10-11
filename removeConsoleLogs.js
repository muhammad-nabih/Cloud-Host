const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// قائمة المجلدات المستثناة مثل node_modules، .next، dist، build، وما إلى ذلك.
const excludedFolders = ['node_modules', '.next', 'dist', 'build'];

// إضافة دعم للأعلام (flags) لتحكم أكبر
const args = process.argv.slice(2);
const shouldRemoveLog = args.includes('--log-only');
const shouldRemoveError = args.includes('--error-only');
const shouldRemoveAll = !shouldRemoveLog && !shouldRemoveError; // الافتراضي هو إزالة الكل

// وظيفة لعمل نسخ احتياطية من الملفات
const backupFile = (filePath) => {
	const backupPath = `${filePath}.backup`;
	if (!fs.existsSync(backupPath)) {
		fs.copyFileSync(filePath, backupPath);
	}
};

// وظيفة لحذف console statements من الملفات بناءً على الأعلام أو الخيارات التفاعلية
const removeConsoleLogs = (filePath, logTypes) => {
	backupFile(filePath); // إنشاء نسخة احتياطية قبل التعديل

	const fileContent = fs.readFileSync(filePath, 'utf8');
	let updatedContent = fileContent;

	if (logTypes.includes('All') || logTypes.includes('console.log')) {
		updatedContent = updatedContent.replace(/console\.log\(.*?\);?/g, '');
	}
	if (logTypes.includes('All') || logTypes.includes('console.error')) {
		updatedContent = updatedContent.replace(/console\.error\(.*?\);?/g, '');
	}
	if (logTypes.includes('All') || logTypes.includes('console.warn')) {
		updatedContent = updatedContent.replace(/console\.warn\(.*?\);?/g, '');
	}

	fs.writeFileSync(filePath, updatedContent, 'utf8');
};

// البحث عن الملفات التي سيتم تطبيق التعديلات عليها مع استثناء المجلدات المحددة
const walkSync = (dir, filelist = []) => {
	fs.readdirSync(dir).forEach((file) => {
		const filePath = path.join(dir, file);

		if (fs.statSync(filePath).isDirectory() && !excludedFolders.includes(file)) {
			filelist = walkSync(filePath, filelist);
		}
		// التعامل مع ملفات .js, .ts, .jsx, .tsx فقط
		else if ((file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.tsx')) && file !== 'js.config' && file !== 'ts.config') {
			filelist.push(filePath);
		}
	});
	return filelist;
};

// واجهة CLI تفاعلية لاختيار نوع console الذي سيتم حذفه
const askUser = async () => {
	const answers = await inquirer.prompt([
		{
			type: 'checkbox',
			name: 'logTypes',
			message: 'Which console statements would you like to remove?',
			choices: ['console.log', 'console.error', 'console.warn', 'All'],
		},
	]);

	return answers.logTypes;
};

const projectPath = __dirname;
const files = walkSync(projectPath);

// تشغيل السكربت بناءً على الأعلام أو واجهة CLI تفاعلية
const main = async () => {
	let logTypes = [];

	if (args.length === 0) {
		logTypes = await askUser();
	} else {
		if (shouldRemoveAll) {
			logTypes = ['All'];
		} else {
			if (shouldRemoveLog) logTypes.push('console.log');
			if (shouldRemoveError) logTypes.push('console.error');
		}
	}

	files.forEach((file) => removeConsoleLogs(file, logTypes));
};

main();
