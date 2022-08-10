import { Link } from "react-router-dom";
import HexBtn from './HexBtn';

const About = () => {
  return (
    <div>
      <div className="aboutbackground">
        <h4>Version 1.0.0</h4>
        <Link to="/">Go Back</Link>
        <HexBtn/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default About;
