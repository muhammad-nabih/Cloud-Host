import { Comment } from "@/types/types";

// Fetch comments from your database here
export const initialComments: Comment[] = [
	{
		id: '1',
		author: { name: 'YOUSSEF', avatar: 'public/avatar.svg' },
		content: 'Thanks for this article',
		createdAt: new Date('2024-01-01T12:00:00'),
		likes: 5,
		replies: 2,
		likedBy: [],
	},
	{
		id: '2',
		author: { name: 'mohamed-nabih', avatar: 'public/avatar.svg' },
		content: 'Great insights!',
		createdAt: new Date('2024-01-01T12:00:00'),
		likes: 9,
		replies: 2,
		likedBy: [],
	},
];
