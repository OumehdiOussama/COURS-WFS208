import { useState } from "react";
function Formulaire(){
    const [Msg,setMsg]= useState("");
    const [Name,setName]= useState("");
    const [Date_N,setDate_N]= useState("");
    const [Ville,setVille]= useState("Casablanca");
    const [Loisir,setLoisir]= useState([]);
    
    function ListeLoisir(e){
        if(e.target.checked){
            setLoisir([...Loisir,e.target.value]);
        }else{
            setLoisir(Loisir.filter((e)=> e!==e.target.value));
        }
    }
    
    function Inscrire(){
        if(Name && Date_N && Ville && Loisir.length>0){
            setMsg(
                <div>Je suis {Name} ne le {Date_N} a {Ville} et mes loisirs sont:
                    <ul>
                        {Loisir.map((e)=><li>{e}</li>)}
                    </ul>
                </div>
            );
        }
    }
    return(
        
        <form>
            <div className="carte">
            <form>
                <h1>Inscription</h1>
                <div>
                    <label htmlFor="identifiant">L'identifiant </label>
                    <input type="text" name="identifiant" id="identifiant" value={Name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Password">Mot de passe </label>
                    <input type="password" name="Password" id="Password" />
                </div>
                <div>
                    <label htmlFor="date_N">Date de naissance </label>
                    <input type="date" name="date_N" id="date_N" onChange={(e)=>setDate_N(e.target.value)} value={Date_N} />
                </div>
                <div>
                    <label htmlFor="ville">Ville </label>
                    <select name="ville" id="ville"  onChange={(e)=>setVille(e.target.value)} >
                        <option value="Rabat">Rabat</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Marrakech">Marrakech</option>
                        <option value="Tanger">Tanger</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="genre">Genre : </label>
                    <input type="radio" name="genre" id="genre" value="Homme"/>Homme
                    <input type="radio" name="genre" id="genre" value="Femme"/>Femme
                </div>
                <div>
                    <label htmlFor="loisirs">Loisir : </label>
                    <input type="checkbox" name="loisirs" id="loisirs" value={"Sport"} onChange={e=> ListeLoisir(e)}/>Sport
                    <input type="checkbox" name="loisirs" id="loisirs" value={"Lecture"} onChange={e=> ListeLoisir(e)}/>Lecture
                    <input type="checkbox" name="loisirs" id="loisirs" value={"Musique"} onChange={e=> ListeLoisir(e)}/>Musique
                </div>
                <div>
                    <label htmlFor="photo"></label>
                    <input type="file" name="photo" id="photo" />
                </div>
                <input type="button" value="S'inscrire" onClick={Inscrire}/>
            </form>
        </div>
        <h4>{Msg}</h4>
        </form>
        
    );
}
export default Formulaire;