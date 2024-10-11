'use client';
import { useState } from 'react';
import CommentItem from '@/components/comments/CommentItem';
import AddCommentForm from '@/components/comments/AddCommentForm';
import { Comment } from '@/types/types';
import { initialComments } from '@/data/dataComments';

export default function CommentsSection() {
	const [allComments, setAllComments] = useState<Comment[]>(initialComments);
	const [currentUser] = useState('mohamed-nabih'); // Replace with actual user authentication

	const handleEdit = (id: string, newContent: string): void => {
		setAllComments(allComments.map((comment) => (comment.id === id ? { ...comment, content: newContent } : comment)));
	};

	const handleDelete = (id: string): void => {
		setAllComments(allComments.filter((comment) => comment.id !== id));
	};

	const handleLike = (id: string): void => {
		setAllComments(
			allComments.map((comment) => {
				if (comment.id === id) {
					const userLikedIndex = comment.likedBy.indexOf(currentUser);
					if (userLikedIndex === -1) {
						// User hasn't liked the comment, so add like
						return {
							...comment,
							likes: comment.likes + 1,
							likedBy: [...comment.likedBy, currentUser],
						};
					} else {
						// User has already liked the comment, so remove like
						return {
							...comment,
							likes: comment.likes - 1,
							likedBy: comment.likedBy.filter((userId) => userId !== currentUser),
						};
					}
				}
				return comment;
			}),
		);
	};

	const handleReply = (id: string): void => {
		// Implement reply logic
	};

	const handleAddComment = (content: string): void => {
		const newComment: Comment = {
			id: Date.now().toString(),
			author: { name: 'Current User', avatar: 'public/avatar.svg' },
			content,
			createdAt: new Date(),
			likes: 0,
			replies: 0,
			likedBy: [],
		};
		setAllComments([newComment, ...allComments]);
	};

	return (
		<div className='container mx-auto my-8 space-y-4'>
			<AddCommentForm onAddComment={handleAddComment} />
			{allComments.map((comment) => (
				<CommentItem
					key={comment.id}
					{...comment}
					onEdit={handleEdit}
					onDelete={handleDelete}
					onLike={handleLike}
					onReply={handleReply}
					isLiked={comment.likedBy.includes(currentUser)}
					currentUser={currentUser}
				/>
			))}
		</div>
	);
}
