
export enum Category {
  FERTILIZERS = 'Fertilizers',
  FEED_ADDITIVES = 'Feed Additives',
  MINERALS = 'Minerals'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  specifications: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}
