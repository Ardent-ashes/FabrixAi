import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function LearningSourcePage() {
  const navigate = useNavigate();
  const [selectedSource] = useState(null);

  const handleSelection = (_source: string | React.SetStateAction<null>) => {
    // setSelectedSource(source);
    // localStorage.setItem('learningSource', source);
    // Navigate to the next page
    navigate('/employeedetails');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5">
      
     
      
      <div className="w-full max-w-6xl flex flex-col items-center z-10">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="h-16 md:h-20" />
        </div>
        <div className="flex justify-center pb-10">
          <img src={Name} alt="fabricxai" className="h-16 md:h-10" />
        </div>
        
        {/* Main content area */}
        <div className="w-full max-w-3xl rounded-2xl p-8 ">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#EAB308] mb-3">How did you learn about us?</h1>
          </div>
          
          {/* Selection buttons */}
          <div className="space-y-4 mb-16">
            <button 
              onClick={() => handleSelection('facebook')}
              className={`selection-button ${selectedSource === 'facebook' ? 'selected' : ''}`}
            >
             Facebook
            </button>
            
            <button 
              onClick={() => handleSelection('linkedin')}
              className={`selection-button ${selectedSource === 'linkedin'? 'selected' : ''}`}
            >
             LinkedIn
            </button>
            
            <button 
              onClick={() => handleSelection('other')}
              className={`selection-button ${selectedSource === 'other'? 'selected' : ''}`}
            >
              Other
            </button>
             
          </div>
          
          {/* Progress bar */}
          <div className="progress-container">
          <div className="progress-track">
            <div className="progress-bar" style={{ width: '25%' }}></div>
          </div>
          <div className="progress-indicator">2/8</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LearningSourcePage;