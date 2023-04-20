import "./Header.scss";
import { Link } from "react-router-dom";


function Header() { 

    return (
        <header className="header"> 
        <Link to="/"><h1 className="header">Job Hunter</h1></Link> 
        </header>
    );
}

export default Header;