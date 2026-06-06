import axios from "axios";
import { useEffect, useState } from "react";

function Formulaire() {
    const [ID,setID] = useState("");
    const [Users,setUsers] = useState([]);
    const [Resultat,setResultat] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => setUsers(res.data));
    },[]);

    function Afficher(e){
        e.preventDefault();
        let User =Users.find(u => u.id === Number(ID));
        if(User){
            setResultat(
                <div> 
                    <p><b>ID:</b> {User.id}</p>
                    <p><b>Name:</b> {User.name}</p>
                    <p><b>Username:</b> {User.username}</p>
                    <p><b>Email:</b> {User.email}</p>
                </div>
            );
        }else{
            setResultat("Aucune user se trouve !");
        }
    }

    return (
        <div>
            <form onSubmit={Afficher}>
                <h1>Recherche utilisateur :</h1>
                <label htmlFor="ID">ID </label>
                <input type="number" name="ID" id="ID" value={ID} onChange={e=>setID(e.target.value)} />
                <button type="submit">Rechercher</button>
            </form>
            {Resultat}
        </div>
    );
}

export default Formulaire;
