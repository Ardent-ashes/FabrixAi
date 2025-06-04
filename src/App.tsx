
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/pages/Home";
import Signup from "./components/pages/SignUp";
import Login from "./components/pages/Login"; 
import UserTypeSelection from "./components/pages/UserType";
import LearningSourcePage from "./components/pages/LearningSource";
import EmployeeDetails from "./components/pages/EmployeeDetails";
import EmailVerification from "./components/pages/EmailVerification";
import SocialMedia from "./components/pages/SocialMedia";
import WorkType from "./components/pages/WorkType"
import CustomDomain from "./components/pages/CustomDomain"
import Complete from "./components/pages/Complete";
import Account from "./components/pages/AccountType";
import EmpoyeeDetailsOrg from "./components/pages/EmployeeDetailsOrg";
import LogWithFB from "./components/pages/LoginWithFB";
import FBAccess from "./components/pages/FBAccess";
import Demo from "./components/pages/demo";
import Land from "./components/pages//SetUp/LandingPage";
import About from "./components/pages/SetUp/AboutUS";
import Service from "./components/pages/SetUp/Services";
import Clients from "./components/pages/SetUp/Clients.tsx";
import Certification from "./components/pages/SetUp/Certification.tsx";
import Gallery from "./components/pages/SetUp/Gallery.tsx";
import Set from "./components/pages/SetUp/SetUp.tsx";
import PaymentInfo from "./components/pages/SetUp/PaymentInfo.tsx";

import PaymentPlan from "./components/pages/SetUp/PaymentPlan.tsx";




function App() {
  return (
    <Layout>
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usertype" element={<UserTypeSelection/>} />
        <Route path="/learning" element={<LearningSourcePage/>} />
        <Route path="/employeedetails" element={<EmployeeDetails />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/worktype" element={<WorkType />} />
        <Route path="/customdomain" element={<CustomDomain />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/accounttype" element={<Account />} />
        <Route path="/employeedetailsorg" element={<EmpoyeeDetailsOrg />} />
        <Route path="/loginwithfb" element={<LogWithFB />} />
        <Route path="/fbaccess" element={<FBAccess />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/landing" element={<Land />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/certification" element={<Certification/>}/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/setup" element={<Set />} />
        <Route path="/paymentinfo" element={<PaymentInfo/>} />
        <Route path="/paymentplan" element={<PaymentPlan/>}/>

        
        {/* Add more routes as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
        
        {/* Add more routes as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
        
        {/* Add more routes as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
        
        {/* Add more routes as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
        
        {/* Add more routes as needed */}

      </Routes>
    </Layout>
  );
} 

export default App;

