import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function WorkTypeSelectionPage() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const workOptions = [
    { id: 'marketing', name: 'Option 1' },
    { id: 'design', name: 'Option 2' },
    { id: 'development', name: 'Option 3' },
    { id: 'content', name: 'Option 4' },
    { id: 'social', name: 'Option 5' },
    { id: 'consulting', name: 'Option 6' },
    { id: 'sales', name: 'Option 7' },
    { id: 'operations', name: 'Option 8' },
    { id: 'other', name: 'Option 9' }
  ];

  const handleOptionClick = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(o => o !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleContinue = () => {
    // Save selected work types
    localStorage.setItem('workTypes', JSON.stringify(selectedOptions));
    navigate('/customdomain');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5">
     
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Logo and Name */}
          <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="fabricxai" className="w-[25%]" />
        </div>
       
        {/* Main content area */}
        <div className="w-[100%] max-w-4xl z-20">
         
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#EAB308] mb-3">What kind of work do you do?</h1>
            <p className="text-white">This helps us suggest templates that help your team do their best work.</p>
          </div>

          {/* Work Type Option Buttons */}
          <div className="grid grid-cols-3 gap-10 mb-12">
            {workOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`platform-button w-full ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
                style={{ minHeight: '80px' }}
              >
                <div className="platform-content">
                  <span className={`platform-name`}>
                    {option.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          {selectedOptions.length > 0 && (
            <div className="flex justify-center mb-10">
              <button 
                type="submit"
                className="platform-button selected"
                onClick={handleContinue}
                style={{ maxHeight: '60px', width: '300px' }}
              >
                <div className="platform-content">
                  <span className="platform-name">Continue</span>
                </div>
              </button>
            </div>
          )}
          
          {/* Progress bar */}
          <div className="progress-container">
            <div className="progress-track">
              <div className="progress-bar" style={{ width: '87.5%' }}></div>
            </div>
            <div className="progress-indicator">7/8</div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default WorkTypeSelectionPage;