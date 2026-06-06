function Produits({name,price,image}){
    return(
            <div className="div">
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <p>{price} DH</p>
                <button>Acheter</button>
            </div>
        );
}
export default Produits;