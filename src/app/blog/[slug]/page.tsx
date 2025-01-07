"use client";
import Comment from "@/app/components/comment";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "../../data/blogsData"; // Import blogs data

const BlogDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL

  // Find the blog post by slug
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-4xl font-bold font-mono text-gray-400">
          Blog not found 🧐
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto lg:px-52 px-6 mb-10">
      {/* Blog Header */}
      <div className="my-8 p-5 bg-[#66656534] border-[#83828134] rounded-lg">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-white">{blog.title}</h1>
      </div>

      {/* Blog Image */}
      <div className="my-6">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={1200}
          height={600}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div
        className="prose prose-invert max-w-none text-[18px] text-gray-300 mt-6 leading-7 bg-[#66656534] border-[#83828134] py-6 px-3 md:px-5 lg:px-6 rounded-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <Comment />

      {/* Back Button */}
      <button className="mt-8">
        <Link
          href="/blog"
          className="inline-block px-4 py-2 text-[#55e4fd] text-sm sm:text-base border border-[#55e4fd] rounded-lg hover:bg-[#55e4fd] hover:text-black transition sm:px-6 sm:py-3"
        >
          Back to All Blogs
        </Link>
      </button>
    </div>
  );
};

export default BlogDetails;
