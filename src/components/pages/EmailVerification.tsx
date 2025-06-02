import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";

function EmailVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(299);
  const [email] = useState('*******@gmail.com');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      navigate('/socialmedia');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="gradient-background min-h-screen flex justify-center items-center p-5">
      <div className="w-full max-w-6xl flex flex-col items-center">

         <div className="flex justify-center pb-6">
          <img src={logoImage} alt="Logo" className="w-[15%]" />
        </div>
        <div className="flex justify-center pb-6">
          <img src={Name} alt="fabricxai" className="w-[25%]" />
        </div>

       

        {/* Main form card */}
        <div className="w-full max-w-md">
          <div
            className="form-container"         
          >
            <div className="text-center mb-6 pb-4 ">
              <h1 className="text-2xl font-bold text-white mb-3">Verify Email</h1>
              <p className="text-gray-300 text-sm">
                We have sent an OTP to{' '}
                <span className="text-[#FFD700]">{email}</span>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Please Enter the OTP to Continue
              </p>
            </div>

            {/* OTP boxes */}
            <div className="flex justify-center gap-3 mb-6 ">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 form-input text-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700]"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                />
              ))}
            </div>

            {/* Timer */}
            <p className="text-center text-gray-300 text-sm mb-8">
              You have the time left of{' '}
              <span className="text-[#FFD700] font-semibold">
                {formatTime(timeLeft)} sec
              </span>{' '}
              to verify the OTP
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pb-2">
              <button
                onClick={handleBack}
                className="form-input flex-1 py-5 px-4 text-white  "
              >
                Back
              </button>
              <button
                onClick={handleVerify}
                disabled={otp.some(digit => !digit)}
                className={`submit-button w-[50%] ${
                  otp.some(digit => !digit)
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    : 'bg-[#FFD700] text-[#0d1633] hover:bg-[#F0C800] transform hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                Verify
              </button>
            </div>
          </div>

          {/* Spam reminder */}
          <p className="text-center text-gray-400 text-sm mt-4">
            didn't get it?{' '}
            <span className="text-[#FFD700] cursor-pointer hover:underline">
              check spam folder
            </span>
          </p>

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

export default EmailVerificationPage;
