import { Article } from '@/utils/types';
import Link from 'next/link';

const ArticlesItem = ({ article }: { article: Article }) => (
  <article className="flex flex-col justify-between space-y-2 rounded-lg bg-white p-4 shadow-2xl dark:bg-slate-800 md:p-6 lg:p-8">
    <h3 className="text-neutral-750 line-clamp-1 border-b-2 border-blue-400 bg-inherit px-2 text-center text-xl font-bold">
      {article.title}
    </h3>
    <p className="mt-4 line-clamp-2 overflow-hidden text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
      {article.body}
    </p>
    <Link
      href={`/articles/${article.id}`}
      className="mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      Read More...
    </Link>
  </article>
);

export default ArticlesItem;
