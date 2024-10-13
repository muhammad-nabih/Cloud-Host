'use client';
import { useState } from 'react';
import CommentItem from '@/components/comments/CommentItem';
import AddCommentForm from '@/components/comments/AddCommentForm';
import { useAppSelector } from '@/store/hooks';
import { Comment } from '@/types/types';

export default function CommentsSection() {
	const comments = useAppSelector((state) => state.comments);

	const renderComments = (comments: Comment[]) => {
		return comments.map((comment: Comment) => (
			<div key={comment.id} className='mb-4'>
				<CommentItem {...comment} />
			</div>
		));
	};

	return (
		<div className='container mx-auto my-8 space-y-4'>
			<AddCommentForm />
			{renderComments(comments)}
		</div>
	);
}
