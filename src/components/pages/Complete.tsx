// components/pages/About.tsx
import logoImage from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/landing');
  };

  return (
    <div className="gradient-background flex flex-col justify-center items-center min-h-screen p-5" onClick={handleClick}>
            <div className="w-full max-w-6xl flex flex-col items-center justify-center z-20 space-y-10">

       <div className="flex justify-center">
          <img 
            src={logoImage} 
            alt="Logo"
            className="w-[40%] h-auto"
          />
        </div>
        
     
        
        <div className="w-[70%] max-w-6xl p-6">
  <div 
    className="h-2 relative overflow-hidden mt-4 shadow-lg" 
    style={{
      background: 'linear-gradient(90deg, #ffffff 0%, #f9c74f 100%)',
      borderRadius: '1px',
      boxShadow: '0 0 8px 2px rgba(249, 199, 79, 0.6)' 
    }}
  >
    {/* effect  */}
    <div 
      className="absolute inset-0 h-full"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(249, 199, 79, 0.4) 50%, transparent 100%)',
        animation: 'shimmer 3s ease-in-out infinite'
      }}
    />
  </div>
</div>

      </div>
      </div>
      
      
   
  );
}

export default About;