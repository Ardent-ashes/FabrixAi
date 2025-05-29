import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";
import FacebookIcon from "../../assets/fb.png"; // You'll need to add this
import LinkedInIcon from "../../assets/linkedin.png"; // You'll need to add this

function SocialMediaPage() {
  const navigate = useNavigate();
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const socialPlatforms = [
    { id: 'facebook', name: 'Facebook', icon: FacebookIcon },
    { id: 'linkedin', name: 'Linkedin', icon: LinkedInIcon },
    { id: 'other', name: 'Other', icon: null },
  ];

  const handlePlatformClick = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platformId));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformId]);
    }
  };

  const handleContinue = () => {
    // Save selected platforms
    localStorage.setItem('socialMediaPlatforms', JSON.stringify(selectedPlatforms));
    navigate('/next-step');
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
        <div className="w-[40%] max-w-3xl">
         
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#FFD700] mb-3">Add your Social Media</h1>
            <p className="text-white">This helps us sync everything, that help your team do their best work.</p>
          </div>

          {/* Social Media Buttons */}
          <div className="space-y-4 mb-10">
            {socialPlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handlePlatformClick(platform.id)}
                className={`platform-button ${selectedPlatforms.includes(platform.id) ? 'selected' : ''}`}
              >
                <div className="platform-content">
                  {platform.icon ? (
                    <img src={platform.icon} alt={platform.name} className="platform-icon" />
                  ) : (
                    <span className="platform-dot"></span>
                  )}
                  <span className={`platform-name `}>
                    {platform.name}
                  </span>
                </div>
              </button>
            ))}
          </div>


          {/* Skip/Continue Button */}
          {selectedPlatforms.length > 0 && (
            <div>
              <button 
                type="submit"
                className="submit-button"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>

          )}
          

          {/* Progress bar */}
          <div className="progress-container">
            <div className="progress-track">
              <div className="progress-bar" style={{ width: '75%' }}></div>
            </div>
            <div className="progress-indicator">6/8</div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default SocialMediaPage;