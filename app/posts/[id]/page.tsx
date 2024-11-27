"use client";
import { posts } from "../../data/posts";
import { useRouter } from "next/navigation";
import CommentSection from "../../components/CommentSection";
import Image from "next/image";

const PostPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = posts.find((post) => post.id === id);

  const router = useRouter();

  const currentIndex = posts.findIndex((post) => post.id === id);

  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (!post) {
    return <p className="text-center text-xl text-red-500">Post not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-lg shadow-2xl">
      {/* Post Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6 hover:text-blue-600 transition-all duration-300">
        {post.title}
      </h1>

      {/* Post Image */}
      <div className="w-full h-80 relative rounded-lg overflow-hidden mb-6">
        <Image
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full transition-all duration-500 ease-in-out transform hover:scale-105"
          layout="fill"
        />
      </div>

      {/* Post Content */}
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 space-x-4">
        {previousPost && (
          <button
            onClick={() => router.push(`/posts/${previousPost.id}`)}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Previous: {previousPost.title}
          </button>
        )}
        {nextPost && (
          <button
            onClick={() => router.push(`/posts/${nextPost.id}`)}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Next: {nextPost.title}
          </button>
        )}
      </div>

      {/* Comment Section */}
      <div className="mt-12">
        <CommentSection postId={id} />
      </div>
    </div>
  );
};

export default PostPage;
