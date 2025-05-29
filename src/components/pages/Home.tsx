// components/pages/About.tsx
import logoImage from "../../assets/logo.png"; 
import Name from "../../assets/name.png"; 
import { useNavigate } from 'react-router-dom';






function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };
  return (
    <div className="gradient-background"  onClick={handleClick}>
      <div className="container mx-auto px-4 py-8">
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
      
      <div className="container mx-auto px-4 py-8">
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

export default About;