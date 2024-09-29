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
