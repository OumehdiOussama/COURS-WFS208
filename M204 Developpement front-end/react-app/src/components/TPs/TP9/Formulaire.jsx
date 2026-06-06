import { useState } from "react";

function Formulaire() {
    const [reference, setReference] = useState("");
    const [dateUtilisation, setDateUtilisation] = useState("");
    const [type, setType] = useState("");
    const [marque, setMarque] = useState("");
    const [msg, setMsg] = useState("");

    const ordi = [
        { ref: 1, type: "Portable", prix: "7490 DH", marque: "HP" },
        { ref: 2, type: "Desktop", prix: "5000 DH", marque: "DELL" },
        { ref: 3, type: "Desktop", prix: "4500 DH", marque: "HP" },
        { ref: 4, type: "Portable", prix: "8000 DH", marque: "Assus" },
        { ref: 5, type: "Portable", prix: "7490 DH", marque: "HP" },
        { ref: 6, type: "Desktop", prix: "7490 DH", marque: "Lenovo" },
        { ref: 7, type: "Portable", prix: "7490 DH", marque: "HP" }
    ];

    // Extraire marques unique
    let marques = [];

    ordi.map(e => {
        if (!marques.includes(e.marque)) {
           marques= [...marques,e.marque]

        }
        return marques;
    });


    function Confirmer() {
        if (!reference || !dateUtilisation || !type || !marque) {
            setMsg(<p style={{color:"red"}}> Veuillez remplir tous les champs.</p>);
            
        }else{
            setMsg(
            <div>
                <h3>Récapitulatif des ordinateurs</h3>
                <p><b>Référence : </b>{reference}</p>
                <p><b>Date 1ère utilisation : </b>{dateUtilisation}</p>
                <p><b>Type : </b>{type}</p>
                <p><b>Marque : </b>{marque}</p>
            </div>
        );
        }

        
    }

    return (
        <div>
            <form>
                <h1>Gestion des ordinateurs</h1>

                <table>
                    <tbody>
                        <tr>
                            <td><label>Référence :</label></td>
                            <td>
                                <input 
                                    type="text"
                                    value={reference}
                                    onChange={e => setReference(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td><label>Date de 1ère utilisation :</label></td>
                            <td>
                                <input 
                                    type="date" 
                                    value={dateUtilisation}
                                    onChange={e => setDateUtilisation(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td><label>Type :</label></td>
                            <td>
                                <input type="radio" name="t" value="Desktop" onChange={e=>setType(e.target.value)}/> Desktop<br />
                                <input type="radio" name="t" value="Portable" onChange={e=>setType(e.target.value)}/> Portable
                            </td>
                        </tr>

                        <tr>
                            <td><label>Marque :</label></td>
                            <td>
                                <select value={marque} onChange={e => setMarque(e.target.value)}>
                                    <option value="">-- Choisir --</option>
                                    {marques.map((m) => (
                                        <option value={m}>{m}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input type="button" value="Confirmer" onClick={Confirmer} />
            </form>

            <div>{msg}</div>
        </div>
    );
}

export default Formulaire;
