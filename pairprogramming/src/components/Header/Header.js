import "./Header.scss";
import { Link } from "react-router-dom";
// import logo from '././resumehublogo.jpeg';


function Header() { 

    return (
        <header className="header"> 
        {/* <Link to="/"> <img className="header__logo" src="" alt="ResumeHublogo"/> </Link> */}
        <h1 className="header">Resume Hub</h1>
        </header>
    );
}

export default Header;