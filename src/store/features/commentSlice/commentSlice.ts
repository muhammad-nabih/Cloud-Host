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
			const avatar = 'https://robohash.org/a3c5bed4f24d3b464bac5ecd033e1efc?set=set4&bgset=&size=400x400';
			const newComment: Comment = {
				id: randomUUID(),
				author: { id: randomUUID(), name: 'Mohamed', avatar: avatar },
				content: action.payload,
				createdAt: new Date().toISOString(),
				replies: [],
				likedBy: [],
				parentId: null,
			};
			state.unshift(newComment);
		},

		addLike: (state, { payload }: PayloadAction<AddLike>) => {
			const { id, currentUser } = payload;
			const updateLikes = (comments: Comment[]) => {
				for (let comment of comments) {
					if (comment.id === id) {
						const isLiked = comment.likedBy.includes(currentUser);
						if (isLiked) {
							comment.likedBy = comment.likedBy.filter((user: string) => user !== currentUser);
						} else {
							comment.likedBy.push(currentUser);
						}
						return;
					}

					// replies

					if (comment.replies.length > 0) {
						updateLikes(comment.replies);
					}
				}
			};

			updateLikes(state);
		},

		// Add Reply To Comment
		addReply: (state, { payload }: PayloadAction<AddReplyPayload>) => {
			const { parentId, content, currentUser } = payload;

			const addReplyToComment = (comments: Comment[]) => {
				const newReply = {
					id: randomUUID(),
					author: { id: randomUUID(), name: currentUser, avatar: '' },
					content,
					createdAt: new Date().toISOString(),
					replies: [],
					likedBy: [],
					parentId: parentId,
				};
				for (let comment of comments) {
					if (comment.id === parentId) {
						comment.replies.push(newReply);
						return true;
					} else {
						if (comment.replies.length > 0) {
							const replyFound = addReplyToComment(comment.replies);
							if (replyFound) return true;
						}
					}
				}
				return false;
			};
			addReplyToComment(state);
		},

		deleteComment: (state, { payload }: PayloadAction<string>) => {
			const id = payload;
			const deleteInComment = (comments: Comment[]): Comment[] => {
				const IDsToDelete = new Set<string>();
				const collectIdsToDelete = (comments: Comment[]): void => {
					comments.forEach((comment: Comment) => {
						if (comment.id === id) {
							IDsToDelete.add(comment.id);
						} else if (comment.replies.length > 0) {
							collectIdsToDelete(comment.replies);
						}
					});
				};

				collectIdsToDelete(comments);
				return comments.filter((comment) => !IDsToDelete.has(comment.id));
			};

			const updateState = deleteInComment(state);
			state.splice(0, state.length, ...updateState);
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
