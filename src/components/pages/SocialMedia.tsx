import { useState } from 'react';
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
    navigate('/worktype');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5">
      <button 
        onClick={handleContinue}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        style={{ fontSize: '16px' }}
      >
        Skip
      </button>
     
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="fabricxai" className="w-[25%]" />
        </div>
       
        {/* Main content area */}
        <div className="w-[50%] max-w-3xl z-20">
         
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#EAB308] mb-3">Add your Social Media</h1>
            <p className="text-white">This helps us sync everything, that help your team do their best work.</p>
          </div>

          {/* Social Media Buttons */}
          <div className="space-y-4 mb-16">
            {socialPlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handlePlatformClick(platform.id)}
                className={`platform-button  ${selectedPlatforms.includes(platform.id) ? 'selected' : ''}`}
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

             {selectedPlatforms.length > 0 && (
            <div mt-20 >
               <button 
                type="submit"
              className="submit-button w-[40%] mx-[30%]"
                onClick={handleContinue}
               
              >
                Continue
              </button>
            </div>

            

          )}

            
          </div>


          {/* Skip/Continue Button */}
         
          

          {/* Progress bar */}
              
              <div className="mt-8">
            <div className="progress-container">
              <div className="progress-track">
                <div className="progress-bar" style={{ width: '62.5%' }}></div>
              </div>
              <div className="progress-indicator">5/8</div>
            </div>
          </div>

          
        </div>
      </div>

      
       

      
    </div>
  );
}

export default SocialMediaPage;