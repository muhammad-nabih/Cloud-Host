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
export interface Comment {
	id: string;
	author: { id: string; name: string; avatar: string };
	content: string;
	createdAt: string;
	replies: Comment[];
	likedBy: string[];
	parentId: string | null;
}

export interface AddLike {
	id: string;
	currentUser: string;
}

export interface AddReplyPayload {
	parentId: string;
	content: string;
    currentUser: string;
}
