import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function VoirDetails({Formations}){
    const {id} = useParams();
    const F= Formations.find(e=>e.id===parseInt(id));
    const [ID,setId]=useState(F.id);
    const [Titre,setTitre]=useState(F.Titre);
    const [Type,setType]=useState(F.Type);
    const [Prix,setPrix]=useState(F.Prix);
    const [Date_debut,setDate_debut]=useState(F.Date_debut);
    const [Date_fin,setDate_fin]=useState(F.Date_fin);
    const [Formateur,setFormateur]=useState(F.Formateur);


    return(
        <div>
            
            <br />
            <h1>Details Formation</h1>
            <form>
                <table>
                        <tr>
                            <input 
                                type="number" 
                                name="id"
                                value={ID} 
                                disabled
                                onChange={e=>setId(e.target.value)}
                            />
                        </tr>
                        <tr>
                            <input 
                                type="text" 
                                name="titre" 
                                value={Titre}
                                disabled
                                onChange={e=>setTitre(e.target.value)}
                            />
                        </tr>
                        <tr>
                            <input 
                                type="text"
                                name="type"
                                value={Type}
                                disabled
                                onChange={e=>setType(e.target.value)}
                            />
                        </tr>
                        <tr>
                            <input 
                                type="text" 
                                name="prix"
                                value={Prix}
                                disabled 
                                onChange={e=>setPrix(e.target.value)}
                            />
                        </tr>
                        <tr>
                            <input 
                                type="text" 
                                name="Date_debut" 
                                value={Date_debut} 
                                disabled
                                onChange={e=>setDate_debut(e.target.value)}
                            />
                        </tr>
                        <tr>
                            
                            <input 
                                type="text" 
                                name="Date_fin" 
                                value={Date_fin} 
                                disabled
                                onChange={e=>setDate_fin(e.target.value)}
                            />
                        </tr>
                        <tr>
                            <input type="text" 
                                name="formateur"  
                                value={Formateur}
                                disabled
                                onChange={e=> setFormateur(e.target.value)}/>
                        </tr>
                        <tr>
                            <Link to={"/"}><button>Rotour</button></Link>
                        </tr>
                </table>
            </form>
        </div>
    );
}
export default VoirDetails;