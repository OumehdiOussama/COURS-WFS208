import { useDispatch, useSelector } from "react-redux";
import { Ajouter, Supprimer, Modifier, Delete } from "./Store/reducer";
import { useState } from "react";

function Voitures(){
    const [ID,setID]=useState("");
    const [Marque,setMarque]=useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [oldId, setOldId] = useState(null);
    const voitures = useSelector((state) => state.Voitures.Voitures);
    const dispatch = useDispatch();

    const handleAjouter = () => {
        if (ID && Marque) {
            if (isEditing) {
                const newData = {id: parseInt(ID), marque: Marque}
                dispatch(Modifier({oldId,newData}));
                setIsEditing(false);
                setOldId(null);
            } else {
                const  new_v = { id: parseInt(ID), marque: Marque}
                dispatch(Ajouter(new_v));
            }
            setID("");
            setMarque("");
        }
    };

    const handleModifier = (voiture) => {
        setID(voiture.id.toString());
        setMarque(voiture.marque);
        setOldId(voiture.id);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setID("");
        setMarque("");
        setIsEditing(false);
        setOldId(null);
    };

    let buttonText;
    if (isEditing) {
        buttonText = "Modifier";
    } else {
        buttonText = "Ajouter";
    }

    return(
        <div>
            <div className="">
                <input type="text" placeholder="ID" value={ID} onChange={e=>setID(e.target.value)}/>
                <input type="text" placeholder="Marque" value={Marque} onChange={e=>setMarque(e.target.value)}/>
                <button onClick={handleAjouter}>{buttonText}</button>
                {isEditing && <button onClick={handleCancel}>Annuler</button>}
            </div>
            <table>
                <tr> <th>ID</th> <th>Marque</th>  <th>Actions</th> </tr>
                {voitures.map(e=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.marque}</td>
                        <td>
                            <button onClick={() => {
                                if (window.confirm("Supprimer cette voiture ?")) {
                                    dispatch(Supprimer(e.id));
                                }
                            }}>Supprimer</button>
                            <button onClick={()=>handleModifier(e)}>Modifier</button>
                            <button onClick={()=>dispatch(Delete(e.id))}>Delete</button>
                        </td>
                    </tr>
                )}
            </table>
        </div>);}
export default Voitures;