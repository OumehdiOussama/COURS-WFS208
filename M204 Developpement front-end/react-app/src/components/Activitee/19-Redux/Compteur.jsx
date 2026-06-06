import { useDispatch,useSelector } from "react-redux";
import { incrementer,decrementer,reset } from "./actionCreator";
export default function Compteur(){
    // recuperation de state
    const new_val = useSelector((state)=>state.count)
    // Envoi des actions
    const dispatch = useDispatch()
    return(
        <div>
            <p>Compteur: {new_val}</p>
            <button onClick={()=>dispatch(incrementer())}>Incrementer</button>
            <button onClick={()=>dispatch(decrementer(5))}>Decrementer</button>
            <button onClick={()=>dispatch(reset(10))}>Remis a 10</button>
        </div>
    )
}
