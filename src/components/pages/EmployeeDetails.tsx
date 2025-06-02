
import { useState } from 'react';
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
      <div className="w-full max-w-6xl flex flex-col items-center z-18">
        {/* Logo and Name */}
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="fabricxai" className="w-[25%]" />
        </div>

        {/* Main content area */}
          
        <div className="w-full max-w-md z-20">
          <form onSubmit={handleContinue}>
          <div
            className="form-container z-10"
            
          >
           
          
              {/* Employer Field */}
              <div className="mb-5">
                <label htmlFor="employer" className="form-label">
                  employer
                </label>
                <input
                  type="text"
                  id="employer"
                  value={formData.employer}
                  onChange={(e) => handleInputChange('employer', e.target.value)}
                  className="form-input w-full h-10 md:h-12"
                  style={{ minHeight: '65px', maxHeight: '65px', maxWidth: '700px' }}
                  placeholder="Enter employer name"
                  required
                />
              </div>

              {/* Role Field */}
              <div className="mb-6">
                <label htmlFor="role" className="form-label">
                  Work Email*
                </label>
                <input
                  type="role"
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  style={{ minHeight: '65px', maxHeight: '65px', maxWidth: '700px' }}
                  className="form-input w-full h-10 md:h-12 "
                  placeholder="Enter your Role"
                  required
                />
              </div>

              
            

             
               {/* Phone Number Field */}
             <div>
      <label htmlFor="phone" className="form-label">
        Phone Number
      </label>
      <div className="flex gap-4">
        {/* Country Code Selector */}
        <select
          value={formData.countryCode}
          onChange={(e) => handleInputChange('countryCode', e.target.value)}
          className="text-base md:text-lg bg-[#EAB308] text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          style={{ minHeight: '65px', minWidth: '140px' }}
        >
          {countryCodes.map((country) => (
            <option 
              key={country.code} 
              value={country.code}
              className="bg-[#EAB308] text-black"
            >
              {country.flag} {country.code}
            </option>
          ))}
        </select>

        {/* Phone Input */}
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="rounded-lg border border-[#FFD700] bg-[rgba(31, 40, 56, 0.6)]  focus:ring-[#FFD700]"
          placeholder="  Phone number"
          required
          style={{ minHeight: '65px' }}
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

