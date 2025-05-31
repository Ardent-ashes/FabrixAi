
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function EmploymentDetailsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    website: '',
    location: '',
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
          
        <div className="w-full max-w-md">
          <form onSubmit={handleContinue}>
          <div
            className="form-container"
            
          >
           
          
              {/* Employer Field */}
              <div className="mb-6">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="form-input w-full h-10 md:h-12"
                  placeholder="Enter company name"
                  required
                />
              </div>

              {/* Role Field */}
              <div className="mb-6">
                <label htmlFor="role" className="form-label">
                  Work Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="form-input w-full h-10 md:h-12"
                  placeholder="Enter your Email"
                  required
                />
              </div>

               {/* Role Field */}
              <div className="mb-6">
                <label htmlFor="website" className="form-label">
                  Website*
                </label>
                <input
                  type="text"
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="form-input w-full h-10 md:h-12"
                  placeholder="Enter your website"
                  required
                />
              </div>

               {/* Role Field */}
              <div className="mb-6">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="form-input w-full h-10 md:h-12"
                  placeholder="Enter your location"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="mb-8">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="form-input w-full h-10 md:h-12"
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
                    className="form-input w-full h-10 md:h-12"
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

