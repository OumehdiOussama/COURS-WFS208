import { useState } from "react";
import { Link } from "react-router-dom";
import Formation from "./Formation";

function ListeFromations({Formations}){
    const [Titre,setName]=useState("");
    
    const recherche= Formations.filter(e=>e.Titre.toLowerCase().includes(Titre.toLowerCase()))
    return(
        <div>
            <div className="Header">
                <h3><Link to={"/"}><button>Accueil</button></Link   ></h3>
                <h3 className="Ajouter-link"><Link to={"/Ajouter"}><button>Ajouter Formation</button></Link></h3>
                <h3><Link to={"/ListeInscriptions"}><button>Liste Inscriptions</button></Link></h3>
                <label className="Recherche" htmlFor="name">Recherche: 
                    <input type="text" name="name" id="name" onChange={e=>setName(e.target.value)}/>
                </label>
            </div>
            
            <br />
            <h1>Liste des Formations</h1>
            <table border={1} cellSpacing={0} cellPadding={2}>
                <tr>
                    <th>Titre</th> 
                    <th>Type</th> 
                    <th>Prix</th> 
                    <th>Date de Debut</th> 
                    <th>Date de Fin</th>
                    <th>Formateur</th>
                    <th >Action</th>
                </tr>
                {recherche.map(e=><Formation F={e}/>)}
            </table>
        </div>
        
    );
}
export default ListeFromations;