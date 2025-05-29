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
    <div className="gradient-background flex justify-center items-center min-h-screen p-5"  onClick={handleClick}>
      <div className="w-full max-w-6xl flex flex-col items-center z-20">
        <img 
          src={logoImage}  
          alt="About Us"
          style={{
           
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px',
            height: 'auto'

          }} 
        />
      
        
      </div>
      
      <div className="flex justify-center pb-6">
        <img 
          src={Name}  // Use the imported variable
          alt="About Us"
          style={{
           
            position: 'absolute',
            left: '50%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px',
            height: 'auto'

          }} 
        />
      </div>

    </div>
  );
}

export default Home;