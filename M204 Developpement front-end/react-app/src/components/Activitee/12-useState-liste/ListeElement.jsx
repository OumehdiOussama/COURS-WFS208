import { useState } from "react";
function Liste({props}) {
    let [texte,setTexte]=useState("");
    let [Liste,setListe]=useState(props);
    function rechercher() {
        if (texte==="fruit") {
            setListe(props.filter(e=>e.type==="fruit"));
        } else if (texte==="legume") {
            setListe(props.filter(e=>e.type==="legume"));
        } else {
            setListe(props);
        }
    }
    return (
        <div className="div">
            <h1>Bienvenu</h1>
            <h2>Recherche des fruits et legumes</h2>
            <input type="text" value={texte} onChange={(e) => setTexte(e.target.value)}/>
            <button onClick={rechercher}>Rechercher</button>
            <h3>Resultat :</h3>
            <ul>
                {Liste.map(e=> 
                    <li>{e.nom}</li>
                )}
            </ul>
        </div>
    );
}
export default Liste;