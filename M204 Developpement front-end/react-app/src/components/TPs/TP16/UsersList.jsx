import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {Delete_user} from "./Store/actions"
function UsersList() {

    const users = useSelector((state)=>state.users);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(Delete_user(id))
    }
    return (
        <div>
            <p>
                <Link to="/AddUser">
                    <button>Add user</button>
                </Link>
            </p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((e)=> (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>
                                <Link to={`/UpdateUser/${e.id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UsersList;