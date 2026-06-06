import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function Editer({ Personnes, Modifier }) {
  const  {id}  = useParams();
  const p = Personnes.find((p) => p.id === parseInt(id));

  const [nom, setNom] = useState(p.nom);
  const [genre, setGenre] = useState(p.genre);
  const [loisir, setLoisir] = useState(p.loisir);

  function Loisirs(e) {
    if (e.target.checked) {
      setLoisir([...loisir, e.target.value]);
    } else {
      setLoisir(loisir.filter((ele) => ele !== e.target.value));
    }
  }

  function Modification(e) {
    e.preventDefault();
    const M_Personne = { id: p.id, nom, genre, loisir };
    Modifier(p.id, M_Personne);
    alert("La modification est valider");
  }

  return (
    <div>
      <h2>Modifier la personne</h2>
      <form>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" value={nom} onChange={e => setNom(e.target.value)} />
        </div>
        <div>
          <label>Genre :</label>
          <input type="radio" name="genre" value={"Homme"} checked={genre === "Homme"} onChange={e=>setGenre(e.target.value)} /> Homme
          <input type="radio" name="genre" value={"Femme"} checked={genre === "Femme"} onChange={e=>setGenre(e.target.value)} /> Femme
        </div>
        <div>
          <label>Loisirs :</label>
          <input type="checkbox" value="Sport" checked={loisir.find(e=> e === "Sport")} onChange={Loisirs} /> Sport
          <input type="checkbox" value="Musique" checked={loisir.find(e=> e === "Musique")} onChange={Loisirs} /> Musique
          <input type="checkbox" value="Lecture" checked={loisir.find(e=> e === "Lecture")} onChange={Loisirs} /> Lecture
        </div>
        <div>
          <input type="submit" value="Modifier" onClick={Modification} />
        </div>
        <br />
        <Link to="/"><input type="button" value="Retour" /></Link>
      </form>
    </div>
  );
}

export default Editer;
