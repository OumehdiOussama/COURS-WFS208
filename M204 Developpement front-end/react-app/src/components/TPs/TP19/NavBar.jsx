import "./Styles/NavBar.css";
import JETEX from "./../../../../src/components/TPs/TP21/images/JETEX.png"
function NavBar(){
    return(
        <nav>
            <img src={JETEX} alt="JETEX logo" />
            <div>
                <p className="Titre-1">Gestion des vols - JETEX</p>
                <p className="Titre-2">Jetex Private Jet Experience</p>
            </div>
        </nav>
    );
}
export default NavBar;