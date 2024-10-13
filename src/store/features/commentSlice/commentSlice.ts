import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialComments } from '@/data/dataComments';
import { Comment, AddLike, AddReplyPayload } from '@/types/types';
import ShortUniqueId from 'short-unique-id';
const { randomUUID } = new ShortUniqueId({ length: 10 });

const initialState = initialComments;

export const commentSlice = createSlice({
	name: 'comments',
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
				parentId: null,
			};
			state.push(newComment);
		},

		addLike: (state, { payload }: PayloadAction<AddLike>) => {
			const { id, currentUser } = payload;
			const updateLikes = (comments: Comment[]) => {
				for (let comment of comments) {
					if (comment.id === id) {
						let isLiked = comment.likedBy.includes(currentUser);
						if (isLiked) {
							comment.likedBy = comment.likedBy.filter((user: string) => user !== currentUser);
						} else {
							comment.likedBy.push(currentUser);
						}
						return;
					}
					if (comment.replies.length > 0) {
						updateLikes(comment.replies);
					}
				}
			};
			updateLikes(state);
		},

		addReply: (state, { payload }: PayloadAction<AddReplyPayload>) => {
			const { parentId, content } = payload;
			const newReply: Comment = {
				id: randomUUID(),
				author: { id: randomUUID(), name: 'Mohamed', avatar: 'public/avatar.svg' },
				content: content,
				createdAt: new Date().toISOString(),
				replies: [],
				likedBy: [],
				parentId: parentId,
			};

			const addReplyToComment = (comments: Comment[]) => {
				for (let comment of comments) {
					if (comment.id === parentId) {
						comment.replies.push(newReply);
						return true;
					}
					if (comment.replies.length > 0 && addReplyToComment(comment.replies)) {
						return true;
					}
				}
				return false;
			};

			addReplyToComment(state);
		},
		deleteComment: (state, { payload }: PayloadAction<string>) => {
			const deleteFromComments = (comments: Comment[]) => {
				for (let i = 0; i < comments.length; i++) {
					if (comments[i].id === payload) {
						comments.splice(i, 1);
						return true;
					}
					if (comments[i].replies.length > 0) {
						if (deleteFromComments(comments[i].replies)) {
							return true;
						}
					}
				}
				return false;
			};
			deleteFromComments(state);
		},
		editComment: (state, { payload }: PayloadAction<{ id: string; content: string }>) => {
			const editInComments = (comments: Comment[]) => {
				for (let comment of comments) {
					if (comment.id === payload.id) {
						comment.content = payload.content;
						return true;
					}
					if (comment.replies.length > 0 && editInComments(comment.replies)) {
						return true;
					}
				}
				return false;
			};
			editInComments(state);
		},
	},
});

export const { addComment, addLike, addReply, deleteComment, editComment } = commentSlice.actions;

export default commentSlice.reducer;
