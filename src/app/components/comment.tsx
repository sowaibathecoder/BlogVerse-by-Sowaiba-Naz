"use client";
import { useState, useEffect } from "react";

export default function Comment() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for validation error

  // Load comments from local storage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Function to handle comment submission
  const handleAddComment = () => {
    if (newComment.trim() === "") {
      setErrorMessage("Please fill out this field."); // Show error if input is empty
      return;
    }
    setComments([...comments, newComment]);
    setNewComment("");
    setErrorMessage(""); // Clear error message on successful submission
  };

  // Function to delete a specific comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="pt-5 mt-10">
      <h1 className="lg:text-2xl text-white mb-1">Comments</h1>
      <textarea
        className="bg-[#66656534] border-[#83828134] rounded-lg lg:w-[500px] w-[280px] grid items-center justify-center pl-2 pt-2 text-white"
        placeholder="Write Your Comment..."
        cols={5}
        rows={4}
        value={newComment}
        onChange={(data) => {
          setNewComment(data.target.value);
          setErrorMessage(""); // Clear error message while typing
        }}
      ></textarea>
      {/* Validation Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}

      <div className="flex justify-start items-center">
        <button
          onClick={handleAddComment}
          className="mt-4 px-4 py-2 text-sm sm:text-base bg-[#55e4fd] text-black border border-[#55e4fd] rounded-lg hover:bg-[#55e4fd] hover:text-black transition sm:px-8 sm:py-2"
        >
          Post Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-5">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-3 mt-2 bg-gray-100 flex justify-between items-center"
          >
            <span className="text-black">{comment}</span>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
