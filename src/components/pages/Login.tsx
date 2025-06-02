import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";
import Google from "../../assets/google.png";
import Gmail from "../../assets/gmail.png";
import FB from "../../assets/facebook.png";

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
    <div className="gradient-background min-h-screen w-full flex items-center justify-center py-[0.3%] xl:py-[0.2%] px-[10%] xl:px-[20%]">
      <div
        className="flex flex-col lg:flex-row justify-center items-center w-full gap-[5%] lg:gap-[15%]"
        style={{ minHeight: "70%", width: "100%", maxWidth: "100%" }}
      >
        {/* Left Side - Form */}
        <div className="flex flex-col w-full h* sm:w-full md:w-[60%] lg:w-[60%] xl:w-[50%] min-w-[300px] max-w-full mx-auto p-[6%] md:p-[4%]">
          <div className="flex justify-center pb-[2%] md:pb-[4%]">
            <img src={logoImage} alt="Logo" className="h-[10%] md:h-[10%] max-h-[70px] object-contain" />
          </div>
          <div className="flex justify-center pb-[10%]">
            <img src={Name} alt="Name" className="h-[8%] md:h-[8%] max-h-[30px] object-contain" />
          </div>
          <div className="form-container z-20">
            <form onSubmit={handleLogin} className="space-y-[3%] md:space-y-[5%] p-[3%]">
              <div>
                <label htmlFor="email" className="form-label">User Name/ Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input w-full h-[2%] text-base md:text-lg"
                  placeholder="********@gmail.com"
                  required
                  style={{ minHeight: '65px', maxHeight: '65px' }}
                />
              </div>
              <div>
                <label htmlFor="password" className="form-label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input w-full h-[7%] pr-[15%] text-base md:text-lg"
                    placeholder="••••••••••••••••"
                    required
                    style={{ minHeight: '65px', maxHeight: '65px' }}
                  />
                  <button 
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-[5%] flex items-center text-white hover:text-[#FFD700] transition-colors"
                    aria-label="Toggle Password Visibility"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mb-[3%]">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-[#EAB308] bg-transparent border-gray-300 rounded focus:ring-[#EAB308] focus:ring-2"
                  />
                  <label htmlFor="rememberMe" className="ml-[2%] text-sm text-white">
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

              <div className="flex justify-center pt-[5%] pb-[5%]">
                <button 
                  type="submit"
                  className="submit-button py-[5%] px-[8%] text-base z-20"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-[6%] text-center text-white">
            <p>or connect with</p>
            <div className="flex justify-center gap-[6%] md:gap-[10%] mt-[4%]">
              <button 
                onClick={() => handleExternalRedirect('https://google.com')}
                className="form-input aspect-square rounded-[20%] p-[2%]"
              >
                <img src={Google} alt="Google Logo" className="h-10 w-10" />
              </button>
              <button 
                onClick={() => navigate('/loginwithfb')}
                className="form-input aspect-square rounded-[20%] p-[2%]"
              >
                <img src={FB} alt="Facebook Logo" className="h-10 w-10" />
              </button>
              <button 
                onClick={() => handleExternalRedirect('mailto:example@example.com')}
                className="form-input aspect-square rounded-[20%] p-[2%]"
              >
                <img src={Gmail} alt="Gmail Logo" className="h-10 w-10" />
              </button>
            </div>
          </div>
          <div className="mt-[6%] text-center">
            <p className="text-white">
              Don't have an account?
              <button 
                onClick={() => navigate('/signup')} 
                className="ml-[2%] text-[#EAB308] hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col gap-[1%] w-full sm:w-[60%] md:w-[45%] lg:w-[38%] min-w-[270px] max-w-full mx-auto pt-[4%]">
          <div className="custom-box mb-[3%]">
            <h2 className="text-lg md:text-xl lg:text-1xl font-bold text-[#EAB308] mb-[2%]">
              Book a demo to see how FabricX can transform your factory floor into a smooth, data-driven engine.
            </h2>
          </div>
          <div className="flex justify-center pt-[3%] pb-[5%] z-20">
            <button 
              onClick={() => handleExternalRedirect('https://calendly.com')}
              className="submit-button py-[5%] px-[8%] text-base"
            >
              Book A Demo
            </button>
          </div>
          <div className="custom-box-dotted p-[3%]">
            <p className="text-center text-[#EAB308] font-bold mb-[2%] text-sm md:text-base">
              All-in-one business management system built specifically for fabric and garment manufacturers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;