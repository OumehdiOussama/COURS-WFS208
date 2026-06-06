import "./components/TPs/TP1/style.css"
import Header from "./components/TPs/TP1/Header";
import ListeProduits from "./components/TPs/TP1/ListeProduits";
import AjouterProduit from "./components/TPs/TP1/AjouterProduit";
import Footer from "./components/TPs/TP1/Footer";
function App() {
  return (
    <div className="div">
      <Header/>
      <div>
        <ListeProduits/>
        <AjouterProduit/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;