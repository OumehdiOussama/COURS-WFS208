import { useParams,Link } from "react-router-dom";
import { useState } from "react";

function FormulaireInscription({Formations,Inscriptions,setInscriptions}){
    const {id} = useParams();
    const F = Formations.find(e=>e.id===parseInt(id)); 
    const [Nom,setNom]=useState("");
    const [Prenom,setPrenom]=useState("");
    const [Email,setEmail]=useState("");
    const [Telephone,setTelephone]=useState("");

    function Inscrire(e){
        e.preventDefault();
        const nouvelleInscription={
            id: Inscriptions.length>0 ? Inscriptions[Inscriptions.length-1].id +1 : 1,
            FormationId: F.id,
            Nom: Nom,
            Prenom: Prenom,
            Email: Email,
            Telephone: Telephone
        };
        setInscriptions([...Inscriptions,nouvelleInscription]);
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
    }
    return(
        <div>
            <h1>S'inscrire à la formation : <span>{F.Titre}</span></h1>
            <form onSubmit={Inscrire}>
                <table width={200}>
                    <tr>
                        <td><label htmlFor="formation">Formation</label></td>
                        <td><input type="text" id="formation" value={F.Titre} disabled /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Nom">Nom</label></td>
                        <td><input type="text" id="Nom" value={Nom} onChange={(e)=>setNom(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Prenom">Prenom</label></td>
                        <td><input type="text" id="Prenom" value={Prenom} onChange={(e)=>setPrenom(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Email">Email</label></td>
                        <td><input type="email" id="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Telephone">Telephone</label></td>
                        <td><input type="tel" id="Telephone" value={Telephone} onChange={(e)=>setTelephone(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><button type="submit">S'inscrire</button></td>
                        <td><Link to={"/"}><button>Retour</button></Link></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
export default FormulaireInscription;