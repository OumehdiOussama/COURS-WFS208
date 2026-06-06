import { useState } from "react";
import { Link,useParams } from "react-router-dom";

function Editer({Produits,Modifier}) {
    const {id} = useParams();
    const Produit = Produits.find(e=>e.id === parseInt(id));

    const [Nom,setNom]= useState(Produit.nom);
    const [Prix,setPrix]= useState(Produit.prix);
    const [Categorie,setCategorie] = useState(Produit.categorie);

    function Modification(e){
        e.preventDefault();
        const M_Produit = { id:Produit.id, nom:Nom, prix:Prix, categorie:Categorie};
        Modifier(Produit.id,M_Produit);
        alert("La modification est valider");
    }
     
    return(
        <div>
            <h1>Modifier un produit</h1>
            <form>
                Nom:<input type="text" value={Nom} onChange={e=>setNom(e.target.value)}/>
                Prix:<input type="number" value={Prix} onChange={e=>setPrix(e.target.value)}/>
                Categorie:<input type="text" value={Categorie} onChange={e=>setCategorie(e.target.value)} />
                <button type="button" onClick={Modification}>Modifier</button>
            </form>
            <Link to="/">
                <button>Retour</button>
            </Link>
        </div>
    );
}
export default Editer;