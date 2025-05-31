// components/pages/About.tsx
import logoImage from "../../assets/logo.png";
import Name from "../../assets/name.png";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div className="gradient-background flex justify-center items-center min-h-screen p-5" onClick={handleClick}>
      <div className="w-full max-w-6xl flex flex-col items-center justify-center z-20 space-y-10">
        <div className="flex justify-center">
          <img 
            src={logoImage} 
            alt="Logo"
            className="w-[40%] h-auto"
          />
        </div>
        
        <div className="flex justify-center">
          <img 
            src={Name}
            alt="Name"
            className="w-[40%] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;