import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import NotFound from "../pages/NotFound";
import CoursePage from "../pages/CoursePage";
import CollegePage from "../pages/CollegePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/college/:college_name" element={<CollegePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
