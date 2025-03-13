import React from 'react';
import { ExternalLink } from 'lucide-react';

const NotificationBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left side with Marquee (70%) */}
        <div className="w-[70%] overflow-hidden">
          <div className="marquee-container relative hover-pause">
            <div className="marquee-content flex whitespace-nowrap">
              <a href="/welcome" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                📢 Welcome to DegreeFyd - Your Gateway to Quality Education
              </a>
              <a href="/courses" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                🎓 Explore our wide range of courses and programs
              </a>
              <a href="/certification" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                💡 Get certified from top universities
              </a>
              <a href="/discounts" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                🌟 Special discounts for early birds
              </a>
              <a href="/welcome" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                📢 Welcome to DegreeFyd - Your Gateway to Quality Education
              </a>
              <a href="/courses" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                🎓 Explore our wide range of courses and programs
              </a>
              <a href="/certification" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                💡 Get certified from top universities
              </a>
              <a href="/discounts" className="text-sm text-gray-600 mx-4 hover:text-blue-600 transition-colors">
                🌟 Special discounts for early birds
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side with links (30%) */}
        <div className="w-[30%] flex items-center justify-end gap-4">
          <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors  items-center gap-1 hidden md:flex">
            What makes us different?
            <ExternalLink className="w-4 h-4" />
          </a>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <a href="https://youtube.com" className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-[#FF0000] transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-[#0077B5] transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Inline styles with hover pause functionality */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        
        /* Pause animation on hover */
        .hover-pause:hover .marquee-content {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default NotificationBar;