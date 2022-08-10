import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p> 
            <p style={{color: "black"}}><Link to="/about">About</Link> | <Link to="/city">City</Link> | <Link to="/">Home</Link></p>
        </footer>
    )
}

export default Footer
