
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
        
        {/* Add more routes as needed */}

      </Routes>
    </Layout>
  );
} 

export default App;

