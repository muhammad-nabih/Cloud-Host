'use client';
import { useState } from 'react';
import CommentItem from '@/components/comments/CommentItem';
import AddCommentForm from '@/components/comments/AddCommentForm';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useAppSelector } from '@/store/hooks';
import { Comment } from '@/types/types';

export default function CommentsSection() {
	const [currentUser] = useState('mohamed-nabih'); // Replace with actual user authentication
	const comment = useAppSelector((state) => state.comments);

	const allComment = comment.map((comment: Comment) => {
		return <CommentItem {...comment} key={comment.id} />;
	});
	return (
		<Provider store={store}>
			<div className='container mx-auto my-8 space-y-4'>
				<AddCommentForm />

				{allComment}
			</div>
		</Provider>
	);
}
