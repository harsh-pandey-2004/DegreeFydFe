import React from "react";

const CollegeBlog = () => {
  const blogPosts = [
    {
      category: "WRITING",
      title: "Eco-Education in Our Lives: We Can Change the Future",
      date: "January 1, 2023",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F1.png&w=1080&q=75",
    },
    {
      category: "EDUCATION",
      title: "Transforming a culture of professional development",
      date: "January 15, 2023",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F2.png&w=1080&q=75",
    },
    {
      category: "BUSINESS",
      title: "Increasing engagement with Instagram",
      date: "March 21, 2023",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F3.png&w=1080&q=75",
    },
    {
      category: "BUSINESS",
      title: "How to design a simple, yet unique and memorable brand identity",
      date: "April 14, 2023",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F4.png&w=1080&q=75",
    },
    {
      category: "TECH & NEWS",
      title: "5 marketing trends that you should be prepared for in 2022",
      date: "May 22, 2022",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F5.png&w=1080&q=75",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 ">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold  mb-2">Latest News</h1>
        <p className=" text-sm">
          We're on a mission to deliver engaging, curated courses at a
          reasonable price.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pr-72">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="text-purple text-xs font-semibold tracking-wider">
                  {post.category}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="mt-12 lg:mt-0 lg:w-64 lg:absolute lg:right-0 lg:top-0 space-y-8">
          {/* Categories */}
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                "College",
                "Gym",
                "High School",
                "Primary",
                "School",
                "University",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className=" hover:text-purple-800 text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {blogPosts.slice(0, 3).map((post, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="text-sm text-gray-700 group-hover:text-purple-600 block"
                  >
                    {post.title}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          {/* <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Course",
                "Learn",
                "Online",
                "Education",
                "LMS",
                "Training",
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="text-xs text-black hover:text-purple-800 bg-white px-3 py-1 rounded-xl shadow-xl"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div> */}
        </aside>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-1">
          {[1, 2, 3, "...", 8].map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm
                ${
                  page === 1
                    ? "bg-black text-white"
                    : "text-black hover:bg-purple-100"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeBlog;
