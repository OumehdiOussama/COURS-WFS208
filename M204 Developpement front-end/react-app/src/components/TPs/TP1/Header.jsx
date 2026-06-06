function Header(){
    return(
        <header className="header">
            <div className="header-glow"></div>
            <div className="header-container">
                <div className="logo">
                    <div className="logo-icon">🧺</div>
                    <h1>Produits.com</h1>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#services" className="nav-link">Services</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <button className="login-btn">
                        <span>Login</span>
                    </button>
                    <button className="logout-btn">
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;