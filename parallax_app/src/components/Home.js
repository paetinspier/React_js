import Container from "./Container";
import Footer from "./Footer";

const Home = () => {


  return (
    
      <div className='background'>
        <Container user="Paetin" />
        <Container user="Stella" />
        <Container user="Rya" />
        <Container user="Rebecca" />
        <Footer />
      </div>
  );
};

export default Home;
