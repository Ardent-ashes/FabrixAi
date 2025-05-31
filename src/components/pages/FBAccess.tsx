
import { useNavigate } from 'react-router-dom';


const FacebookConsentModal = () => {
    const navigate = useNavigate();
  return (
    <div className="gradient-background min-h-screen w-screen flex justify-center items-center p-5">
      <div className="form-container max-w-md w-full rounded-xl p-8 shadow-lg border border-gray-700 text-white">
        <h2 className="text-xl md:text-2xl font-bold text-center">Logging with Facebook</h2>
        <p className="text-sm text-center mt-1 mb-4 font-semibold text-gray-300">
          Terms and Conditions for Logging
        </p>

        <p className="text-xs text-gray-400 mb-6">
        <br></br>
          Welcome! These Terms and Conditions outline the rules and guidelines for using our chatbot services. By accessing or using [Chatbot Name], you agree to comply with and be bound by these terms. If you do not agree...
        <br></br>
        <br></br>
        </p>

        <p className="text-sm font-bold mb-2">Torun will have access of these things</p>

        <ul className="space-y-2 mb-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#EAB308]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="form-label">Username Access</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between">
          <button className="form-input w-1/2 mr-2 py-3 text-white bg-[#1F2937] hover:bg-gray-600 rounded"   onClick={() => navigate('/login')}>
            Decline
          </button>
          <button className="submit-button w-1/2 ml-2 py-3 bg-[#EAB308] text-black hover:bg-yellow-500 rounded "   onClick={() => navigate('/usertype')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacebookConsentModal;
