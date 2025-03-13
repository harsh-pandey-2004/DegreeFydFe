import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import HeroCollege from "../components/College/HeroCollege";
import UniversitySlider from "../components/College/UniversitySlider";
import ReviewColleges from "../components/College/ReviewCollege";
import CollegeSubBanner from "../components/College/CollegeSubBanner";
import CollegeFaq from "../components/College/FAQcollege";
import CollegeBlog from "../components/College/CollegeBlog";
import CollegeNewsLetter from "../components/College/CollegeNewsLetter";
import CommentsAndQuestionsComponent from "../components/College/CommentCollegeSection";
import SimilarColleges from "../components/College/SimilarColleges";
import { fetchCollegeByID } from "../network/college";

const CollegePage = () => {
  const { college_name } = useParams();
  const location = useLocation();
  const [collegeData, setCollegeData] = useState(null);

  // Extract query params
  const searchParams = new URLSearchParams(location.search);
  const istest = searchParams.get("istest") === "true"; // Convert to boolean

  useEffect(() => {
    const fetchCollege = async () => {
      if (!college_name) return;
      try {
        const collegeResponse = await fetchCollegeByID(college_name);
        setCollegeData(collegeResponse);
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };
    fetchCollege();
  }, [college_name]);

  return (
    <div>
      {console.log(collegeData)}
      {(collegeData?.[0]?.status === "approved" || istest) && (
        <>
          <HeroCollege collegeData={collegeData} />
          <UniversitySlider collegeData={collegeData} />
          <ReviewColleges collegeData={collegeData} />
          <CollegeSubBanner />
          <CommentsAndQuestionsComponent />
          <CollegeFaq collegeData={collegeData} />
          <CollegeBlog />
          <CollegeNewsLetter />
          <SimilarColleges />
        </>
      )}
    </div>
  );
};

export default CollegePage;
