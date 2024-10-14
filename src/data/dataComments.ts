import { Comment } from '@/types/types';
import ShortUniqueId from 'short-unique-id';
const { randomUUID } = new ShortUniqueId({ length: 10 });
const avatar = 'https://gravatar.com/avatar/735f9c3aefab5a662ab3d90c0a2ce03d?s=400&d=robohash&r=x';
const avatar2 = 'https://robohash.org/735f9c3aefab5a662ab3d90c0a2ce03d?set=set4&bgset=&size=400x400';
const avatar3 = 'https://robohash.org/76ec88fc26a17ed3e259cfd73759d1d9?set=set4&bgset=&size=400x400';
export const initialComments: Comment[] = [
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Mohamed', avatar: avatar },
		content: 'Thanks for this article',
		createdAt: new Date('2024-01-01T12:00:00').toISOString(), // Store as string
		replies: [],
		likedBy: [],
		parentId: null,
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Ali', avatar: avatar2 },
		content: 'Thanks for this article',
		createdAt: new Date('2024-03-12T12:00:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed', 'Fatima'],
		parentId: null,
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Sayed', avatar: avatar3 },
		content: 'Thanks for this article',
		createdAt: new Date('2024-02-01T12:00:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed'],
		parentId: null,
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Ahmed', avatar: '' },
		content: 'Great read, learned a lot!',
		createdAt: new Date('2024-05-10T08:30:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed', 'Sayed'],
		parentId: null,
	},
	{
		id: randomUUID(),
		author: { id: randomUUID(), name: 'Fatima', avatar: '' },
		content: 'Very informative article!',
		createdAt: new Date('2024-06-22T14:15:00').toISOString(), // Store as string
		replies: [],
		likedBy: ['Ali', 'Mohamed', 'Kareem'],
		parentId: null,
	},
];
