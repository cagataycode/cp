"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Post } from "./Post";

// This type can be generated from Prisma client or defined here
type PostWithDetails = {
  id: string;
  title: string;
  content: JSON | null;
  createdAt: Date;
  author: {
    id: string;
    name: string | null;
    username: string | null;
    image: string | null;
  };
  isAnonymous: boolean;
  displayName?: string | null;
  comments: { id: string }[];
};

export default function PostsFeed() {
  const [posts, setPosts] = useState<PostWithDetails[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Button>
        <Link href="/cp/create">Create Post</Link>
      </Button>
      {/* Posts List */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
