import "./components/TPs/TP6 revision 1/Exercice 1/App.css"
import json from"./components/TPs/TP6 revision 1/Exercice 1/hotels.json"
import Header from "./components/TPs/TP6 revision 1/Exercice 1/Header";
import Recherche from "./components/TPs/TP6 revision 1/Exercice 1/Recherche";
import ListHotels from "./components/TPs/TP6 revision 1/Exercice 1/ListHotels";

function App(){
    return(
        <div className="App">
            <Header/>
            <Recherche/>
            <ListHotels hotels={json.hotels} />
        </div>
    );
}
export default App;