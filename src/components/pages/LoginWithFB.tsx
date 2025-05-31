import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";
import Google from "../../assets/google.png";
import Gmail from "../../assets/gmail.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    // For now, just navigate to dashboard or home page
    navigate('/usertype');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleExternalRedirect = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page or open modal
    navigate('/forgot-password');
  };

 return (
  <div className="gradient-background min-h-screen w-screen flex justify-center items-center p-5">
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="flex justify-center pb-6">
        <img src={logoImage} alt="Logo" className="h-10 md:h-20" />
      </div>
      <div className="flex justify-center pb-6">
        <img src={Name} alt="Logo Name" className="h-10 md:h-7" />
      </div>

      {/* Form */}
      <div className="form-container " >
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="form-label">User Name/ Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full h-16 md:h-20"
              placeholder="********@gmail.com"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input w-full h-16 md:h-20 pr-12"
                placeholder="••••••••••••••••"
                required
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-white hover:text-[#FFD700] transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#EAB308] bg-transparent border-gray-300 rounded focus:ring-[#EAB308] focus:ring-2"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-white">
                Remember me next time
              </label>
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-[#EAB308] hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>

      {/* External Login */}
      <div className="mt-6 text-center text-white">
        <p>or connect with</p>
        <div className="flex justify-center space-x-4 md:space-x-8 mt-4">
          <button onClick={() => handleExternalRedirect('https://google.com')} className="form-input h-20">
            <img src={Google} alt="Google" className="h-8 w-8 md:h-10 md:w-10" />
          </button>
          
          <button onClick={() => handleExternalRedirect('mailto:example@example.com')} className="form-input h-20">
            <img src={Gmail} alt="Gmail" className="h-8 w-8 md:h-10 md:w-10" />
          </button>
        </div>
      </div>

      {/* Sign Up */}
      <div className="mt-6 text-center">
        <p className="text-white">
          Don't have an account? 
          <button 
            onClick={() => navigate('/signup')} 
            className="ml-1 text-[#EAB308] hover:underline focus:outline-none"
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