export const navStructure = {
  programs: {
    title: "Universities",
    items: [
      {
        name: "Online MBA",
        icon: "🎓",
        subItems: [
          "Executive MBA for Working Professionals",
          "MBA & Doctorate",
          "1 Year MBA Online",
          "Global MBA",
          "Dual MBA Online",
          "MBA after Diploma",
        ],
      },
      {
        name: "Specialisations",
        items: [
          {
            name: "Infrastructure Management",
            icon: "🏢",
            compareText: "Compare 1 Universities",
          },
          {
            name: "Digital Entrepreneurship",
            icon: "🌐",
            compareText: "Compare 1 Universities",
          },
          {
            name: "Business Intelligence & AI (Dual)",
            icon: "📊",
            compareText: "Compare 1 Universities",
          },
          {
            name: "Business Intelligence And Analytics (Dual)",
            icon: "📈",
            compareText: "Compare 1 Universities",
          },
          {
            name: "Marketing and Sales (Dual)",
            icon: "📣",
            compareText: "Compare 1 Universities",
          },
          {
            name: "Power Management",
            icon: "⚡",
            compareText: "Compare 1 Universities",
          },
        ],
      },
      { name: "Online MCA", subItems: [] },
      { name: "Engineering", subItems: ["B.Tech", "M.Tech", "Diploma"] },
      { name: "Certification Courses", subItems: [] },
    ],
  },
  universities: {
    title: "Courses",
    items: [
      {
        name: "Universities in India",
        subItems: ["IITs", "NITs", "IIMs", "Central Universities"],
      },
      {
        name: "Universities Abroad",
        subItems: ["USA", "UK", "Canada", "Australia"],
      },
      { name: "University Rankings", subItems: [] },
      { name: "Placement Partners", subItems: [] },
    ],
  },
  resources: {
    title: "Quick Links",
    items: [
      { name: "About Us", subItems: [] },
      { name: "Contact Us", subItems: [] },
      { name: "Careers", subItems: [] },
      { name: "Blogs", subItems: [] },
    ],
  },
  // resources1: {
  //   title: "More",
  //   items: [
  //     { name: "Loan Eligibily", subItems: [] },
  //     { name: "Write a Review", subItems: [] },
  //     { name: "Partner Login", subItems: [] },
  //     { name: "Carrer Counselling", subItems: [] },
  //     { name: "Contact Us", subItems: [] },
  //     { name: "Write a Review", subItems: [] },
  //     { name: "Blogs", subItems: [] },
  //   ],
  // },
};

export const menuData = {
  "Online MBA": [
    { icon: "🏢", title: "Infrastructure Management", universities: 1 },
    { icon: "📣", title: "Marketing and Sales (Dual)", universities: 1 },
    { icon: "🌐", title: "Digital Entrepreneurship", universities: 1 },
    { icon: "📊", title: "Business Intelligence & AI (Dual)", universities: 1 },
    {
      icon: "📈",
      title: "Business Intelligence And Analytics (Dual)",
      universities: 1,
    },
    { icon: "⚡", title: "Power Management", universities: 1 },
  ],
  "Executive MBA": [
    { icon: "💼", title: "Corporate Leadership", universities: 2 },
    { icon: "🌍", title: "Global Business Strategy", universities: 3 },
    { icon: "📊", title: "Strategic Management", universities: 2 },
  ],
  "Online MBA & Doctorate": [
    { icon: "🎓", title: "Research Methodology", universities: 1 },
    { icon: "📚", title: "Advanced Business Studies", universities: 2 },
    { icon: "🔬", title: "Business Innovation", universities: 1 },
  ],
  "1 Year MBA Online": [
    { icon: "⚡", title: "Fast Track Business", universities: 2 },
    { icon: "📈", title: "Accelerated Management", universities: 1 },
    { icon: "🎯", title: "Intensive Leadership", universities: 2 },
  ],
  "Online Global MBA": [
    { icon: "🌍", title: "International Business", universities: 3 },
    { icon: "🤝", title: "Cross-Cultural Management", universities: 2 },
    { icon: "📊", title: "Global Finance", universities: 2 },
  ],
  "Dual MBA Online": [
    { icon: "🎯", title: "Dual Specialization", universities: 2 },
    { icon: "📚", title: "Combined Studies", universities: 1 },
    { icon: "🔄", title: "Integrated Management", universities: 2 },
  ],
};

// navigationData.js
export const courseStructure = {
  categories: [
    {
      name: "Offline Courses",
      icon: "🏛️",
      items: [
        {
          title: "Campus MBA",
          description: "Full-time MBA program with in-person classes",
          duration: "2 years",
        },
        {
          title: "BBA On-Campus",
          description: "Bachelor's in Business Administration with practical training",
          duration: "3 years",
        },
        {
          title: "Engineering Diploma",
          description: "Hands-on technical training with lab work",
          duration: "3 years",
        },
        {
          title: "Executive Management",
          description: "Weekend classes for working professionals",
          duration: "18 months",
        },
        {
          title: "Professional Certification",
          description: "Industry-recognized certifications with lab sessions",
          duration: "6 months",
        },
        {
          title: "Weekend Workshops",
          description: "Intensive weekend training sessions for specific skills",
          duration: "8 weekends",
        },
        {
          title: "Summer Internship Program",
          description: "On-site internship with leading companies",
          duration: "3 months",
        },
        {
          title: "Corporate Training",
          description: "Customized training programs for organizations",
          duration: "Flexible",
        },
      ],
    },
    {
      name: "UG Courses",
      icon: "🎓",
      items: [
        {
          title: "B.Tech Computer Science",
          description: "Bachelor's in technology focusing on computing and programming",
          duration: "4 years",
        },
        {
          title: "BBA",
          description: "Business administration fundamentals for undergraduates",
          duration: "3 years",
        },
        {
          title: "B.Com",
          description: "Commerce and accounting for business careers",
          duration: "3 years",
        },
        {
          title: "BA Economics",
          description: "Liberal arts degree with focus on economic theory",
          duration: "3 years",
        },
        {
          title: "B.Sc Computer Science",
          description: "Scientific approach to computing and software development",
          duration: "3 years",
        },
        {
          title: "B.Des Product Design",
          description: "Creative design focused on product development and UX",
          duration: "4 years",
        },
        {
          title: "BFA Animation",
          description: "Fine arts degree specializing in digital animation",
          duration: "4 years",
        },
        {
          title: "B.Sc Data Science",
          description: "Undergraduate program in statistical analysis and data visualization",
          duration: "3 years",
        },
        {
          title: "BTech Electronics",
          description: "Engineering degree focused on electronic systems",
          duration: "4 years",
        },
      ],
    },
    {
      name: "PG Courses",
      icon: "📚",
      items: [
        {
          title: "M.Tech AI & ML",
          description: "Advanced study in artificial intelligence and machine learning",
          duration: "2 years",
        },
        {
          title: "MBA Finance",
          description: "Specialized management studies in financial analysis",
          duration: "2 years",
        },
        {
          title: "M.Sc Data Science",
          description: "Comprehensive program in statistical analysis and big data",
          duration: "2 years",
        },
        {
          title: "MA Digital Marketing",
          description: "Advanced marketing strategies for digital platforms",
          duration: "2 years",
        },
        {
          title: "MBA HR Management",
          description: "Advanced human resources and organizational development",
          duration: "2 years",
        },
        {
          title: "M.Des UX Design",
          description: "Masters in user experience and interface design",
          duration: "2 years",
        },
        {
          title: "M.Tech Cybersecurity",
          description: "Advanced degree in network security and ethical hacking",
          duration: "2 years",
        },
        {
          title: "MCA",
          description: "Masters in Computer Applications with advanced programming",
          duration: "2 years",
        },
        {
          title: "M.Sc Psychology",
          description: "Scientific study of human behavior and mental processes",
          duration: "2 years",
        },
        {
          title: "MBA Operations",
          description: "Advanced supply chain and operations management",
          duration: "2 years",
        },
        {
          title: "MA Economics",
          description: "Advanced economic theory and econometrics",
          duration: "2 years",
        },
      ],
    },
    {
      name: "Online Courses",
      icon: "💻",
      items: [
        {
          title: "Online MBA",
          description: "Flexible MBA program with virtual classes",
          duration: "2-3 years",
        },
        {
          title: "Digital Marketing Certificate",
          description: "Industry-focused marketing in digital environments",
          duration: "6 months",
        },
        {
          title: "Data Science Bootcamp",
          description: "Intensive training in data analysis and visualization",
          duration: "16 weeks",
        },
        {
          title: "Frontend Development",
          description: "Modern web development with React and JavaScript",
          duration: "12 weeks",
        },
        {
          title: "UI/UX Design",
          description: "User interface and experience design fundamentals",
          duration: "8 weeks",
        },
        {
          title: "Python Programming",
          description: "Learn Python programming from basics to advanced concepts",
          duration: "10 weeks",
        },
        {
          title: "Cloud Computing",
          description: "AWS, Azure, and Google Cloud Platform essentials",
          duration: "14 weeks",
        },
        {
          title: "Blockchain Fundamentals",
          description: "Understanding cryptocurrency and distributed ledger technology",
          duration: "8 weeks",
        },
        {
          title: "Project Management",
          description: "Agile, Scrum, and traditional project management methodologies",
          duration: "12 weeks",
        },
      ],
    },
    {
      name: "Certification Programs",
      icon: "🏆",
      items: [
        {
          title: "AWS Solutions Architect",
          description: "Comprehensive AWS architecture and implementation",
          duration: "3 months",
        },
        {
          title: "Google Analytics",
          description: "Advanced web analytics and data tracking",
          duration: "6 weeks",
        },
        {
          title: "Cisco Networking",
          description: "CCNA certification preparation course",
          duration: "4 months",
        },
        {
          title: "Microsoft Azure",
          description: "Azure cloud services implementation and management",
          duration: "10 weeks",
        },
        {
          title: "CompTIA Security+",
          description: "IT security fundamentals and best practices",
          duration: "8 weeks",
        },
        {
          title: "Agile Scrum Master",
          description: "Professional Scrum Master certification course",
          duration: "4 weeks",
        },
      ],
    },
    {
      name: "Short Courses",
      icon: "⏱️",
      items: [
        {
          title: "Introduction to AI",
          description: "Basic concepts and applications of artificial intelligence",
          duration: "4 weeks",
        },
        {
          title: "Social Media Marketing",
          description: "Strategies for effective social media campaigns",
          duration: "6 weeks",
        },
        {
          title: "Financial Planning",
          description: "Personal and professional financial management",
          duration: "5 weeks",
        },
        {
          title: "Public Speaking",
          description: "Confidence building and presentation skills",
          duration: "3 weeks",
        },
        {
          title: "SEO Fundamentals",
          description: "Search engine optimization techniques and best practices",
          duration: "4 weeks",
        },
        {
          title: "Content Writing",
          description: "Effective communication for digital platforms",
          duration: "6 weeks",
        },
        {
          title: "Business Analytics",
          description: "Introduction to data-driven business decisions",
          duration: "8 weeks",
        },
        {
          title: "Graphic Design Basics",
          description: "Visual design principles and tools",
          duration: "6 weeks",
        },
      ],
    },
    {
      name: "Language Courses",
      icon: "🗣️",
      items: [
        {
          title: "Business English",
          description: "Professional English communication for the workplace",
          duration: "12 weeks",
        },
        {
          title: "Spanish for Beginners",
          description: "Introduction to Spanish language and culture",
          duration: "16 weeks",
        },
        {
          title: "German A1-A2",
          description: "Elementary German language proficiency",
          duration: "20 weeks",
        },
        {
          title: "French for Travel",
          description: "Essential French phrases and cultural insights",
          duration: "8 weeks",
        },
        {
          title: "Japanese Basics",
          description: "Introduction to Japanese language and writing system",
          duration: "16 weeks",
        },
        {
          title: "Mandarin Chinese",
          description: "Fundamental Mandarin speaking and comprehension",
          duration: "24 weeks",
        },
      ],
    },
  ],
};

// Additional detailed menu data structure
export const detailedCourseData = {
  "Offline Courses": [
    { icon: "🏛️", title: "Campus MBA", universities: 8 },
    { icon: "🏢", title: "BBA On-Campus", universities: 12 },
    { icon: "🔧", title: "Engineering Diploma", universities: 15 },
    { icon: "👔", title: "Executive Management", universities: 6 },
  ],
  "UG Courses": [
    { icon: "💻", title: "B.Tech Computer Science", universities: 20 },
    { icon: "📊", title: "BBA", universities: 25 },
    { icon: "💰", title: "B.Com", universities: 30 },
    { icon: "📈", title: "BA Economics", universities: 18 },
    { icon: "🧪", title: "B.Sc Physics", universities: 15 },
    { icon: "🔬", title: "B.Sc Chemistry", universities: 14 },
  ],
  "PG Courses": [
    { icon: "🤖", title: "M.Tech AI & ML", universities: 10 },
    { icon: "💹", title: "MBA Finance", universities: 22 },
    { icon: "📊", title: "M.Sc Data Science", universities: 12 },
    { icon: "📱", title: "MA Digital Marketing", universities: 8 },
    { icon: "🏗️", title: "M.Tech Civil Engineering", universities: 14 },
  ],
  "Online Courses": [
    { icon: "🌐", title: "Online MBA", universities: 15 },
    { icon: "📱", title: "Digital Marketing Certificate", universities: 8 },
    { icon: "📊", title: "Data Science Bootcamp", universities: 12 },
    { icon: "💻", title: "Frontend Development", universities: 10 },
    { icon: "⚙️", title: "Backend Development", universities: 7 },
    { icon: "🔐", title: "Cybersecurity Fundamentals", universities: 5 },
  ],
};
export const universityMenuData = {
  "Universities by Location": [
    { icon: "🏙️", title: "Delhi/NCR", universities: 25 },
    { icon: "🌆", title: "Mumbai", universities: 20 },
    { icon: "🏢", title: "Bangalore", universities: 18 },
    { icon: "🌃", title: "Chennai", universities: 15 },
    { icon: "🏛️", title: "Hyderabad", universities: 12 },
    { icon: "🌉", title: "Pune", universities: 10 },
  ],
  "Universities by Ranking": [
    { icon: "🥇", title: "Top 10 Universities", universities: 10 },
    { icon: "🥈", title: "Top 50 Universities", universities: 50 },
    { icon: "🥉", title: "Top 100 Universities", universities: 100 },
    { icon: "🏆", title: "NIRF Ranking", universities: 200 },
    { icon: "🌟", title: "QS World Ranking", universities: 30 },
  ],
  "Universities by Fees": [
    { icon: "💰", title: "Below 50K per year", universities: 45 },
    { icon: "💵", title: "50K - 1 Lakh per year", universities: 60 },
    { icon: "💸", title: "1 Lakh - 2 Lakh per year", universities: 40 },
    { icon: "💳", title: "Above 2 Lakh per year", universities: 25 },
  ],
  "Universities by Type": [
    { icon: "🏫", title: "Government Universities", universities: 75 },
    { icon: "🏤", title: "Private Universities", universities: 120 },
    { icon: "🌐", title: "Deemed Universities", universities: 35 },
    { icon: "🎓", title: "Autonomous Institutions", universities: 40 },
  ],
  "Universities by Stream": [
    { icon: "💻", title: "Engineering & Technology", universities: 85 },
    { icon: "⚕️", title: "Medical & Healthcare", universities: 60 },
    { icon: "📊", title: "Management & Business", universities: 70 },
    { icon: "⚖️", title: "Law", universities: 40 },
    { icon: "🎨", title: "Arts & Humanities", universities: 65 },
    { icon: "🔬", title: "Science", universities: 55 },
  ],
  "Foreign Universities": [
    { icon: "🇺🇸", title: "USA", universities: 50 },
    { icon: "🇬🇧", title: "UK", universities: 35 },
    { icon: "🇦🇺", title: "Australia", universities: 25 },
    { icon: "🇨🇦", title: "Canada", universities: 30 },
    { icon: "🇩🇪", title: "Germany", universities: 20 },
    { icon: "🇸🇬", title: "Singapore", universities: 10 },
  ],
};