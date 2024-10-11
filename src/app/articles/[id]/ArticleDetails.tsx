import AddCommentForm from '@/components/comments/AddCommentForm';
import CommentItem from '@/components/comments/CommentItem';
import CommentsSection from '@/components/comments/CommentSection';
import { useFetch } from '@/hooks/useFetch';
import { Article, Params } from '@/types/types';
import { ToastContainer } from 'react-toastify';

const ArticleDetails = async ({ params }: Params) => {
	const { id } = params;
	const article = await useFetch<Article>({
		url: `https://jsonplaceholder.typicode.com/posts/${id}`,
	});

	return (
		<>
			<ToastContainer />
			<section className='fix-height item-center container mx-auto flex w-full flex-col justify-center'>
				<div className='mx-auto my-3 flex flex-col items-center justify-center space-y-3 rounded-lg border-2 bg-gray-900 p-4 text-center'>
					<h1 className='text-3xl font-bold text-blue-100'>{article.title}</h1>
					<p className='text-lg text-gray-300'>{article.body}</p>
					<p className='text-sm text-gray-400'>
						By
						<a href={`https://jsonplaceholder.typicode.com/users/${article.userId}`} className='text-blue-600 hover:underline'>
							{article.userId}
						</a>
					</p>
				</div>

				<CommentsSection />
			</section>
		</>
	);
};

export default ArticleDetails;
