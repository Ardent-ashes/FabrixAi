// components/pages/About.tsx
import logoImage from "../../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/paymentinfo');
  };

  return (
    <div className="gradient-background flex flex-col justify-center items-center min-h-screen p-5" onClick={handleClick}>
            <div className="w-full max-w-6xl flex flex-col items-center justify-center z-20 ">

       <div className="flex justify-center">
          <img 
            src={logoImage} 
            alt="Logo"
            className="w-[40%] h-auto"
          />
        </div>
        
     
        
        <div className="w-[70%] max-w-6xl">
  <div className="flex justify-center pt-[5%]">
    <h3 className="text-yellow-500 text-3xl"><b>You are all set Up</b></h3>
  </div>
  <div className="flex justify-center pt-[5%]">
    <button
      type="submit"
      className="submit-button w-[30%] z-20"
    >
      Get Started
    </button>
  </div>
</div>



      </div>
      </div>
      
      
   
  );
}

export default About;