import { useState } from "react";
function Formulaire() {
  const [nom, setNom] = useState("");
  const [msg, setMsg] = useState("");
  function handleSubmit() {
    setMsg("Bonjour "+nom);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}></form>

      <input type="text" onChange={(e)=>setNom(e.target.value)} value={nom}/>

      <button onClick={handleSubmit}>Afficher</button>
      
      <p>{msg}</p>
    </div>
  );
}
export default Formulaire;