import { Link } from "react-router-dom";

function ListePersonnes({ Personnes, Supprimer }) {
  return (
    <ul>
      {Personnes.map(e => (
        <li>
          {e.nom} - {e.genre} - {e.loisir.join(", ")} 
          <button onClick={() => Supprimer(e.id)}>Supprimer</button>
          <Link to={`/Editer/${e.id}`}>
            <button>Modifier</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default ListePersonnes;