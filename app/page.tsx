import Link from "next/link";
import { posts } from "./data/posts";

const BlogList = () => {
  return (
    <div className="container mx-auto px-4 py-8"> 
    
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
        React vs Next.js Blog
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link
              href={`/posts/${post.id}`}
              className="block text-xl font-semibold text-gray-800 hover:text-blue-600 mb-4"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 text-base mb-4">{post.content.slice(0, 120)}...</p>
            <div className="mt-4">
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
