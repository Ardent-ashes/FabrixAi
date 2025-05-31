import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function UserTypeSelection() {
  const navigate = useNavigate();
  const [selectedType] = useState(null);

  const handleSelection = (_type: string | React.SetStateAction<null>) => {
    // setSelectedType(type);
    // localStorage.setItem('userType', type);
    navigate('/learning');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5 ">
      <div className="w-full max-w-6xl flex flex-col items-center z-10 ">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="Logo" className="w-[25%]" />
        </div>
        
        {/* Main content area */}
        <div 
          className="w-full max-w-2xl rounded-2xl p-4 "
          
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#EAB308] mb-3">What describes you most?</h1>
            <p className="text-white">This helps us suggest templates that help your team do their best work.</p>
          </div>
          
          {/* Selection buttons */}
          <div className="space-y-4 mb-16">
            <button 
              onClick={() => handleSelection('garments')}
              className={`selection-button ${selectedType === 'garments' ? 'selected' : ''}`}
            >
              Garments Factory
            </button>
            
            <button 
              onClick={() => handleSelection('buying')}
              className={`selection-button ${selectedType === 'buying' ? 'selected' : ''}`}
            >
              Buying House
            </button>
          </div>

          
          {/* Progress bar */}
          <div className="progress-container">
          <div className="progress-track">
            <div className="progress-bar" style={{ width: '12.5%' }}></div>
          </div>
          <div className="progress-indicator">1/8</div>
        </div>
        </div>
        
       
       
      </div>
    </div>
  );
}

export default UserTypeSelection;