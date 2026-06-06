function Produit({P,Ajouter}){
    return (
        <div className="Produit">
            <h3>{P.name}</h3>
            <p>Prix: {P.prix} DH</p>
            <button className="button-Ajouter" onClick={()=>Ajouter(P)}>Ajouter au Panier</button>
        </div>
    );
}
export default Produit;