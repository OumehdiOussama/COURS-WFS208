import { useDispatch, useSelector } from "react-redux";
import { incrementer, decrementer, reset } from "./Store/actionCreator";


function Compteur() {
    const count_val = useSelector(state => state.count)
    const dispacth = useDispatch()

    return (
        <div>
            <p>Compteur : {count_val}</p>
            <button onClick={()=>dispacth(incrementer())}>Incrémenter (+1)</button>
            <button onClick={()=>dispacth(decrementer(5))}>Décrémenter (-5)</button>
            <button onClick={()=>dispacth(reset(18))}>Remise a 18</button>
        </div>
    )
}
export default Compteur;