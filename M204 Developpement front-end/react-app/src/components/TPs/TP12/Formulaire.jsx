import { useState } from "react";
import {Link} from "react-router-dom";

function Formulaire({Produits,Supprimer,Filter}) {
    const [Filter_nom,setFilter_nom] = useState("");
    return(
        <div>
            <h1>Gestion des produits</h1>
            <div>
                <Link to={`/Ajouter`}>
                    <button>Ajouter un produit</button>
                </Link>
            </div>
            <br />
            <div>
                <label htmlFor="recherche">Chercher un produit par le nom: </label>
                <input type="text" id="recherche" value={Filter_nom} onChange={e=>setFilter_nom(e.target.value)} /><span> </span>
                <button onClick={()=>Filter(Filter_nom)}>Filter</button>
            </div>
            <br />
            <table border={1} width={600}>
                <tr>
                    <th>ID</th> <th>Nom</th> <th>Prix</th> <th>Categorie</th> <th>Action</th>
                </tr>
                {Produits.map(e=> 
                    <tr>
                        <td align="center">{e.id}</td> 
                        <td align="center">{e.nom}</td> 
                        <td align="center">{e.prix}</td> 
                        <td align="center">{e.categorie}</td> 
                        <td width={100}>
                            <Link to={`/Editer/${e.id}`}>
                                <button>Editer</button>
                            </Link>
                            <button onClick={()=>Supprimer(e.id)}>Supprimer</button>
                        </td>
                    </tr>
                )}
            </table>
            
        </div>
    );
}
export default Formulaire;