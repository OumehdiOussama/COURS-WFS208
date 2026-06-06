import { BrowserRouter ,Routes,Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./components/TPs/TP18/style.css";
import ListeFromations from "./components/TPs/TP18/ListeInscriptions";
import FormulaireInscription from "./components/TPs/TP18/FormulaireInscription";
import ListeFormations from "./components/TPs/TP18/ListeFormations";
import AjouterFormation from "./components/TPs/TP18/AjouterFormation";
import VoirDetails from "./components/TPs/TP18/VoirDetails";

function App() {
    const [Formations,setFormations]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/Formations")
        .then((res)=>setFormations(res.data));
    }
    ,[]);

    const [Inscriptions,setInscriptions]= useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ListeFormations Formations={Formations} setFormations={setFormations}/>} />
                <Route path="/ListeInscriptions" element={<ListeFromations Formations={Formations} setFormations={setFormations} />} />
                <Route path="/Inscrire/:id" element={<FormulaireInscription Formations={Formations} Inscriptions={Inscriptions} setInscriptions={setInscriptions} />} />
                <Route path="/Ajouter" element={<AjouterFormation Formations={Formations} setFormations={setFormations} />} />
                <Route path="Details/:id" element={<VoirDetails Formations={Formations} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;