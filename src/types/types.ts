import { Dispatch, SetStateAction } from 'react';

export interface Article {
	id: number;
	title: string;
	userId: number;
	body: string;
}

export interface PlanFeature {
	text: string;
	included: boolean;
}

export interface PricingPlan {
	name: string;
	price: {
		monthly: number;
		yearly: number;
	};
	description: string;
	features: PlanFeature[];
}

export interface Children {
	children: React.ReactNode;
}

export interface RootLayout {
	children: React.ReactNode;
}

export type MenuItem = {
	id: string;
	label: string;
	icon: React.ElementType;
	href: string;
};

// Used At hooks/useFetch.ts
export interface FetchParams {
	url: string;
	parameter?: string;
}

export interface Params {
	params: { id: string };
}

export interface CommentItemProps {
	id: string;
	author: { name: string; avatar: string };
	content: string;
	createdAt: Date;
	likes: number;
	replies: number;
	onEdit: (id: string, newContent: string) => void;
	onDelete: (id: string) => void;
	onLike: (id: string) => void;
	onReply: (id: string) => void;
	isLiked: boolean;
	currentUser: string;
}

export interface Comment {
	id: string;
	author: { name: string; avatar: string };
	content: string;
	createdAt: Date;
	likes: number;
	replies: number;
	likedBy: string[];
}
