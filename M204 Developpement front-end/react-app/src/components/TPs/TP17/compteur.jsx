import { useDispatch, useSelector } from "react-redux";
import { incrementer, decrementer } from "./Store/actions";
import { useState } from "react";


function Compteur() {
    const [Pas,setPas]= useState(0);
    const new_val = useSelector((state) => state.count)
    const dispacth = useDispatch()

    return (
        <div>
            <input type="text" value={Pas} onChange={e=>setPas(e.target.value)} />
            <button onClick={()=>dispacth(incrementer(parseInt(Pas)))}>+</button>
            <button onClick={()=>dispacth(decrementer(parseInt(Pas)))}>-</button>
            <p>Compteur : {new_val}</p>
        </div>
    )
}
export default Compteur;