import ArticlesItem from '@/components/articles/ArticlesItem';
import { useFetch } from '@/hooks/useFetch';
import { Article } from '@/types/types';

export default async function ArticlesList() {
	const articles = await useFetch<Article[]>({
		url: 'https://jsonplaceholder.typicode.com/posts',
	});

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{articles.slice(0, 6).map((article: Article) => (
				<ArticlesItem article={article} key={article.id} />
			))}
		</div>
	);
}
