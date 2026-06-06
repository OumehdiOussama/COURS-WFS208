import React from "react";
 
class Element extends React.Component {
  render() {
    const l = this.props.livre;
    return (
      <tr>
        <td>{l.id}</td>
        <td>{l.titre}</td>
        <td>{l.auteur}</td>
        <td>{l.prix} DH</td>
        <td>
          <button onClick={() => this.props.supprimer(l.id)}>Supprimer</button>
        </td>
      </tr>
    );
  }
}
export default Element;