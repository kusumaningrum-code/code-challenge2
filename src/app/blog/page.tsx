"use client";
import React, { useState, useEffect } from "react";
import { fetchBlogPosts } from "../../../lib/contentful";
import Navbar from "@/components/Navbar";

interface BodyContent {
  content: Array<{
    content: Array<{ value: string }>;
  }>;
}

interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    body: BodyContent;
  };
}

const BlogPostPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const posts = await fetchBlogPosts();
      console.log("Posts loaded:", posts);
      setBlogPosts(posts);
      setLoading(false);
    };

    loadBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (blogPosts.length === 0) {
    return <div>No blog posts found</div>;
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4 text-lg">
          Explore interesting posts about various topics
        </p>
      </section>

      {/* Blog Posts List */}
      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        <ul>
          {blogPosts.map((entry) => (
            <li key={entry.sys.id} className="mb-4">
              <a
                href={`/blog/${entry.fields.slug}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {entry.fields.title}
              </a>
              <p className="text-gray-700 mt-2">
                {/* Display a preview of the blog content */}
                {entry.fields.body &&
                entry.fields.body.content &&
                entry.fields.body.content[0]
                  ? entry.fields.body.content[0].content[0].value
                  : "No content available"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPostPage;
