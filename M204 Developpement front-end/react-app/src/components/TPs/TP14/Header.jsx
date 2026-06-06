import icon_search from "./../../../../../src/components/Home/TPs/TP1/icons/icon_search.svg"
function Header(){
    return(
        <header>
            <h1><a href="">OUSSAMA</a></h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Produits</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">About</a></li>
            </ul>
            <div className="search">
                <input type="text" id="input-search" placeholder="Rechercher"/>
                <button className="btn-search">
                    <img src={icon_search} alt="" />
                </button>
            </div>
            <div className="Log">
                <button className="btn-login">Login</button>
                <button className="btn-logout">Logout</button>
            </div>
        </header>
    );
}
export default Header;