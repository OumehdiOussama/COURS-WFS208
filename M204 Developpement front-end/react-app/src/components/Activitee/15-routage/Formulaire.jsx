import {useState} from "react";

function Formulaire() {
    const list = [
        {id:1, nom:"Laptop", prix:4000, categorie:"electronique"},
        {id:2, nom:"Telephone", prix:2000, categorie:"electronique"},
        {id:3, nom:"Ordinateur", prix:5000, categorie:"electronique"}
    ];

    const [produits,setProduits] = useState(list);
    const [Filter_nom,setFilter_nom] = useState([]);
    const [ID, setId] =useState("");
    const [Nom, setNom] = useState("");
    const [Prix, setPrix] = useState("");
    const [Categorie, setCategorie] = useState("");

    function Supprimer(id){
        setProduits(produits.filter(e=>e.id !== id));
    }
    function Ajouter(e){
        e.preventDefault();
        if(ID && Nom && Prix && Categorie){
            setProduits([...produits,{id:ID, nom:Nom, prix:Prix, categorie:Categorie}]);
            setId("");
            setNom("");
            setPrix("");
            setCategorie("");
        }
    }
    function Filter(nom){
        if(nom){
            setProduits(produits.filter(e=>e.nom === nom));
        }
    }
    return(
        <div>
            <h1 align="center">Gestion des produits</h1>
            <div>
                <label htmlFor="recherche">Chercher un produit par le nom: </label>
                <input type="text" id="recherche" value={Filter_nom} onChange={e=>setFilter_nom(e.target.value)} /><span> </span>
                <button onClick={()=>Filter(Filter_nom)}>Filter</button>
            </div><br />
            <table border={1} width={600}>
                <tr>
                    <th>ID</th> <th>Nom</th> <th>Prix</th> <th>Categorie</th> <th>Action</th>
                </tr>
                {produits.map(e=> 
                    <tr>
                        <td align="center">{e.id}</td> 
                        <td align="center">{e.nom}</td> 
                        <td align="center">{e.prix}</td> 
                        <td align="center">{e.categorie}</td> 
                        <td width={40} align="center">
                            <button onClick={()=>Supprimer(e.id)}>Supprimer</button>
                        </td>
                    </tr>
                )}
            </table>
            <div>
                <h2>Ajouter un nouveau produit:</h2>
                <form onSubmit={Ajouter}>
                    <label htmlFor="id">ID: </label>
                    <input type="number" id="id" value={ID} onChange={e=>setId(e.target.value)} />
                    <label htmlFor="nom">Nom: </label>
                    <input type="text" id="nom" value={Nom} onChange={e =>setNom(e.target.value)} />
                    <label htmlFor="prix"> Prix: </label>
                    <input type="number" id="prix" value={Prix} onChange={e=>setPrix(e.target.value)} />
                    <label htmlFor="categorie"> Categorie: </label>
                    <input type="text" id="categorie" value={Categorie} onChange={e=>setCategorie(e.target.value)} /><span> </span>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    );
}
export default Formulaire;