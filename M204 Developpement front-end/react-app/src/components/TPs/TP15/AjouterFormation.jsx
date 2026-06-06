import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";

function AjouterFormation({Voitures,setVoitures}){
    const [ID,setId]=useState("");
    const [Name,setName]=useState("");
    const [Username,setUsername]=useState("");
    const [Email,setEmail]=useState("");
    const [Phone,setPhone]=useState("");
    const navigate= useNavigate();

    function Ajouter(e){
        e.preventDefault();
        const N_Formation ={
            id: ID,
            name: Name,
            username:Username,
            email:Email,
            phone:Phone
        }
        setVoitures([...Voitures,N_Formation]);
        navigate("/");
    }
    return(
        <div>
            
            <br />
            <h1>Ajouter Formation</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <input 
                                type="number" 
                                name="id" 
                                placeholder="ID"
                                value={ID} 
                                onChange={e=>setId(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="name" 
                                value={Name} 
                                onChange={e=>setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="name" 
                                value={Username} 
                                onChange={e=>setUsername(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="email" 
                                name="Email" 
                                placeholder="Email" 
                                value={Email} 
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                            <input 
                                type="text" 
                                name="Phone" 
                                placeholder="Phone"
                                value={Phone} 
                                onChange={e=>setPhone(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={Ajouter}>Ajouter</button>
                            <Link to={"/"}><button>Rotour</button></Link>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
export default AjouterFormation;