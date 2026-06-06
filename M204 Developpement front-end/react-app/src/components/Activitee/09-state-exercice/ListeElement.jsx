import React from "react";
import Element from "./Element";
 
class ListeElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livres: [
        { id: 10, titre: "POO", auteur: "RAMI", prix: 300 },
        { id: 11, titre: "JS ES6", auteur: "FAMI", prix: 230 },
        { id: 12, titre: "Algorithme", auteur: "KARIMI", prix: 330 },
        { id: 13, titre: "HTML & CSS", auteur: "RAMI", prix: 340 },
      ]
    };
  }
  supprimer(id) {
    const Livres = this.state.livres.filter(livre => livre.id !== id);
    this.setState({ livres: Livres });
  }
  render() {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.livres.map(e => (
            <Element livre={e} supprimer={() => this.supprimer(e.id)}/>
          ))}
        </tbody>
      </table>
    );
  }
}
export default ListeElement;