import React, { useState } from "react";
import { MessageCircle, ThumbsUp, Flag, Send } from "lucide-react";

const CommentsAndQuestionsComponent = () => {
  const [commentText, setCommentText] = useState("");

  // Sample data
  const comments = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar:
        "https://th.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      date: "2 days ago",
      content:
        "Does the university offer any scholarships for international students? I'm interested in the Computer Science program.",
      likes: 12,
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar:
        "https://th.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      date: "1 day ago",
      content:
        "I submitted my application last week. How long does it typically take to hear back about the initial review?",
      likes: 5,
      replies: [
        {
          id: 21,
          author: "Admin",
          avatar:
            "https://th.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          date: "1 day ago",
          content:
            "Hi Michael, typically the initial review takes 2-3 weeks. You should receive an email confirmation once your application is under review.",
          likes: 2,
        },
      ],
    },
    {
      id: 3,
      author: "Priya Patel",
      avatar:
        "https://th.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      date: "16 hours ago",
      content:
        "Are there any virtual campus tours available? I live overseas and can't visit in person before the application deadline.",
      likes: 8,
    },
  ];

  const relatedQuestions = [
    "What are the housing options for first-year students?",
    "How competitive is admission to the Nursing program?",
    "Is the application fee waiver available for low-income students?",
    "Are there early decision benefits?",
    "What types of financial aid packages are typically offered?",
  ];

  const handleSubmitComment = () => {
    if (commentText.trim()) {
      // Logic to submit comment would go here
      setCommentText("");
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg md:max-w-7xl mx-auto w-full my-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column - Comments */}
        <div className="w-full md:w-2/3 space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Recent Questions
          </h3>

          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-start gap-3">
                <img
                  src={comment.avatar}
                  alt={`${comment.author}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-gray-900">
                      {comment.author}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{comment.content}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="flex items-center gap-1 hover:text-violet-600">
                      <ThumbsUp size={16} />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-violet-600">
                      <MessageCircle size={16} />
                      <span>Reply</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-600">
                      <Flag size={16} />
                      <span>Report</span>
                    </button>
                  </div>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 ml-6 space-y-4">
                      {comment.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="bg-gray-50 rounded-lg p-3"
                        >
                          <div className="flex items-start gap-2">
                            <img
                              src={reply.avatar}
                              alt={`${reply.author}'s avatar`}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-medium text-gray-900">
                                  {reply.author}
                                </h4>
                                <span className="text-xs text-gray-500">
                                  {reply.date}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                {reply.content}
                              </p>

                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                                <button className="flex items-center gap-1 hover:text-violet-600">
                                  <ThumbsUp size={14} />
                                  <span>{reply.likes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <button className="text-violet-600 hover:text-violet-800 font-medium flex items-center justify-center w-full py-2 border border-violet-200 rounded-lg bg-white">
            Load More Questions
          </button>
        </div>

        {/* Right column - Comment form and related questions */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Comment input */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Ask a Question
            </h3>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 h-32 resize-none"
              placeholder="Type your question here..."
            />
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-500">
                {commentText.length > 0
                  ? `${commentText.length} characters`
                  : "Be respectful and clear"}
              </span>
              <button
                onClick={handleSubmitComment}
                className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Send size={16} />
                Post Question
              </button>
            </div>
          </div>

          {/* Related questions */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Related Questions
            </h3>
            <ul className="space-y-3">
              {relatedQuestions.map((question, index) => (
                <li key={index}>
                  <button className="text-left w-full p-3 bg-gray-50 hover:bg-violet-50 rounded-lg text-gray-700 hover:text-violet-700 transition-colors">
                    <div className="flex items-start">
                      <MessageCircle
                        size={18}
                        className="mr-2 mt-0.5 text-gray-500"
                      />
                      <span>{question}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community guidelines */}
          <div className="bg-violet-50 rounded-lg p-4 text-sm text-violet-800">
            <h4 className="font-medium mb-2">Community Guidelines</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Be respectful to other community members</li>
              <li>Stay on topic regarding admissions and campus life</li>
              <li>Do not share personal contact information</li>
              <li>Questions are typically answered within 48 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsAndQuestionsComponent;
