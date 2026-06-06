function Panier({L,Supprimer,Moin,Plus}){

    let Message = <div></div>;
    if(L.length === 0){
        Message = <p className="message">Aucune produit ajouter !</p> 
    }else{
        Message = <ul>
            {L.map(e=>
                <li>
                    <h4>{e.name}</h4>
                    <div className="Actions"> 
                        <button className="button-plus" onClick={()=>Plus(e.id,e.quantite)}>+</button>
                        <p className="quantite">{e.quantite}</p>
                        <button className="button-moin" onClick={()=>Moin(e.id,e.quantite)}>-</button>
                        <button className="button-Supprimer" onClick={()=>Supprimer(e.id)}>Supprimer</button>
                    </div>
                </li>
            )}
        </ul>
    }

    return (
        <div className="Contenu-Panier">
            <h1>Panier</h1>
            <h4 className="T-article">Total Articles : {L.reduce((T,e)=> T+=e.quantite,0)}</h4>
            {Message}
            <h3>
                Totale de toutes les produits:  
                <span> {L.reduce((T,e)=>T+= e.quantite*e.prix,0)} DH</span>
            </h3>
        </div>
    );
}
export default Panier;