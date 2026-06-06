import { useState } from "react";
import Panier from "./Panier";
import Produit from "./Produit";

function ListeProduits() {
    const infos = [
        { id: 1, name: "Pomme", prix: 15, quantite: 1 },
        { id: 2, name: "Banana", prix: 13, quantite: 1 },
        { id: 3, name: "Orange", prix: 7, quantite: 1 }
    ];
    const [Produits] = useState(infos);
    const [PanierListe, setPanierListe] = useState([]);

    function Ajouter(p) {
        const Article = PanierListe.find(e=>e.id===p.id);
        if(!Article){
            setPanierListe([...PanierListe,p]);
        }
    }
    function Supprimer(ID){
        setPanierListe(PanierListe.filter(e=>e.id!== ID))
    }
    function Moin(ID,Q){
       if(Q>1){
            setPanierListe(PanierListe.map(e=>{
                if(e.id===ID){
                    return {...e,quantite:Q-1}
                }
                return e;
            }))
        }else{
            Supprimer(ID);
        }
    }

    function Plus(ID,Q){
        setPanierListe(PanierListe.map(e=>{
            if(e.id===ID){
                return {...e,quantite:Q+1}
            }
            return e;
        }))
    }

    return (
        <div className="ListeProduits">
            <div className="Produits">
                {Produits.map((e) => 
                    <Produit key={e.id} P={e} Ajouter={Ajouter} />
                )}
            </div>
            <div className="Panier">
                <Panier L={PanierListe} Supprimer={Supprimer} Moin={Moin} Plus={Plus}/>
            </div>
        </div>
    );
}
export default ListeProduits;