import axios from "axios";

export const fetchCollegeByID = async (college_name) => {
  try {
    const encodedCollegeName = encodeURIComponent(college_name);
    const response = await axios.get(
      `https://degreefydcmsbe.onrender.com/api/colleges/${encodedCollegeName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching college data:", error);
    return error.response ? error.response.data : { message: "Something went wrong" };
  }
};
