
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function EmploymentDetailsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employer: '',
    role: '',
    countryCode: '+880',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    localStorage.setItem('employmentDetails', JSON.stringify(formData));
    navigate('/emailverification');
  };

  const countryCodes = [
    { code: '+880', flag: '🇧🇩', country: 'Bangladesh' },
    { code: '+1', flag: '🇺🇸', country: 'USA' },
    { code: '+44', flag: '🇬🇧', country: 'UK' },
    { code: '+91', flag: '🇮🇳', country: 'India' },
    { code: '+86', flag: '🇨🇳', country: 'China' },
    { code: '+92', flag: '🇵🇰', country: 'Pakistan' }
  ];

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
          
        <div className="w-full max-w-md">
          <form onSubmit={handleContinue}>
          <div
            className="rounded-2xl p-8 border"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #0D131F, #324978)',
              borderColor: 'rgba(255, 255, 255, 0.7)',
              borderWidth: '2px',
            }}
          >
           
          
              {/* Employer Field */}
              <div className="mb-6">
                <label htmlFor="employer" className="block text-white text-sm mb-2">
                  Employer
                </label>
                <input
                  type="text"
                  id="employer"
                  value={formData.employer}
                  onChange={(e) => handleInputChange('employer', e.target.value)}
                  className="w-full h-12 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-400"
                  placeholder="Enter employer name"
                  required
                />
              </div>

              {/* Role Field */}
              <div className="mb-6">
                <label htmlFor="role" className="block text-white text-sm mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full h-12 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-400"
                  placeholder="Enter your role"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="mb-8">
                <label htmlFor="phone" className="block text-white text-sm mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="h-12 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] appearance-none cursor-pointer"
                    style={{ minWidth: '120px' }}
                  >
                    {countryCodes.map((country) => (
                      <option 
                        key={country.code} 
                        value={country.code}
                        className="bg-[#0d1633] text-white"
                      >
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 h-12 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-400"
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>

            
            
          </div>
          <div className="w-[60%] pt-10 mx-auto">
  <button type="submit" className="submit-button">
    Continue
  </button>
</div>
     </form>       

          {/* Progress bar */}
          <div className="mt-8">
            <div className="progress-container">
              <div className="progress-track">
                <div className="progress-bar" style={{ width: '50%' }}></div>
              </div>
              <div className="progress-indicator">4/8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetailsPage;

