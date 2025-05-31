import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function LearningSourcePage() {
  const navigate = useNavigate();
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const handleSelection = (source: string) => {
    setSelectedSource(source);
    localStorage.setItem('learningSource', source);
    navigate('/accounttype');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5 ">
      <div className="w-full max-w-6xl flex flex-col items-center z-10 ">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="fabricxai" className="w-[25%]" />
        </div>
        
        {/* Main content area */}
        <div className="w-full max-w-2xl rounded-2xl p-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#EAB308] mb-3">How did you learn about us?</h1>
            <p className="text-white">We’d love to know how you found us. It helps us improve!</p>
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
              className={`selection-button ${selectedSource === 'linkedin' ? 'selected' : ''}`}
            >
              LinkedIn
            </button>

            <button 
              onClick={() => handleSelection('other')}
              className={`selection-button ${selectedSource === 'other' ? 'selected' : ''}`}
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
