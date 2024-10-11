'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Pencil, Trash2, ThumbsUp, MessageSquare } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { CommentItemProps } from '@/types/types';
import { BiSolidLike } from 'react-icons/bi';

export default function CommentItem({ id, author, content, createdAt, likes, replies, onEdit, onDelete, onLike, onReply, isLiked, currentUser }: CommentItemProps) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);

	const handleLike = () => {
		onLike(id);
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSaveEdit = () => {
		onEdit(id, editedContent);
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		setEditedContent(content);
		setIsEditing(false);
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
				{author.name === currentUser && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' className='h-8 w-8 p-0'>
								<span className='sr-only'>Open menu</span>
								<Pencil className='h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem onClick={handleEdit}>
								<Pencil className='mr-2 h-4 w-4' />
								<span>Edit</span>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={() => onDelete(id)}>
								<Trash2 className='mr-2 h-4 w-4' />
								<span>Delete</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</CardHeader>

			<CardContent>
				{isEditing ? (
					<div className='flex flex-col space-y-2'>
						<Input value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
						<div className='flex space-x-2'>
							<Button onClick={handleSaveEdit}>Save</Button>
							<Button variant='outline' onClick={handleCancelEdit}>
								Cancel
							</Button>
						</div>
					</div>
				) : (
					<p className='text-sm'>{content}</p>
				)}
			</CardContent>

			<CardFooter className='flex justify-between'>
				<div className='flex items-center gap-4 space-x-4'>
					<Button variant='ghost' size='sm' className={`flex w-20 items-center space-x-1`} onClick={handleLike}>
						{isLiked ? <BiSolidLike className={`h-4 w-4 text-blue-600`} /> : <ThumbsUp className={`h-4 w-4`} />}
						<span>{likes}</span>
					</Button>

					<Button variant='ghost' size='sm' className='w-22 flex items-center space-x-1' onClick={() => onReply(id)}>
						<MessageSquare className='h-4 w-4' />
						<span>{replies}</span>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
