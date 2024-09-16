import { Suspense } from 'react';
import ArticlesItem from '@/components/articles/ArticlesItem';
import { Article } from '@/utils/types';

async function fetchArticles(): Promise<Article[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

async function ArticlesList() {
  const articles = await fetchArticles();

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((article) => (
        <ArticlesItem article={article} key={article.id} />
      ))}
    </div>
  );
}

export default async function Articles() {
  return (
    <section>
      <h1 className="px-4 py-3 text-center text-3xl font-bold">Articles</h1>
      <Suspense fallback={<h2 className="text-2xl"> Articles are loading...</h2>}>
        <ArticlesList />
      </Suspense>
    </section>
  );
}
