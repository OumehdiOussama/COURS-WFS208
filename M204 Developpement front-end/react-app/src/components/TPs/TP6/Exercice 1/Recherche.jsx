

function Recherche(){

    
    return(
        <div className="Recherche">
            <h2>Trouvez votre prochaine sejour</h2>
            <p>Recherche des offres sur des hotels Hebergement independants et plus</p>
            <form className="carte-recherche">
                <input type="text" className="input-recherche" placeholder="Ou allez-vous (ville)?" />
                <button>Rechercher</button>
            </form>
        </div>
    );
}
export default Recherche;