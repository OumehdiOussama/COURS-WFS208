import "./App.css";
import "./index.css";
import ListeElement from "./components/Activitee/12-useState-liste/ListeElement";
import "./componants/Activitee/12-useState-liste/style.css";
function App() {
  const Liste = [
    {nom: "banane", type: "fruit"},
    {nom: "pomme", type: "fruit"},
    {nom: "carotte", type: "legume"},
    {nom: "brocoli", type: "legume"},
  ]
  return (

    <div>
      <ListeElement props={Liste} />
    </div>
  );
}
export default App;