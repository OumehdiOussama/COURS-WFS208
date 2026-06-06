import { connect } from "react-redux"
import { decrementer,incrementer } from "./Store/actions"
import { useState } from "react";

function Compteur(props){

    const [pas,setPas] = useState(0)

    return (
        <div>
        
            Pas de compteur <input type="text" value={pas} onChange={(e)=>setPas(e.target.value)}/>
            <button onClick={()=>props.inc(parseInt(pas))}>+</button>
            <button onClick={()=>props.dec(parseInt(pas))}>-</button>
            <p>Compteur : {props.valeur_compteur}</p>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return {
        valeur_compteur:state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        inc: (pas)=>dispatch(incrementer(pas)),
        dec: (pas)=>dispatch(decrementer(pas))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Compteur)