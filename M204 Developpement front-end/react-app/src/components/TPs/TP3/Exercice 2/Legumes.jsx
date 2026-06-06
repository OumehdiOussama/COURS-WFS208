function Legumes({ListeProduits}){
    const legumes = ListeProduits.filter(produit => produit.type === "legume");
    return(
        <div>
            <h2>{legumes.length} legumes:</h2>
            <ul>
                {legumes.map(e =><li>{e.nom}</li>)}
            </ul>
        </div>
    );
}
export default Legumes;