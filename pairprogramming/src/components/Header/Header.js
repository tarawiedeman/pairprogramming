// import "./Header.scss";
import { Link } from "react-router-dom";


function Header() { 

    return (
        <header className="header"> 
        <Link to="/"> <img className="header__logo" src="" alt="ResumeHublogo"/> </Link>
        <h1>Resume Hub</h1>
        </header>
    );
}

export default Header;