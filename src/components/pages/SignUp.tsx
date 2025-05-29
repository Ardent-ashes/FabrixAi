
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";
import Google from "../../assets/google.png";

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
    <div className="gradient-background flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-32">
        {/* Left Side - Form */}
        <div className="w-full md:w-[45%] ">
        <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="h-16 md:h-20" />
        </div>
         <div className="flex justify-center pb-6">
          <img src={Name} alt="Logo" className="h-16 md:h-10" />
        </div>
        <div
        className="rounded-2xl p-8 border"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #0D131F, #324978)',
          borderColor: 'rgba(255, 255, 255, 0.7)', // white with 70% opacity
          borderWidth: '2px',
        }}
      >
          
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-white text-sm mb-2">User Name</label>
              <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full h-20 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="Enter your username"
              required
            />

            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm mb-2">Gmail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="w-full h-20 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              className="w-full h-20 rounded-md bg-[#0d1633] border border-[#FFD700] px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  placeholder="Enter your password"
                  required
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white"
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
              className="w-full bg-[#FFD700] hover:bg-[#F0C800] text-[#0d1633] font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </form>
          
         
        </div>
         <div className="mt-6 text-center text-white">
            <p>or connect with</p>
            <div className="flex justify-center space-x-4 mt-4">
             <button 
  onClick={() => handleExternalRedirect('https://google.com')}
  className=" p-2 rounded-md border border-[#FFD700] hover:bg-[#1a2238] transition"
      >
        <img
          src={Google} 
          alt="Google Logo"
          className="h-8 w-8"
        />
      </button>

              <button 
                onClick={() => handleExternalRedirect('https://facebook.com')}
                className="bg-white p-2 rounded-md hover:bg-gray-200 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button 
                onClick={() => handleExternalRedirect('mailto:example@example.com')}
                className="bg-white p-2 rounded-md hover:bg-gray-200 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#EA4335" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7l7.5 4.5c.28.17.64.17.91 0L20 7v10c0 .55-.45 1-1 1z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white">
              Already have an account? 
              <button 
                onClick={() => navigate('/login')} 
                className="ml-1 text-[#FFD700] hover:underline focus:outline-none"
              >
                Login
              </button>
            </p>
          </div>
        </div>
        
        {/* Right Side - Info */}
        <div className="w-full md:w-[40%] text-white flex flex-col justify-center">
          <div className="bg-opacity-20 bg-black backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center mb-6">
            <h5 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-4">
              Book a demo to see how FabricX can transform your factory floor into a smooth, data-driven engine.
            </h5>
           
          </div>
          <div className="flex justify-center pb-6">
          <button 
              onClick={() => handleExternalRedirect('https://calendly.com')}
              className="w-full bg-[#FFD700] hover:bg-[#F0C800] text-[#0d1633] font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out mt-4"
            >
              Book A demo
            </button>
        </div>
           
          
          <div className="bg-opacity-20 bg-black backdrop-blur-sm rounded-2xl p-4 border border-[#FFD700] border-dashed">
  <p className="text-center text-[#FFD700] font-bold mb-2 text-sm md:text-base">
    All-in-one business management system built specifically for fabric and garment manufacturers.
  </p>
  <p className="text-xs md:text-sm text-center">
    It streamlines production, inventory, order tracking, and client communications into one intuitive platform. With real-time insights, automated workflows, and tailored reporting, FabricX helps you reduce manual errors, improve delivery timelines, and maximize operational efficiency without the tech headache.
  </p>
</div>

        </div>
      </div>
    </div>
  );
}

export default Signup;

