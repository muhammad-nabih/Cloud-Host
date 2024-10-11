import LoginForm from '@/app/(user)/register/RegisterForm';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DisplayAnimation from '@/lib/framer-motion/DisplayAnimation';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

export default function Register() {
	return (
		<div className='fix-height flex items-center justify-center bg-zinc-200'>
			<ToastContainer />
			<DisplayAnimation>
				<Card className='my-3 w-[350px]'>
					<CardHeader>
						<CardTitle className='text-lg font-bold text-[#1e40af]'>Register</CardTitle>
						<CardDescription>Create an account to access our features and start your cloud journey.</CardDescription>
					</CardHeader>
					<LoginForm />
				</Card>
			</DisplayAnimation>
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Cloud Host | Register',
	description: 'This Is Register Page',
};
