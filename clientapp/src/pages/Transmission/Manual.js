import "../../components/ui/homeContent/HomeDesign.css";

import { Helmet } from "react-helmet-async";
import ManualCoursePageDesign from "../../components/ui/CoursePageDesign/ManualCoursePageDesign";
import ManualHourLesson from "../../components/ui/CoursePageDesign/othercoursePages/ManualHourLesson";
import TheorySupportContent from "../../components/ui/CoursePageDesign/othercoursePages/TheorySupportContent";
import PdiPartThreeTraining from "../../components/ui/CoursePageDesign/othercoursePages/PdiPartThreeTraining";

const Manual = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manual Driving Lesson Packages</title>
        <link rel="canonical" href="https://smartlearner.com/manual" />
        <meta property="og:title" content="Manual Driving Lesson Packages" />
        <meta
          property="og:description"
          content="Explore our manual driving lesson packages designed to suit all experience levels. Flexible pricing and expert instructors to help you pass with confidence."
        />
        <meta
          name="description"
          content="Explore our manual driving lesson packages designed to suit all experience levels. Flexible pricing and expert instructors to help you pass with confidence."
        />
      </Helmet>

      <ManualCoursePageDesign />
      
      {/* <ManualHourLesson /> */}
      {/* ///////////////////////////// */}
    </div>
  );
};

export default Manual;
