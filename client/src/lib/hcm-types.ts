/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * Typed domain vocabulary stays independent from UI and persistence so the local prototype
 * can be replaced by Supabase repositories without changing the product experience.
 */

export type ActionStatus = "to-do" | "in-progress" | "complete" | "measured";
export type ContentStatus = "Draft" | "Ready for approval" | "Approved";

export interface BusinessCheck {
  businessName: string;
  makerName: string;
  craftCategory: string;
  location: string;
  website: string;
  socialChannels: string;
  sellingChannels: string;
  products: string;
  idealCustomer: string;
  biggestProblem: string;
  discovery: string;
  collectsDetails: string;
  followsUp: string;
  goal90: string;
}

export interface GrowthScore {
  overall: number;
  visibility: number;
  presentation: number;
  content: number;
  enquiries: number;
  followUp: number;
  repeat: number;
  seasonal: number;
}

export interface GrowthAction {
  id: string;
  title: string;
  description: string;
  why: string;
  priority: "High" | "Medium" | "Low";
  due: string;
  status: ActionStatus;
  expected: string;
  category: "Visibility" | "Enquiries" | "Customers" | "Content" | "Seasonal";
  social: string;
  email: string;
  websiteCopy: string;
  storyAngle: string;
}

export interface MakerCustomer {
  id: string;
  name: string;
  purchase: string;
  lastPurchase: string;
  lastContact: string;
  opportunity: string;
  notes: string;
  message: string;
  followUpDate: string;
  completed: boolean;
}

export interface ContentItem {
  id: string;
  idea: string;
  type: string;
  text: string;
  status: ContentStatus;
}

export interface Campaign {
  id: string;
  name: string;
  goal: string;
  audience: string;
  product: string;
  start: string;
  end: string;
  status: "Planning" | "Active" | "Completed";
}

export interface Metrics {
  enquiries: number;
  newCustomers: number;
  repeatCustomers: number;
  sales: number;
  visits: number;
}

export interface Workspace {
  check: BusinessCheck;
  score: GrowthScore;
  actions: GrowthAction[];
  customers: MakerCustomer[];
  content: ContentItem[];
  campaigns: Campaign[];
  metrics: Metrics;
  currentMonth: string;
  nextMonth: string;
  reviewOpened: boolean;
  nextPlanCreated: boolean;
}
