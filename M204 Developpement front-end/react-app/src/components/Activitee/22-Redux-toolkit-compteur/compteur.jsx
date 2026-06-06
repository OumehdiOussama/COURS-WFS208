import { useDispatch, useSelector } from "react-redux";
import { incrementer, decrementer, reset } from "./Store/reducer";


function Compteur() {
    const new_val = useSelector((state) => state.compteur.count)
    const dispacth = useDispatch()

    return (
        <div>
            <p>Compteur : {new_val}</p>
            <button onClick={()=>dispacth(incrementer())}>Incrémenter (+1)</button>
            <button onClick={()=>dispacth(decrementer(5))}>Décrémenter (-5)</button>
            <button onClick={()=>dispacth(reset(18))}>Remise a 18</button>
        </div>
    )
}
export default Compteur;