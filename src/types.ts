export type Category = 
  | "report" 
  | "marketing" 
  | "education" 
  | "hr" 
  | "sales" 
  | "data" 
  | "legal" 
  | "it" 
  | "strategy" 
  | "public";

export interface Prompt {
  id: string;
  category: Category;
  role: string;
  type: string;
  content: string;
  title: string;
}

export interface Translation {
  title: string;
  subtitle: string;
  enhancerTitle: string;
  enhancerPlaceholder: string;
  enhanceButton: string;
  copySuccess: string;
  searchPlaceholder: string;
  categories: Record<Category, string>;
  labels: {
    role: string;
    type: string;
    copy: string;
  };
}
