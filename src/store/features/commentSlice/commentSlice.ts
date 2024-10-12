import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { initialComments } from '@/data/dataComments';
import { Comment } from '@/types/types';
import ShortUniqueId from 'short-unique-id';
const { randomUUID } = new ShortUniqueId({ length: 10 });
import { AddLike } from '@/types/types';

// Define the initial state using that type
const initialState = initialComments;

export const commentSlice = createSlice({
	name: 'comments',

	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addComment: (state, action: PayloadAction<string>) => {
			const newComment: Comment = {
				id: randomUUID(),
				author: { id: randomUUID(), name: 'Mohamed', avatar: 'public/avatar.svg' },
				content: action.payload,
				createdAt: new Date().toISOString(),
				replies: [],
				likedBy: [],
			};
			state.push(newComment);
		},
		addLike: (state, { payload }: PayloadAction<AddLike>) => {
			const { id, likedBy, currentUser } = payload;
			state.map((comment) => {
				if (comment.id === id) {
					let isLiked = likedBy.includes(currentUser);
					if (isLiked) {
						comment.likedBy = likedBy.filter((user: string) => user !== currentUser);
					} else {
						comment.likedBy.push(currentUser);
					}
				}
			});
		},
		addReply: (state, action: PayloadAction<string>) => {},
		deleteComment: (state, { payload }: PayloadAction<string>) => {
			return state.filter((comment) => comment.id != payload);
		},
		editComment: (state, { payload }: PayloadAction<{ id: string; content: string }>) => {
			state.map((comment) => {
				if (comment.id === payload.id) {
					comment.content = payload.content;
				}
			});
		},
	},
});

export const { addComment, addLike, addReply, deleteComment, editComment } = commentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default commentSlice.reducer;
