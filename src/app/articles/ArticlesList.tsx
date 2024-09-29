import ArticlesItem from '@/components/articles/ArticlesItem';
import { Article } from '@/types/types';

async function fetchArticles(): Promise<Article[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      next: {
        revalidate: 120,
        tags: ['articles'],
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export default async function ArticlesList() {
  const articles = await fetchArticles();

  return (
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {articles.map((article) => (
        <ArticlesItem article={article} key={article.id} />
      ))}
    </div>
  );
}
