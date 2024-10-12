'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Pencil, Trash2, ThumbsUp, MessageSquare } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
// import { CommentItemProps } from '@/types/types';
import { BiSolidLike } from 'react-icons/bi';
import { Comment } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addLike, deleteComment, editComment } from '@/store/features/commentSlice/commentSlice';

export default function CommentItem({ author, content, createdAt, id, replies, likedBy }: Comment) {
	const currentUser = 'Mohamed';
	const [showMenu, setShowMenu] = useState(false);
	const [isLiked, setIsLiked] = useState(likedBy.includes(currentUser));
	const [updateComment, setUpdateComment] = useState(content);
	const dispatch = useAppDispatch();
	const comments = useAppSelector((state) => state.comments);

	const handleEdit = () => {
		dispatch(editComment({ id, content: updateComment }));
		setShowMenu(false);
	};

	const handleDelete = () => {
		dispatch(deleteComment(id));
	};

	const handleLike = () => {
		dispatch(addLike({ id, likedBy, currentUser }));
		setIsLiked((prev) => !prev);
	};

	return (
		<Card className='bg-grey-950 w-full'>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<div className='flex items-center space-x-2'>
					<Avatar className='h-8 w-8'>
						<AvatarImage src={author.avatar} alt={author.name} />
						<AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
					</Avatar>
					<div>
						<p className='text-sm font-semibold'>{author.name}</p>
						<p className='text-xs text-muted-foreground'>{format(createdAt, "MMM d, yyyy 'at' h:mm a")}</p>
					</div>
				</div>

				{/* Dropdown Menu for edit and delete  */}

				{currentUser === author.name && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' className='h-8 w-8 p-0'>
								<span className='sr-only'>Open menu</span>
								<Pencil className='h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem onClick={() => setShowMenu(true)}>
								<Pencil className='mr-2 h-4 w-4' />
								<span>Edit</span>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={handleDelete}>
								<Trash2 className='mr-2 h-4 w-4' />
								<span>Delete</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</CardHeader>

			<CardContent>
				<section className='flex flex-col space-y-2'>
					{showMenu ? (
						<div className='my-4'>
							<Input value={updateComment} onChange={(e) => setUpdateComment(e.target.value)} />
							<div className='my-3 flex space-x-2'>
								<Button onClick={handleEdit}>Save</Button>
								<Button onClick={() => setShowMenu(false)} variant='outline'>
									Cancel
								</Button>
							</div>
						</div>
					) : (
						<p className='text-sm'>{content}</p>
					)}
				</section>
			</CardContent>

			<CardFooter className='flex justify-between'>
				<div className='flex items-center gap-4 space-x-4'>
					<Button onClick={handleLike} variant='ghost' size='sm' className={`flex w-20 items-center space-x-1`}>
						{isLiked ? <BiSolidLike className={`h-4 w-4 text-blue-600`} /> : <ThumbsUp className={`h-4 w-4`} />}
						<span>{likedBy.length}</span>
					</Button>

					<Button variant='ghost' size='sm' className='w-22 flex items-center space-x-1'>
						<MessageSquare className='h-4 w-4' />
						<span>{replies.length}</span>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
