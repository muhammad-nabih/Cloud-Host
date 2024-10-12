import { Comment } from '@/types/types';
import ShortUniqueId from 'short-unique-id';

const { randomUUID } = new ShortUniqueId({ length: 10 });

export const initialComments: Comment[] = [
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Mohamed', avatar: 'public/avatar.svg' },
		content: 'Thanks for this article',
		createdAt: new Date('2024-01-01T12:00:00').toISOString(), // Store as string
		replies: [],
		likedBy: [],
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Ali', avatar: 'public/avatar.svg' },
		content: 'Thanks for this article',
		createdAt: new Date('2024-03-12T12:00:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed', 'Fatima'],
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Sayed', avatar: 'public/avatar.svg' },
		content: 'Thanks for this article',
		createdAt: new Date('2024-02-01T12:00:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed'],
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Ahmed', avatar: 'public/avatar.svg' },
		content: 'Great read, learned a lot!',
		createdAt: new Date('2024-05-10T08:30:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed', 'Sayed'],
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Fatima', avatar: 'public/avatar.svg' },
		content: 'Very informative article!',
		createdAt: new Date('2024-06-22T14:15:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed', 'Kareem'],
	},
];
