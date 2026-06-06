function Header(){
    return(
        <header className="header">
            <nav>
                <ul>
                    <li className="title">HAJZ.ma</li>
                    <li>Hebergement</li>
                    <li>Voitures</li>
                </ul>
            </nav>
            <div className="btns">
                <button className="btn-inscrire">S'inscrire</button>
                <button className="btn-connecter">Se connecter</button>
            </div>
        </header>
    );
}
export default Header