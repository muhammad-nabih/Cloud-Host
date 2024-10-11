import { Suspense } from 'react';
import ArticlesList from '@/app/articles/ArticlesList';
import { Metadata } from 'next';
import SearchArticlesInput from '@/components/articles/SearchArticlesInput';
import { ArticlePagination } from '@/components/articles/ArticlePagination';

export default async function Articles() {
	return (
		<section className='fix-height container mx-auto my-3 space-y-6'>
			<h1 className='px-4 py-3 text-center text-3xl font-bold'>Articles</h1>
			<Suspense fallback={<h2 className='text-2xl'> Articles are loading...</h2>}>
				<SearchArticlesInput />
				<ArticlesList />
			</Suspense>
			<ArticlePagination />
		</section>
	);
}
export const metadata: Metadata = {
	title: 'Cloud Host | Articles',
	description: 'This Is ARticles Page',
};
