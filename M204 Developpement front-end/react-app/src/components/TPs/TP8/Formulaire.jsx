import {useState} from "react";

function Formulaire() {
    const logins =[
        { username:"user1", password:"pass1"},
        { username:"user2", password:"pass2"}
    ];
    const errors ={
        uname:"Votre identifiant est incorrect !",
        upass:"Votre mot de passe est incorrect !"
    };
    const [Id,setId] = useState("");
    const [Password,setPassword] = useState("");
    const [MsgId,setMsgId] = useState("");
    const [MsgPassword,setMsgPassword] = useState("");
    const [MsgValide,setMsgValide] = useState("");
    let v_id = false;
    let v_pass = false;

    function Verifier() {
        if(Id && Password){
            const user = logins.find((el) =>el.username === Id);
            if (!user){
                setMsgId(errors.uname);
                setId("");
                setPassword("");
                setMsgPassword("")
            }else{
                v_id = true;
                setMsgId("");
                if (user.password !== Password) {
                    setMsgPassword(errors.upass);
                }else{
                    v_pass = true;
                    setMsgPassword("");
                }
            }

            if(v_id && v_pass){
                setMsgValide("Inscription valider !")
            }else{
                setMsgValide("");
            }
        }
    }
    return (
        <div className="carte">
            <form>
                <h1>Connexion</h1>
                <div>
                <label htmlFor="identifiant">Identifiant </label>
                <input type="text" id="identifiant" value={Id} onChange={e=>setId(e.target.value)}/>
                <div className="error">{MsgId}</div>
                </div>
                <div>
                <label htmlFor="password">Mot de passe </label>
                <input type="password" id="password" value={Password} onChange={e=>setPassword(e.target.value)}/>
                <div className="error">{MsgPassword}</div>
                </div>
                <input type="button" value="Se connecter" onClick={Verifier} />
            </form>
            <div className="Valide">{MsgValide}</div>
        </div>
    );
}
export default Formulaire;