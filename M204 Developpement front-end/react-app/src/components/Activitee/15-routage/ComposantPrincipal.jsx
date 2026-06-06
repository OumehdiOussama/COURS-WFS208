import { Routes,Route,Link} from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Home from "./home";
import Formulaire from "./Formulaire";

function CmposantPrincipal(){
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Formulaire" element={<Formulaire/>}></Route>
            </Routes>
        </div>
    );
}
export default CmposantPrincipal;