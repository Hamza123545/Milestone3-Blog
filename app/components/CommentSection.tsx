"use client";

import React, { useState } from "react";

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log(`Adding comment to post ${postId}: ${newComment}`);
      setComments((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="space-y-8 mt-10 max-w-3xl mx-auto">
      <h3 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        Comments
      </h3>

      {/* Comment Display Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center">No comments yet...</p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-gray-700">{comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Input Area for New Comment */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Post
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Type your comment and press "Post" to add it.
        </p>
      </div>
    </div>
  );
};

export default CommentSection;
