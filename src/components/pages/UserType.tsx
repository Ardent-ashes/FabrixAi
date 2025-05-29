import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function UserTypeSelection() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const handleSelection = (type: string | React.SetStateAction<null>) => {
    // setSelectedType(type);
    // localStorage.setItem('userType', type);
    navigate('/learning');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="h-16 md:h-20" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="Logo" className="h-16 md:h-10" />
        </div>
        
        {/* Main content area */}
        <div 
          className="w-full max-w-3xl rounded-2xl p-8 "
          
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#FFD700] mb-3">What describes you most?</h1>
            <p className="text-white">This helps us suggest templates that help your team do their best work.</p>
          </div>
          
          {/* Selection buttons */}
          <div className="space-y-6 mb-10">
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