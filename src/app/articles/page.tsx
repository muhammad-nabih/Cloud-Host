import { Suspense } from 'react';
import ArticlesList from '@/app/articles/ArticlesList';

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
