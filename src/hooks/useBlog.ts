"use client";
import { useMemo } from 'react';
import blogData from '@/data/blog.json';

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  content?: string;
  tags?: string[];
}

export function useBlog(): BlogPost[] {
  const posts = useMemo(() => {
    return (blogData.posts || []) as BlogPost[];
  }, []);

  return posts;
}

export function useRecentBlogPosts(limit: number = 3): BlogPost[] {
  const posts = useBlog();
  return posts.slice(0, limit);
}

export function useBlogPost(slug: string): BlogPost | undefined {
  const posts = useBlog();
  return posts.find(post => post.slug === slug);
}
