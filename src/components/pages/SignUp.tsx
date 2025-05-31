import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";
import Google from "../../assets/google.png";
import Gmail from "../../assets/gmail.png";
import FB from "../../assets/facebook.png";

function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would typically handle the signup logic
    // For now, just navigate to the About page
    navigate('/usertype');
  };

  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleExternalRedirect = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  return (
    <div className="gradient-background min-h-screen w-screen flex justify-center items-start pt-[8vh] p-5">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-24 lg:gap-48">
        {/* Left Side - Form */}
        <div className=" flex-[1] max-w-lg mx-auto lg:mx-0 "
        >
          <div className="flex justify-center pb-6">
            <img src={logoImage} alt="Logo" className="h-10 md:h-20" />
          </div>
          <div className="flex justify-center pb-6">
            <img src={Name} alt="Logo" className="h-10 md:h-7" />
          </div>
          <div className="form-container">
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">User Name</label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-input w-full h-16 md:h-20"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input w-full h-16 md:h-20"
                  placeholder="Enter your emaill"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input w-full h-16 md:h-20 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-white hover:text-[#FFD700] transition-colors"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <button 
                type="submit"
                className="submit-button"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="mt-6 text-center text-white">
            <p>or connect with</p>
            <div className="flex justify-center space-x-4 md:space-x-8 mt-4">
              <button 
                onClick={() => handleExternalRedirect('https://google.com')}
                   className="form-input h-20 md:h-20"

              >
                <img
                  src={Google} 
                  alt="Google Logo"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </button>
              <button 
                onClick={() => navigate('/loginwithfb')}
                className="form-input h-18 md:h-18"
              >
                <img
                  src={FB} 
                  alt="Facebook Logo"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </button>
              <button 
                onClick={() => handleExternalRedirect('mailto:example@example.com')}
                className="form-input h-18 md:h-18"
              >
                <img
                  src={Gmail} 
                  alt="Gmail Logo"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white">
              Already have an account? 
              <button 
                onClick={() => navigate('/login')} 
                className="ml-1 text-[#EAB308] hover:underline focus:outline-none"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Right Side - Info */}
        
        <div className="flex-[1] max-w-sm mx-auto lg:mx-0 pt-[20vh]"
              >
          <div className="bg-opacity-20 bg-black backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 text-center mb-6">
            <h5 className="text-lg md:text-xl lg:text-2xl font-bold text-[#EAB308] mb-4">
              Book a demo to see how FabricX can transform your factory floor into a smooth, data-driven engine.
            </h5>
          </div>
          <div className="flex justify-center pb-6">
            <button 
              onClick={() => handleExternalRedirect('https://calendly.com')}
              className="submit-button"
            >
              Book A demo
            </button>
          </div>
          <div className="bg-opacity-20 bg-black backdrop-blur-sm rounded-2xl p-4 border border-[#EAB308] border-dashed">
            <p className="text-center text-[#EAB308] font-bold mb-2 text-sm md:text-base">
              All-in-one business management system built specifically for fabric and garment manufacturers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;