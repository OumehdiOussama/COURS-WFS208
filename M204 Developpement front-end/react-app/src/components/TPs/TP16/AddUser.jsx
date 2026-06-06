import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Add_user } from "./Store/actions"
import { useNavigate ,Link} from "react-router-dom";
function AddUser() {
    const count = useSelector(state=>state.users.length);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(
            Add_user({id:count+1, name:name, email:email})
        )
        navigate("/")
    }
    return (
        <form>
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label>Email : </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <Link to={"/"}>
                <button>Retour</button>
            </Link>
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default AddUser;