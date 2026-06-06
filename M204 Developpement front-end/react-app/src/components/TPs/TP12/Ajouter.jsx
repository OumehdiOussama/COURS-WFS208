import { useState } from "react";
import { Link } from "react-router-dom";
function AjouterProduit({Ajouter}){
    
    const [ID,setId] =useState("");
    const [Nom,setNom] = useState("");
    const [Prix,setPrix] = useState("");
    const [Categorie,setCategorie] = useState("");

    function Submit(e){
        e.preventDefault();
        if(ID && Nom && Prix && Categorie){
            const N_Produit = {id:parseInt(ID), nom:Nom, prix:Prix, categorie:Categorie};
            Ajouter(N_Produit);
            alert("Ajouter est valider");
            setId("");
            setNom("");
            setPrix("");
            setCategorie("");
        }
    }
    return(
        <div>
            <h2>Ajouter un nouveau produit:</h2>
            <form>
                <label htmlFor="id">ID: </label>
                <input type="number" id="id" value={ID} onChange={e=>setId(e.target.value)} />
                <label htmlFor="nom">Nom: </label>
                <input type="text" id="nom" value={Nom} onChange={e =>setNom(e.target.value)} />
                <label htmlFor="prix"> Prix: </label>
                <input type="number" id="prix" value={Prix} onChange={e=>setPrix(e.target.value)} />
                <label htmlFor="categorie"> Categorie: </label>
                <input type="text" id="categorie" value={Categorie} onChange={e=>setCategorie(e.target.value)} />
                <button type="button" onClick={Submit}>Ajouter</button>
                <br />
                <Link to={`/`}>
                    <button>Retour</button>
                </Link>
            </form>
        </div>
    );
}
export default AjouterProduit;