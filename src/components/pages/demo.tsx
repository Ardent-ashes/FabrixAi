import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function CustomDomainPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customDomain: 'https://www.figma.com/design'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    localStorage.setItem('customDomain', JSON.stringify(formData));
    navigate('/complete');
  };

  const handleSkip = () => {
    navigate('/complete');
  };

  const handleBuildWithUs = () => {
    // Handle build with us action
    navigate('/customdomain');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5 relative">
      {/* Skip button */}
      <button 
        onClick={handleSkip}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        style={{ fontSize: '16px' }}
      >
        Skip
      </button>

      <div className="w-full max-w-6xl flex flex-col items-center z-20">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="fabricxai" className="w-[25%]" />
        </div>

        {/* Main content area */}
        <div className="w-full max-w-md">
          <form onSubmit={handleContinue} >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#EAB308] mb-3">Do you have a custom domain?</h1>
              <p className="text-white">or Build with us</p>
            </div>

            <div className="form-container z-20">
              {/* Custom Domain Field */}
              <div className="mb-6" >
                <label htmlFor="customDomain" className="form-label">
                  Your site
                </label>
                <input
                  type="url"
                  id="customDomain"
                  value={formData.customDomain}
                  onChange={(e) => handleInputChange('customDomain', e.target.value)}
                  className="form-input w-full text-base"
                  placeholder="https://www.example.com"
                  style={{ minHeight: '65px', maxHeight: '65px' }}
                />
              </div>

              {/* Description Text */}
              <div className="text-center">
                               
              </div>
            </div>

            <div className="w-[60%]  mx-auto my-12 mb-10">
              <button type="submit" className="submit-button">
                Continue
              </button>
            </div>
          </form>

          {/* Build with us option */}
          <div className="text-center mb-8">
            <p className="text-white">
              Don't have a site?{' '}
              <button 
                onClick={handleBuildWithUs}
                className="text-[#EAB308] hover:text-[#FFD700] font-semibold underline cursor-pointer"
              >
                Build with us
              </button>
            </p>
          </div>

          {/* Progress bar */}
          <div className="progress-container">
            <div className="progress-track">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
            <div className="progress-indicator">8/8</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDomainPage;