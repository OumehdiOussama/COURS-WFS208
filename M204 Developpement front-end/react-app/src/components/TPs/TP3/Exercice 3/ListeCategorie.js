function ListeCategorie({produits}) {
    const categories = [];
    produits.map((e) => {
        if (!categories.includes(e.category)) {
            categories.push(e.category);
        }
    });
    return (
        <div>
            <h2>Liste des Produits</h2>
            <ul>
                {categories.map((category) => (
                    <li>{category}</li>
                ))}
            </ul>
            <br/><br/><br/>
            <h2>Liste des Produits</h2>
            <ul>
                {categories.map((category) => (
                    <li>{category}: {(produits.filter((e)=>e.category == category)).length}</li>
                ))}
            </ul>
        </div>
    );
}
export default ListeCategorie;