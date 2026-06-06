import { Link } from "react-router-dom";
function Voiture({F}){
    return(
        <tr>
            <td>{F.id}</td>
            <td>{F.Titre}</td>
            <td>{F.Type}</td>
            <td>{F.Prix}</td>
            <td>{F.Date_debut}</td>
            <td>{F.Formateur}</td>
            <td>
                <Link to={`/Inscrire/${F.id}`}><button>S'inscrire</button></Link>
            </td>
        </tr>
    );
}
export default Voiture;