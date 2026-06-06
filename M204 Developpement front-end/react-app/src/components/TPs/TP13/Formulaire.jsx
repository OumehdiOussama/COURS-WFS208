import { useState } from "react";
import ListePersonnes from "./ListePersonnes";

function Formulaire({ Personnes, Ajouter, Supprimer }) {
  const [ID, setID] = useState(Number(Personnes.length + 1));
  const [nom, setNom] = useState("");
  const [genre, setGenre] = useState("");
  const [loisir, setLoisir] = useState([]);

  function Loisir(e) {
    if (e.target.checked) {
      setLoisir([...loisir, e.target.value]);
    } else {
      setLoisir(loisir.filter((el) => el !== e.target.value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const N_Personne = { id: ID, nom, genre, loisir };
    Ajouter(N_Personne);
    setID(ID + 1);
    setNom("");
    setGenre("");
    setLoisir([]);
  }

  return (
    <div>
      <form>
        <h1>Formulaire</h1>
        <label htmlFor="Nom">Nom : </label>
        <input type="text" id="Nom" value={nom} onChange={e => setNom(e.target.value)} /> <br />
        
        <label>Genre : </label>
        <input type="radio" name="Genre" value="Homme" onChange={e => setGenre(e.target.value)} /> Homme
        <input type="radio" name="Genre" value="Femme" onChange={e => setGenre(e.target.value)} /> Femme <br />
             
        <label>Loisirs : </label>
        <input type="checkbox" value="Sport" onChange={Loisir} /> Sport
        <input type="checkbox" value="Lecture" onChange={Loisir} /> Lecture
        <input type="checkbox" value="Musique" onChange={Loisir} /> Musique
             
         <br />
        <input type="button" value="Ajouter" onClick={handleSubmit} />
      </form>

      <ListePersonnes Personnes={Personnes} Supprimer={Supprimer} />
    </div>
  );
}
export default Formulaire;