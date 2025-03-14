export interface BlogPost {
  title: string;
  date: string;
  content: string;
  hashtags: string[];
  image: string;
}

export interface BlogData {
  posts: BlogPost[];
} 