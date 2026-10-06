import { createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layouts/Layout";
// import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQS from "./pages/FAQS";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import DrivingInstructorTraining from "./pages/Join-our-team/DrivingInstructorTraining";
import DrivingInstructorFranchise from "./pages/Join-our-team/DrivingInstructorFranchise";
import StantardCheckTest from "./pages/Join-our-team/StantardCheckTest";
import DrivingLessons from "./pages/DrivingLessons/DrivingLessons";
import SchoolOfMomDad from "./pages/DrivingLessons/SchoolOfMomDad";
import IntensiveCourses from "./pages/IntensiveCourses";
import TheorySupport from "./pages/TheorySupport";
import ADITrainingPortal from "./pages/ADITrainingPortal";
import SimulatedDrivingLesson from "./pages/SpecialityTraining/SimulatedDrivingLesson";
import ExtendedTest from "./pages/SpecialityTraining/ExtendedTest";
// import PassPlus from "./pages/SpecialityTraining/PassPlus";
import AgeingDriverSupport from "./pages/SpecialityTraining/AgeingDriverSupport";
import SafeRoadUserAward from "./pages/SpecialityTraining/SafeRoadUserAward";
import TrailerTraining from "./pages/SpecialityTraining/TrailerTraining";
import TaxiTraining from "./pages/SpecialityTraining/TaxiTraining";
import CorporateResponsbilities from "./pages/CorporateResponsbilites/CorporateResponsbilities";
import ElectricCarScheme from "./pages/CorporateResponsbilites/ElectricCarScheme";
import GoingGreenProject from "./pages/CorporateResponsbilites/GoingGreenProject";
import WeProudlySupport from "./pages/CorporateResponsbilites/WeProudlySupport";
import CommunitiesChampions from "./pages/CorporateResponsbilites/CommunitiesChampions";
import GoCv from "./pages/CorporateResponsbilites/GoCv";
import OurOfficeGreenEfforts from "./pages/CorporateResponsbilites/OurOfficeGreenEfforts";
import TheHonestTruth from "./pages/CorporateResponsbilites/TheHonestTruth";
import TheorySubscription from "./pages/Theory-Subscription/TheorySubscription";
import TheoryPortal from "./pages/Theory-Subscription/TheoryPortal";
import Worksheet from "./pages/AddOns/Worksheet";
import PersonalisedQuiz from "./pages/AddOns/PersonalisedQuiz";
import PracticeMCQS from "./pages/CheckList/PracticeMCQS";
import AIVideos from "./pages/AddOns/AIVideos";
import Contact from "./pages/Contact";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/cart/Cart";
import HazardPerception from "./pages/Theory-Subscription/Hazard/HazardPerception";
import Thanks from "./pages/Thanks";

import { ROLES } from "./constants/index";
import RequireAuth from "./utils/RequireAuth";

import MockTest from "./pages/Theory-Subscription/mockTest/MockTest";
import MyAccount from "./pages/auth/myAccount/MyAccount";
import AdminLayout from "./components/layouts/AdminLayout";
import Roles from "./containers/roles/Roles";
import Users from "./containers/users/Users";
import Categories from "./containers/categories/Categories";
import Postcode from "./containers/postcode/Postcode";
import ProductModal from "./containers/productAdmin/ProductModal";
import AdminHome from "./components/admin/AdminHome";
import Area from "./containers/productArea/Area";
import QuizCategory from "./containers/quiz/quizCategory/QuizCategory";

import QuizModal from "./containers/quiz/quiz/QuizModal";
import Quiz from "./components/takequizes/Quiz";
import QuizResult from "./components/takequizes/QuizResult";
import QuizModule from "./containers/quiz/quizModule/QuizModule";
import QuizUModule from "./containers/quiz/quizUModule/QuizUModule";
import QuizCategoryHome from "./components/takequizes/QuizCategoryHome";
import QuizModuleHome from "./components/takequizes/QuizModuleHome";
import Checkout from "./pages/shop/checkout/Checkout";
import OrderInvoice from "./containers/orders/component/OrderInvoice";
import Order from "./containers/orders/Order";
import Products from "./pages/Product";
import MyCart from "./pages/auth/MyCart";
import AdiPartOne from "./pages/adiPages/AdiPartOne";
import RoadProcedureBand from "./pages/adiPages/bands/RoadProcedureBand";
import TrafficSignalBand from "./pages/adiPages/bands/TrafficSignalBand";
import DDTLawBand from "./pages/adiPages/bands/DDTLawBand";
import PublicationTechBand from "./pages/adiPages/bands/PublicationTechBand";
import MockTestBand from "./pages/adiPages/bands/MockTestBand";
import AdiPartTwo from "./pages/adiPages/adi-part2/AdiPartTwo";
import AdiPartThree from "./pages/adiPages/adi-part3/AdiPartThree";
import GdeMatrix from "./pages/adiPages/adi-part3/internalPages/GdeMatrix";
import StandardCheckSheet from "./pages/adiPages/adi-part3/internalPages/StandardCheckSheet";
import LearningStyles from "./pages/adiPages/adi-part3/internalPages/LearningStyles";
import SmartTargets from "./pages/adiPages/adi-part3/internalPages/SmartTargets";
import LessonPlanning from "./pages/adiPages/adi-part3/internalPages/LessonPlanning";
import RiskManagement from "./pages/adiPages/adi-part3/internalPages/RiskManagement";
import QuestioningTech from "./pages/adiPages/adi-part3/internalPages/QuestioningTech";
import InstructionFeedBack from "./pages/adiPages/adi-part3/internalPages/InstructionFeedBack";
import LessonLayouts from "./pages/adiPages/adi-part3/internalPages/LessonLayouts";
import TrainingVideos from "./pages/adiPages/adi-part3/internalPages/TrainingVideos";
import StartingOnRoad from "./pages/adiPages/adi-part3/internalPages/StartingOnRoad";
import Alertness from "./pages/Theory-Subscription/practice-multiple-ways/Alertness";
import Attitude from "./pages/Theory-Subscription/practice-multiple-ways/Attitude";
import SafetyVehicle from "./pages/Theory-Subscription/practice-multiple-ways/SafetyVehicle";
import SafetyMargins from "./pages/Theory-Subscription/practice-multiple-ways/SafetyMargins";
import HazzardAwareness from "./pages/Theory-Subscription/practice-multiple-ways/HazzardAwareness";
import VulnerableRoadUser from "./pages/Theory-Subscription/practice-multiple-ways/VulnerableRoadUser";
import OtherVehicle from "./pages/Theory-Subscription/practice-multiple-ways/OtherVehicle";
import VehicleHandling from "./pages/Theory-Subscription/practice-multiple-ways/VehicleHandling";
import MotorwayRules from "./pages/Theory-Subscription/practice-multiple-ways/MotorwayRules";
import RulesOfRoad from "./pages/Theory-Subscription/practice-multiple-ways/RulesOfRoad";
import RoadTraffic from "./pages/Theory-Subscription/practice-multiple-ways/RoadTraffic";
import EssentialDocuments from "./pages/Theory-Subscription/practice-multiple-ways/EssentialDocuments";
import IncidentsAccidents from "./pages/Theory-Subscription/practice-multiple-ways/IncidentsAccidents";
import VehicleLoading from "./pages/Theory-Subscription/practice-multiple-ways/VehicleLoading";
import PaymentProcessing from "./pages/shop/checkout/PaymentProcessing";
import PaymentSuccess from "./pages/PaymentSuccess";
import MyOrders from "./pages/shop/myOrders/MyOrders";
import ProductSpecialModal from "./containers/productSpecial/ProductSpecialModal";
import Email from "./components/Emails/Email";
import ForgotPassword from "./pages/auth/ForgotPassword";
import HazardPreceptions from "./pages/adiPages/adi-part3/internalPages/HazardPreceptions";
import VideoClips from "./pages/Theory-Subscription/practice-multiple-ways/VideoClips";
import PartOneSubscription from "./pages/adiPages/adi-Subscription/Part-One-Subscription";
import PartTwoSubscription from "./pages/adiPages/adi-Subscription/Part-TwoSubscription";
import PartThreeSubscription from "./pages/adiPages/adi-Subscription/Part-ThreeSubscription";
import BonusQuiz from "./pages/adiPages/bands/BonusQuiz";
import Blogs from "./pages/blogpage/Blogs";
import SingleBlogPage from "./pages/blogpage/SingleBlogPage";
import AdminBlogs from "./containers/blog/Blog";
import TermsAndConditions from "./pages/Term&Condition";
import TrainningMaterial from "./pages/adiPages/additionalPages/TrainningMaterial";
import PartOneTrainnigMaterial from "./pages/adiPages/additionalPages/PartOneTrainnigMaterial";
import PartOneTest from "./pages/adiPages/additionalPages/PartOneTest";
import TestDayTips from "./pages/adiPages/additionalPages/TestDayTips";
import GoodLuckPage from "./pages/adiPages/additionalPages/Goodlucksign";
import HazzardClips from "./pages/adiPages/additionalPages/HazzardClips";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import PaymentCompleted from "./pages/PaymentCompleted";
import News from "./pages/blogpage/News";
import PrivledgeCards from "./pages/AddOns/PrivledgeCards";
import Glossary from "./pages/adiPages/additionalPages/Glossary";
import Manual from "./pages/Transmission/Manual";
import AutomaticTransmission from "./pages/Transmission/AutomaticTransmission";
import PassPlusTransmission from "./pages/Transmission/PassPlusTransmission";
import IntensiveTransmission from "./pages/Transmission/IntensiveTransmission";
import DrivingTransmission from "./pages/Transmission/DrivingTransmission";
import CbdEvents from "./pages/AddOns/CbdEvents";
import BusinessCoaching from "./pages/AddOns/BusinessCoaching";
import PdiLogin from "./pages/auth/PdiLogin";
import TheoryLogin from "./pages/auth/TheoryLogin";
import CompleteSubscription from "./pages/adiPages/adi-Subscription/CompleteSubscription";
import Band1 from "./pages/adiPages/additionalPages/Band1";
import Band2 from "./pages/adiPages/additionalPages/Band2";
import Band3 from "./pages/adiPages/additionalPages/Band3";
import Band4 from "./pages/adiPages/additionalPages/Band4";
import AllResult from "./components/takequizes/AllResult";
import AdiModuleOne from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleOne";
import AdiModuleTwo from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleTwo";
import AdiModuleThree from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleThree";
import AdiModuleFour from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleFour";
import AdiModuleFive from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleFive";
import AdiModuleSix from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleSix";
import AdiModuleSeven from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleSeven";
import AdiModuleEight from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleEight";
import AdiModuleNine from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleNine";
import AdiModuleTen from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModuleTen";
import AdiModule11 from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModule11";
import AdiModule12 from "./pages/adiPages/adi-part2/additionalPagess/modules/AdiModule12";
import Adi3Module from "./pages/adiPages/adi-part3/additionalPages/Adi3Module";
import Adi3Moduletwo from "./pages/adiPages/adi-part3/additionalPages/Adi3Moduletwo";
import Adi3Modulethree from "./pages/adiPages/adi-part3/additionalPages/Adi3Modulethree";
import Adi3ModuleFour from "./pages/adiPages/adi-part3/additionalPages/Adi3ModuleFour";
import Adi3Modulefive from "./pages/adiPages/adi-part3/additionalPages/Adi3Modulefive";
import Adi3ModuleSix from "./pages/adiPages/adi-part3/additionalPages/Adi3ModuleSix";
import Adi3ModuleSeven from "./pages/adiPages/adi-part3/additionalPages/Adi3ModuleSeven";
import Adi3ModuleEight from "./pages/adiPages/adi-part3/additionalPages/Adi3ModuleEight";
import Adi3ModuleNine from "./pages/adiPages/adi-part3/additionalPages/Adi3ModuleNine";
import Adi3ModuleTen from "./pages/adiPages/adi-part3/additionalPages/Adi3ModuleTen";
import Adi3Module11 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module11";
import Adi3Module12 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module12";
import Adi3Module13 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module13";
import Adi3Module14 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module14";
import Adi3Module15 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module15";
import Adi3Module16 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module16";
import Adi3Module17 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module17";
import Adi3Module18 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module18";
import Adi3Videos from "./pages/adiPages/adi-part3/additionalPages/Adi3Videos";
import UserReport from "./containers/userReports/UserReport";
import UserInvoice from "./containers/userReports/user-invoice/UserInvoice";
import SimulatorTraining from "./pages/SimulatorTraining";
import Adi3Module19 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module19";
import Adi3Module20 from "./pages/adiPages/adi-part3/additionalPages/AdiModule20";
import Adi3Module21 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module21";
import Adi3Module22 from "./pages/adiPages/adi-part3/additionalPages/Adi3Module22";
import LearnerPortal from "./pages/learnerPortal/LearnerPortal";
import AdminLiveChat from "./containers/liveChat/AdminLiveChat";
import Bedworth from "./pages/locationPages/Bedworth";
import Coventry from "./pages/locationPages/Coventry";
import Leamington from "./pages/locationPages/Leamington";
import Nuneaton from "./pages/locationPages/Nuneaton";
import Rugby from "./pages/locationPages/Rugby";
import Solihull from "./pages/locationPages/Solihull";
import Warwick from "./pages/locationPages/Warwick";
import PaymentModel from "./containers/Payments/SellSubscription";
import SellSubscription from "./containers/Payments/SellSubscription";
import SellProducts from "./containers/Payments/SellProducts";
import AdminCheckOut from "./containers/Payments/AdminCheckOut";
import AdminPaymentProcessing from "./containers/Payments/AdminPaymentProcessing";
import WorkshopTransmission from "./pages/Transmission/WorkshopTransmission";
import BusinessMentoringPage from "./pages/AddOns/BusinessMentoring";
import BusinessSubs from "./pages/adiPages/adi-Subscription/BusinessSubs";
import KlarnaReturn from "./pages/shop/checkout/KlarnaReturn";
import SpecialProductQrCodePage from "./pages/AddOns/SpecialProductQrCodePage";
import AdminContentHome from "./components/admin/AdminContentPages/AdminContentHome";
import AdminManualCoursePage from "./components/admin/AdminContentPages/CoursesPages/AdminManualCoursePage";
import ManualCoursePageDesign from "./components/ui/CoursePageDesign/ManualCoursePageDesign";
import ManualTesterLesson from "./components/ui/CoursePageDesign/othercoursePages/ManualTesterLesson";
import ManualHourLesson from "./components/ui/CoursePageDesign/othercoursePages/ManualHourLesson";
import AutomaticTesterLesson from "./components/ui/CoursePageDesign/othercoursePages/AutomaticTesterLesson";
import AutomaticStarter from "./components/ui/CoursePageDesign/othercoursePages/AutomaticStarter";
import AutomaticHourLesson from "./components/ui/CoursePageDesign/othercoursePages/AutomaticHourLesson";
import IntensiveWeek from "./components/ui/CoursePageDesign/othercoursePages/IntensiveWeek";
import TheorySupportContent from "./components/ui/CoursePageDesign/othercoursePages/TheorySupportContent";
import SimulatorContentPage from "./components/ui/CoursePageDesign/othercoursePages/SimulatorContentPage";
import LearnerTheoryLifetime from "./components/ui/CoursePageDesign/othercoursePages/LearnerTheoryLifetime";
import PassPlusContentChange from "./components/ui/CoursePageDesign/othercoursePages/PassPlusContentChange";
import PdiPartOneTraining from "./components/ui/CoursePageDesign/othercoursePages/PdiPartOneTraining";
import PdiPartTwoTraining from "./components/ui/CoursePageDesign/othercoursePages/PdiPartTwoTraining";
import PdiPartThreeTraining from "./components/ui/CoursePageDesign/othercoursePages/PdiPartThreeTraining";
import PdiBusinessMentoring from "./components/ui/CoursePageDesign/othercoursePages/PdiBusinessMentoring";
import OfferAutomaticContent from "./components/ui/CoursePageDesign/othercoursePages/OfferAutomaticContent";
import OfferManualContent from "./components/ui/CoursePageDesign/othercoursePages/OfferManualContent";
import WorkShopContentPage from "./components/ui/CoursePageDesign/othercoursePages/WorkShopContentPage";
import CoursesPage from "./components/ui/CoursePageDesign/CoursesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home/:section?",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "faqs", element: <FAQS /> },
      {
        path: "Driving-Instructor-Training",
        element: <DrivingInstructorTraining />,
      },
      {
        path: "Driving-Instructor-Franchise",
        element: <DrivingInstructorFranchise />,
      },
      { path: "Stantard-Check-Test", element: <StantardCheckTest /> },
      { path: "Driving-Lessons/:section?", element: <DrivingLessons /> },
      { path: "School-Of-Mom-and-Dad", element: <SchoolOfMomDad /> },
      { path: "Intensive-Driving-Courses", element: <IntensiveCourses /> },
      { path: "Products", element: <Products /> },
      { path: "Theory-Support/:section?", element: <TheorySupport /> },
      { path: "ADI-Training-Portal", element: <ADITrainingPortal /> },
      { path: "Simulated-Driving-Lesson", element: <SimulatedDrivingLesson /> },
      { path: "Extended-Test", element: <ExtendedTest /> },
      // { path: "Pass-Plus", element: <PassPlus /> },
      { path: "Ageing-Driver-Support", element: <AgeingDriverSupport /> },
      { path: "Safe-Road-User-Award", element: <SafeRoadUserAward /> },
      { path: "Trailer-Training", element: <TrailerTraining /> },
      { path: "Taxi-Training", element: <TaxiTraining /> },
      {
        path: "Corporate-Responsbilities",
        element: <CorporateResponsbilities />,
      },
      { path: "Electric-Car-Scheme", element: <ElectricCarScheme /> },
      { path: "Going-Green-Project", element: <GoingGreenProject /> },
      { path: "Communities-Champions", element: <CommunitiesChampions /> },
      { path: "We-Proudly-Support", element: <WeProudlySupport /> },
      { path: "Go-Cv", element: <GoCv /> },
      { path: "Our-Office-Green-Efforts", element: <OurOfficeGreenEfforts /> },
      { path: "The-Honest-Truth", element: <TheHonestTruth /> },
      { path: "Theory-Subscription", element: <TheorySubscription /> },
      { path: "Theory-Portal", element: <TheoryPortal /> },
      { path: "WorkSheets", element: <Worksheet /> },
      { path: "Personalised-Quiz", element: <PersonalisedQuiz /> },
      { path: "AIVideos", element: <AIVideos /> },
      { path: "PracticeMCQS", element: <PracticeMCQS /> },
      { path: "Contact-Us", element: <Contact /> },
      { path: "intensive", element: <IntensiveTransmission /> },
      { path: "shop", element: <Shop /> },

      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "my-orders", element: <MyOrders /> },
      { path: "hazard-perception", element: <HazardPerception /> },
      { path: "mcq-Part1", element: <MockTest /> },
      { path: "my-account", element: <MyAccount /> },
      { path: "checkout", element: <Checkout /> },
      { path: "part-one-theory-questions", element: <AdiPartOne /> },
      { path: "band-one-Road-Procedure", element: <Band1 /> },
      { path: "band-two-traffic-signs-and-signals", element: <Band2 /> },
      {
        path: "band-three-driving-tests-disabilities-and-the-law",
        element: <Band3 />,
      },
      { path: "band-four-publications-techniques", element: <Band4 /> },
      { path: "band-1-Road-Procedure", element: <RoadProcedureBand /> },
      {
        path: "band-2-traffic-signs-and-signals",
        element: <TrafficSignalBand />,
      },
      {
        path: "band-3-driving-tests-disabilities-and-the-law",
        element: <DDTLawBand />,
      },
      {
        path: "band-4-publications-techniques",
        element: <PublicationTechBand />,
      },
      { path: "Adi-part-1-MockTest", element: <MockTestBand /> },
      { path: "Adi-part-1-Bonus-Quiz", element: <BonusQuiz /> },
      { path: "part-two-theory-questions", element: <AdiPartTwo /> },
      { path: "part-three-theory-questions", element: <AdiPartThree /> },
      { path: "gde-matrix", element: <GdeMatrix /> },
      { path: "standards-check-sheet", element: <StandardCheckSheet /> },
      { path: "learning-styles", element: <LearningStyles /> },
      { path: "smart-targets", element: <SmartTargets /> },
      { path: "lesson-plannings", element: <LessonPlanning /> },
      { path: "risk-management", element: <RiskManagement /> },
      { path: "question-techniques", element: <QuestioningTech /> },
      { path: "instruction-and-feedback", element: <InstructionFeedBack /> },
      { path: "lesson-plan-layouts", element: <LessonLayouts /> },
      { path: "training-videos", element: <TrainingVideos /> },
      { path: "starting-on-road", element: <StartingOnRoad /> },
      { path: "alertness", element: <Alertness /> },
      { path: "attitude", element: <Attitude /> },
      { path: "safety-your-vehicle", element: <SafetyVehicle /> },
      { path: "safety-margins", element: <SafetyMargins /> },
      { path: "hazard-awareness", element: <HazzardAwareness /> },
      { path: "vulnerable-road-users", element: <VulnerableRoadUser /> },
      { path: "other-vehicles", element: <OtherVehicle /> },
      { path: "vehicle-handling", element: <VehicleHandling /> },
      { path: "motorway-rules", element: <MotorwayRules /> },
      { path: "rules-of-road", element: <RulesOfRoad /> },
      { path: "road-and-traffic-signs", element: <RoadTraffic /> },
      { path: "essential-Documents", element: <EssentialDocuments /> },
      { path: "incidents-&-accidents", element: <IncidentsAccidents /> },
      { path: "vehicle-loading", element: <VehicleLoading /> },
      { path: "video-clips", element: <VideoClips /> },
      { path: "checkout", element: <Checkout /> },
      { path: "paymentProcessing", element: <PaymentProcessing /> },
      { path: "email", element: <Email /> },
      { path: "hazard-preception-part-2", element: <HazardPreceptions /> },
      { path: "business-mentoring", element: <BusinessMentoringPage /> },
      { path: "klarna-return", element: <KlarnaReturn /> },
      {
        path: "driving-instructor-training-part-one",
        element: <PartOneSubscription />,
      },
      {
        path: "driving-instructor-training-part-two",
        element: <PartTwoSubscription />,
      },
      {
        path: "Special-Product-Page",
        element: <SpecialProductQrCodePage />,
      },
      {
        path: "driving-instructor-training-part-three",
        element: <PartThreeSubscription />,
      },
      {
        path: "businessSubs-cart",
        element: <BusinessSubs />,
      },
      {
        path: "driving-instructor-training-full-course",
        element: <CompleteSubscription />,
      },
      { path: "blogs", element: <Blogs /> },
      { path: "privilege-cards", element: <PrivledgeCards /> },
      { path: "glossary-terms", element: <Glossary /> },
      { path: "singleblog/:id", element: <SingleBlogPage /> },
      { path: "term-and-condition", element: <TermsAndConditions /> },
      { path: "manual", element: <Manual /> },
      { path: "automatic-transmisson", element: <AutomaticTransmission /> },
      { path: "pass-plus", element: <PassPlusTransmission /> },
      { path: "workshop", element: <WorkshopTransmission /> },

      // /////////////////////////////////////////////////

      { path: "manual-taster-course", element: <ManualTesterLesson /> },
      { path: "manual-beginner-course", element: <ManualCoursePageDesign /> },
      { path: "manual-hourly-lesson-course", element: <ManualHourLesson /> },

      { path: "automatic-taster-course", element: <AutomaticTesterLesson /> },
      { path: "automatic-beginner-course", element: <AutomaticStarter /> },
      { path: "automatic-hourly-lesson-course", element: <AutomaticHourLesson /> },

      { path: "intensive-course", element: <IntensiveWeek /> },

      { path: "theory-support-course", element: <TheorySupportContent /> },
      { path: "simulator-session-course", element: <SimulatorContentPage /> },
      { path: "lifetime-theory-portal", element: <LearnerTheoryLifetime /> },

      { path: "pass-plus-course", element: <PassPlusContentChange /> },

      { path: "instructor-training-part-one-course", element: <PdiPartOneTraining /> },
      { path: "instructor-training-part-two-course", element: <PdiPartTwoTraining /> },
      {
        path: "instructor-training-part-three-course",
        element: <PdiPartThreeTraining />,
      },

      { path: "business-mentoring-course", element: <PdiBusinessMentoring /> },
      { path: "workshop-course", element: <WorkShopContentPage /> },

      { path: "offer-automatic-course", element: <OfferAutomaticContent /> },
      { path: "offer-manual-course", element: <OfferManualContent /> },
      { path: "courses", element: <CoursesPage /> },

      // ////////////////////////////////////////
      {
        path: "quizModuleOne",
        element: <AdiModuleOne />,
      },
      {
        path: "quizModuletwo",
        element: <AdiModuleTwo />,
      },
      {
        path: "quizModulethree",
        element: <AdiModuleThree />,
      },
      {
        path: "quizModulefour",
        element: <AdiModuleFour />,
      },
      {
        path: "quizModulefive",
        element: <AdiModuleFive />,
      },
      {
        path: "quizModulesix",
        element: <AdiModuleSix />,
      },
      {
        path: "quizModuleseven",
        element: <AdiModuleSeven />,
      },
      {
        path: "quizModule-eight",
        element: <AdiModuleEight />,
      },
      {
        path: "quizModulenine",
        element: <AdiModuleNine />,
      },
      {
        path: "quizModule-Ten",
        element: <AdiModuleTen />,
      },
      {
        path: "quizModuleEleven",
        element: <AdiModule11 />,
      },
      {
        path: "quizModuleTwelve",
        element: <AdiModule12 />,
      },
      // ////////////////////////////////////////////
      {
        path: "national-standards",
        element: <Adi3Module />,
      },
      {
        path: "good-instructor-module",
        element: <Adi3Moduletwo />,
      },
      {
        path: "legal-stuff",
        element: <Adi3Modulethree />,
      },
      {
        path: "learning-style",
        element: <Adi3ModuleFour />,
      },
      {
        path: "lesson-structure",
        element: <Adi3Modulefive />,
      },
      {
        path: "gde-matrix-grow",
        element: <Adi3ModuleSix />,
      },
      {
        path: "lesson-planning",
        element: <Adi3ModuleSeven />,
      },
      {
        path: "route-planning",
        element: <Adi3ModuleEight />,
      },
      {
        path: "route-direction",
        element: <Adi3ModuleNine />,
      },
      {
        path: "client-centred-learning",
        element: <Adi3ModuleTen />,
      },
      {
        path: "body-language",
        element: <Adi3Module11 />,
      },
      {
        path: "giving-instruction-and-feedback",
        element: <Adi3Module12 />,
      },
      {
        path: "adapting-lessons",
        element: <Adi3Module13 />,
      },
      {
        path: "risk-management-and-responsibility",
        element: <Adi3Module14 />,
      },
      {
        path: "intervention",
        element: <Adi3Module15 />,
      },
      {
        path: "trainee-badge",
        element: <Adi3Module16 />,
      },
      {
        path: "questioning-techniques",
        element: <Adi3Module17 />,
      },
      {
        path: "book-adi-part-3",
        element: <Adi3Module18 />,
      },
      {
        path: "adi-videos",
        element: <Adi3Videos />,
      },
      {
        path: "learner-portal",
        element: <LearnerPortal />,
      },

      {
        path: "driving-instructor-packages/:section?",
        element: <DrivingTransmission />,
      },
      { path: "cpd-events", element: <CbdEvents /> },
      { path: "businesscoaching", element: <BusinessCoaching /> },

      { path: "simulator-training", element: <SimulatorTraining /> },
      { path: "control-module", element: <Adi3Module19 /> },
      { path: "awareness-module", element: <Adi3Module20 /> },
      { path: "mockTest-module", element: <Adi3Module21 /> },

      { path: "bedworth", element: <Bedworth /> },

      { path: "coventry", element: <Coventry /> },

      { path: "leamington", element: <Leamington /> },

      { path: "nuneaton", element: <Nuneaton /> },

      { path: "rugby", element: <Rugby /> },

      { path: "solihull", element: <Solihull /> },
      { path: "warwick", element: <Warwick /> },

      {
        path: "all-results",
        element: <AllResult />,
      },
      {
        path: "trainning-material",
        element: <TrainningMaterial />,
      },
      {
        path: "part-1-trainning-material",
        element: <PartOneTrainnigMaterial />,
      },
      {
        path: "adi-part-one-test",
        element: <PartOneTest />,
      },
      {
        path: "test-day-tips",
        element: <TestDayTips />,
      },
      {
        path: "hazard-clips",
        element: <HazzardClips />,
      },

      {
        path: "/quizModuleId/:id",
        element: <QuizModuleHome />,
      },
      {
        path: "/quizCatName/:id",
        element: <QuizModuleHome />,
      },
      {
        path: "/quizCategoryHome",
        element: <QuizCategoryHome />,
      },
      {
        path: "/quizGive",
        element: <QuizCategoryHome />,
      },

      {
        path: "/takequiz/:cid/:id",
        element: <Quiz />,
      },
      {
        path: "/takequiz/:cid",
        element: <Quiz />,
      },
      {
        path: "/quizResult",
        element: <QuizResult />,
      },
    ],
  },
  {
    path: "/takequizCatName/:cid",
    element: <Quiz />,
  },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "pdi-login", element: <PdiLogin /> },
  { path: "theory-login", element: <TheoryLogin /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "reset-password/:resetToken", element: <ResetPasswordPage /> },
  { path: "MyCart", element: <MyCart /> },
  { path: "thanks", element: <Thanks /> },
  { path: "payment-completed", element: <PaymentCompleted /> },
  { path: "paymentSuccess", element: <PaymentSuccess /> },
  { path: "news", element: <News /> },
  {
    path: "goodluck",
    element: <GoodLuckPage />,
  },
  {
    path: "admin",
    element: (
      <RequireAuth
        allowedRoles={[ROLES.ADMIN]}
        element={<AdminLayout />}
      ></RequireAuth>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminHome />,
      },

      {
        path: "/admin/roles",
        element: <Roles />,
      },
      {
        path: "/admin/home-edit-page",
        element: <AdminContentHome pageId="home" />,
      },
      {
        path: "/admin/home-edit-page/:sectionKey",
        element: <AdminContentHome pageId="home" />,
      },

      {
        path: "/admin/manual-course-edit-page",
        element: <AdminManualCoursePage />,
      },
      {
        path: "/admin/manual-course-edit-page/new",
        element: <AdminManualCoursePage />,
      },
      {
        path: "/admin/manual-course-edit-page/:id",
        element: <AdminManualCoursePage />,
      },

      {
        path: "/admin/users",
        element: <Users />,
      },

      {
        path: "/admin/categories",
        element: <Categories />,
      },
      {
        path: "/admin/postcodes",
        element: <Postcode />,
      },
      {
        path: "/admin/products",
        element: <ProductModal />,
      },
      {
        path: "/admin/blogs",
        element: <AdminBlogs />,
      },
      {
        path: "/admin/productsSpecial",
        element: <ProductSpecialModal />,
      },
      {
        path: "/admin/product-area",
        element: <Area />,
      },
      {
        path: "/admin/quiz-category",
        element: <QuizCategory />,
      },
      {
        path: "/admin/quiz-module",
        element: <QuizUModule />,
      },
      {
        path: "/admin/sell-subscription",
        element: <SellSubscription />,
      },
      {
        path: "/admin/sell-products",
        element: <SellProducts />,
      },

      {
        path: "/admin/smartBot-livechat",
        element: <AdminLiveChat />,
      },
      {
        path: "/admin/quizCategory",
        element: <Quiz />,
      },
      {
        path: "/admin/quizModule",
        element: <Quiz />,
      },
      {
        path: "/admin/quizModule",
        element: <QuizModule />,
      },
      {
        path: "/admin/quizResult",
        element: <QuizResult />,
      },
      {
        path: "/admin/quizViewResult",
        element: <QuizResult />,
      },
      {
        path: "/admin/adminCheckout",
        element: <AdminCheckOut />,
      },
      {
        path: "/admin/adminProcessing",
        element: <AdminPaymentProcessing />,
      },
      {
        path: "/admin/quiz",
        element: <QuizModal />,
      },
      { path: "/admin/order", element: <Order /> },

      { path: "/admin/order-Invoice", element: <OrderInvoice /> },
      { path: "/admin/orderInvoice/:invoiceId", element: <OrderInvoice /> },

      { path: "/admin/userReport", element: <UserReport /> },

      {
        path: "/admin/userReport-invoice/:invoiceId",
        element: <UserInvoice />,
      },
      // { path: "/admin/orderInvoice/:invoiceId", element: <OrderInvoice /> },
    ],
  },
]);
