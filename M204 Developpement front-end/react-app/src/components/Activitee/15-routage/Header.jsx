import { Link } from "react-router-dom";
function Header(){
    return(
        <header className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Formulaire">Formulaire</Link></li>
            </ul>
        </header>
    );
}
export default Header;