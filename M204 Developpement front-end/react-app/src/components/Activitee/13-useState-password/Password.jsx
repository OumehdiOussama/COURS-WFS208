import { useState } from "react";

function Password() {
    let [msg,setMsg]= useState("");

    function verifier(texte){
        if(texte.length<4){
            setMsg("Le mot de passe doit avoir au moins 4 caracteres");
        }else{
            setMsg("Mot de passe valide");
        }
    }
    return (
        <div>
            <label>Password :</label>
            <input type="password" onChange={e=>{verifier(e.target.value);}}/>
            <span>{msg}</span>
        </div>
    );
}
export default Password;