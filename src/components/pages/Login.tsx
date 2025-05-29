
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // e.preventDefault();
    // Here you would typically handle the login logic
    // For now, just navigate to the Login page
    navigate('/about');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-4">
      <div className="bg-opacity-20 bg-black backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-gray-700">
        <div className="flex justify-center mb-8">
          <img src={logoImage} alt="Logo" className="h-16 md:h-20" />
        </div>
        
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login to Your Account</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-[#0d1633] border border-[#FFD700] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
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
                className="w-full rounded-md bg-[#0d1633] border border-[#FFD700] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
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
            Login
          </button>
        </form>
        
        <div className="mt-6 text-center text-white">
          <p>or connect with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button 
            //   onClick={() => handleExternalRedirect('https://google.com')}
              className="bg-white p-2 rounded-md hover:bg-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#DB4437" d="M12 11v2h5.5c-.22 1.16-1.65 3.5-5.5 3.5-3.32 0-6-2.68-6-6s2.68-6 6-6c1.88 0 3.14.8 3.85 1.5l2.36-2.36C16.46 2.9 14.46 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.77 0 9.6-4.06 9.6-9.77 0-.65-.07-1.15-.15-1.65H12z" />
              </svg>
            </button>
            <button 
            //   onClick={() => handleExternalRedirect('https://facebook.com')}
              className="bg-white p-2 rounded-md hover:bg-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button 
              // onClick={() => handleExternalRedirect('mailto:example@example.com')}
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
            Don't have an account? 
            <button 
              onClick={() => navigate('/signup')} 
              className="ml-1 text-[#FFD700] hover:underline focus:outline-none"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

