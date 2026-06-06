import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Editer from "./Editer"; 
import AjouterProduit from "./Ajouter";
import Formulaire from "./Formulaire";


function ComposantPrincipal(){
    const liste = [
            {id:1, nom:"Laptop", prix:4000, categorie:"electronique"},
            {id:2, nom:"Telephone", prix:2000, categorie:"electronique"},
            {id:3, nom:"Ordinateur", prix:5000, categorie:"electronique"}
        ];
    const [Produits,setProduits] = useState(liste);

    function Supprimer(id){
        setProduits(Produits.filter(e=>e.id !== id));
    }
    function Ajouter(N_Produit){
        setProduits([...Produits,N_Produit]);
    }
    function Filter(nom){
        if(nom){
            setProduits(Produits.filter(e=>e.nom === nom));
        }
    }
    function Modifier(id,N_Produit) {
        setProduits(Produits.map((e) => (e.id === id ? N_Produit : e)));
    }

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Formulaire Produits={Produits}  Supprimer={Supprimer} Filter={Filter} />} />
                    <Route path="/Ajouter"  element={<AjouterProduit Ajouter={Ajouter} />}/>
                    <Route path="/Editer/:id" element={<Editer Produits={Produits} Modifier={Modifier} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default ComposantPrincipal;