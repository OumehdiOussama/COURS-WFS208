import Legumes from "./componants/TPs/TP3/Exercice 2/Legumes.jsx";

function App(){
    const ListeProduits = [
        {nom:"banane",type:"fruit"},
        {nom:"orange",type:"fruit"},
        {nom:"pomme",type:"fruit"},
        {nom:"carotte",type:"legume"},
        {nom:"pomme de terre",type:"legume"},
        {nom:"navet",type:"legume"}
    ]
    return(
        <div>
            <Legumes props={ListeProduits}/>
        </div>
    );
}
export default App;