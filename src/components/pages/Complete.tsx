// components/pages/About.tsx
import logoImage from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="gradient-background flex flex-col justify-center items-center min-h-screen p-5" onClick={handleClick}>
      <div className="flex flex-col items-center space-y-8 z-20">
        <img 
          src={logoImage} 
          alt="About Us"
          style={{
            maxWidth: '300px',
            height: 'auto'
          }}
        />
        </div>
     
        
        <div className="w-[25%] max-w-3xl p-6">
  <div 
    className="h-2 relative overflow-hidden mt-4 shadow-lg" // adds margin top and shadow
    style={{
      background: 'linear-gradient(90deg, #ffffff 0%, #f9c74f 100%)',
      borderRadius: '1px',
      boxShadow: '0 0 8px 2px rgba(249, 199, 79, 0.6)' // soft yellow glow
    }}
  >
    {/* Animated shimmer effect with yellow tint */}
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
      
      
   
  );
}

export default About;