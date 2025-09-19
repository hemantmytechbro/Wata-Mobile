 // types/PostItem.ts
export interface PostItem {
  id: string;
  user: string;
  avatar: string;
  title: string;
  description: string;
  image: string;
  comments: number;
  views: number;
  votes: number;
  shares: number;
repost?: number; 
}
