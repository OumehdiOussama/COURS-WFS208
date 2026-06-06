import { useState } from "react";
function Inscription() {
    let [msg,setMsg] = useState("Bien venu visiteur");
    let [txt_bottun,setTxt_bottun] = useState("Inscription");
    function modifier(){
        setMsg("Vous êtes inscrit avec succès!");
        setTxt_bottun("Merci");
    };
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={modifier}>{txt_bottun}</button>
            {/* ou bien: onClick={() => modifier()} */}
        </div>
    );
}
export default Inscription;