import { Article } from '@/types/types';
interface Params {
  params: { id: string };
}

const fetchArticlesDetails = async (
  id: string,
): Promise<Article> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch article Details for id ${id}`,
    );
  }
  const article: Article = await response.json();
  return article;
};
const ArticleDetails = async ({ params }: Params) => {
  const { id } = params;
  const article = await fetchArticlesDetails(id);

  return (
    <section className='fix-height flex items-center justify-center'>
      <div className='mx-auto my-3 flex w-11/12 flex-col items-center justify-center space-y-3 rounded-lg border-2 bg-gray-900 p-4'>
        <h1 className='text-3xl font-bold text-blue-100'>
          {article.title}
        </h1>
        <p className='text-lg text-gray-300'>
          {article.body}
        </p>
        <p className='text-sm text-gray-400'>
          {' '}
          By{' '}
          <a
            href={`https://jsonplaceholder.typicode.com/users/${article.userId}`}
            className='text-blue-600 hover:underline'>
            {article.userId}
          </a>
        </p>
      </div>
    </section>
  );
};

export default ArticleDetails;
