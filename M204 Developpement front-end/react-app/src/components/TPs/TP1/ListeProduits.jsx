function ListeProduits (){
    return(
        <div className="ListeProduits">
            <h1>Liste de produits</h1>
            <table border={1}>
                <thead>
                    <tr> <th>PRODUIT</th> <th>TARIF</th> <th>DELETE</th> </tr>
                </thead>
                <tbody>
                    <tr> <td>ordinateur</td>  <td>1000e</td>  <td><button>Delete</button></td> </tr>
                    <tr> <td>clavier</td>  <td>30e</td>  <td><button>Delete</button></td> </tr>
                    <tr> <td>Fauteuil</td>  <td>250e</td>  <td><button>Delete</button></td> </tr>
                </tbody>
            </table>
        </div>
    );
}
export default ListeProduits;