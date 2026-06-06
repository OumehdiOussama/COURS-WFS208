import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate,Link } from "react-router-dom";
import { Update_user } from "./Store/actions";

function UpdateUser() {
    const {id} = useParams()
    const user = useSelector(state=> state.users.find(e=> e.id===parseInt(id)));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        dispatch(Update_user({id:id, name:name, email:email}))
        navigate("/");
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            <Link to={"/"}>
                <button>Routeur</button>
            </Link>
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default UpdateUser;