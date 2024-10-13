'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaComment } from 'react-icons/fa';
import { useAppDispatch } from '@/store/hooks';
import { addComment } from '@/store/features/commentSlice/commentSlice';

const AddCommentForm = () => {
	const dispatch = useAppDispatch();
	const [newComment, setNewComment] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addComment(newComment));
		setNewComment('');
		toast.success('Comment added successfully', {
			position: 'top-right',
			autoClose: 1000,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	return (
		<form onSubmit={handleSubmit} className='flex w-full items-center gap-3'>
			<Input autoFocus id='text' type='text' name='comment' placeholder='Add Your Comment...' value={newComment} onChange={(e) => setNewComment(e.target.value)} required className='grow' />
			<button type='submit' className={`flex w-52 cursor-pointer items-center justify-center gap-2 rounded bg-blue-700 px-5 py-2 text-sm text-white hover:bg-blue-800`}>
				<span className='text-xs font-bold lg:text-[1rem]'>Add Comment</span>
				<FaComment />
			</button>
		</form>
	);
};

export default AddCommentForm;
