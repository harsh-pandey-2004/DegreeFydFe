import React, { useState } from "react";

const ReviewColleges = ({ collegeData }) => {
  // State to track which review is expanded in modal view
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  // State to track which reviews have "Show More" expanded for summary views
  const [showMoreStates, setShowMoreStates] = useState({});

  // Toggle show more/less for summary view
  const toggleShowMore = (reviewId, e) => {
    e.stopPropagation();
    setShowMoreStates((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  // Open the full modal view for a review
  const openReviewModal = (reviewId) => {
    setExpandedReviewId(reviewId);
  };

  // Close the modal view
  const closeModal = () => {
    setExpandedReviewId(null);
  };

  // Get initial letter for avatar
  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  // Find first review content to use as overall summary
  const getOverallContent = (reviewItems) => {
    return reviewItems[0]?.content || "";
  };

  // Render the summary view of a review
  const renderSummaryView = (review) => {
    const isShowMore = showMoreStates[review._id];
    const overallContent = getOverallContent(review.review);

    // Decide how much content to show based on Show More/Less state
    const paragraphs = overallContent.split(/\.\s+/);
    const displayContent = isShowMore
      ? overallContent
      : paragraphs.slice(0, 2).join(". ") +
        (paragraphs.length > 2 ? "..." : "");

    return (
      <div
        onClick={() => openReviewModal(review._id)}
        className="bg-white border rounded-lg p-4 mb-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow max-w-7xl mx-auto"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              {getInitial(review.name)}
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-indigo-900">
                {review.review[0]?.type || "Review"}
              </h2>
            </div>

            <div className="flex items-center text-gray-600 text-sm mb-2">
              <span className="mr-1">By {review.name}</span>
            </div>

            <div className="mb-4">
             
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: displayContent || "",
                }}
              ></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                className="text-indigo-600 flex items-center"
                onClick={(e) => toggleShowMore(review._id, e)}
              >
                <span>{isShowMore ? "Show Less" : "Show More"}</span>
                <svg
                  className={`w-4 h-4 ml-1 transform ${
                    isShowMore ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <button
                className="text-indigo-600 flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span>Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the full modal view of a review
  const renderModalView = (review) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {getInitial(review.name)}
                </div>
                <h2 className="text-2xl font-bold text-indigo-900">
                  Review by {review.name}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {review.review.map((item) => (
                <div key={item._id} className="border-b pb-4 last:border-b-0">
                  <div className="font-bold text-lg text-gray-800 mb-2">
                    {item.type}:
                  </div>
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.content ||
                        "",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 p-4 max-w-7xl mx-auto mt-14">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">
        College Reviews
      </h1>

      {/* List of review summaries */}
      {collegeData && collegeData[0]?.reviews ? (
        collegeData[0]?.reviews.map((review) => (
          <div key={review._id}>{renderSummaryView(review)}</div>
        ))
      ) : (
        <div className="text-gray-500">No reviews available</div>
      )}

      {/* Modal dialog for expanded view */}
      {expandedReviewId !== null &&
        renderModalView(
          collegeData[0]?.reviews.find((r) => r._id === expandedReviewId)
        )}
    </div>
  );
};

export default ReviewColleges;
