'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaComment } from 'react-icons/fa';
const AddCommentForm = ({ onAddComment }: { onAddComment: (comment: string) => void }) => {
	const [comment, setComment] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		onAddComment(comment);
		toast.success('Comment added successfully', {
			position: 'top-right',
			autoClose: 1000,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		setComment('');
	};

	return (
		<form onSubmit={handleSubmit} className='flex w-full items-center gap-3'>
			<Input
				id='text'
				type='text'
				name='comment'
				placeholder='Add Your Comment...'
				value={comment}
				required
				className='grow'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
			/>
			<button
				type='submit'
				className={` ${comment.length >= 1 ? 'bg-blue-600' : 'pointer-events-none bg-zinc-500'} flex w-52 cursor-pointer items-center justify-center gap-2 rounded bg-blue-700 px-5 py-2 text-sm text-white hover:bg-blue-800`}>
				<span className='text-xs font-bold lg:text-[1rem]'>Add Comment</span>
				<FaComment />
			</button>
		</form>
	);
};

export default AddCommentForm;
