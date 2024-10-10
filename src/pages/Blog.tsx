import React from 'react';
import BlogPosts from '../components/BlogPosts';

const Blog: React.FC = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <BlogPosts />
      </div>
    </div>
  );
};

export default Blog;