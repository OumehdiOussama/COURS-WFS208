// VoteApp.js
import { useDispatch, useSelector } from "react-redux";
import { VOTE, RESET } from "./actionsCreator";

function VoteApp() {
  const votes = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Systeme de votes</h1>
      <button onClick={() => dispatch(VOTE("Jamal"))}>Vote Jamal</button>
      <button onClick={() => dispatch(VOTE("Ali"))}>Vote Ali</button>
      <button onClick={() => dispatch(VOTE("Ahmed"))}>Vote Ahmed</button>
      <br />

      <h3>Resultats :</h3>
      <ul>
        <li>Jamal : {votes.Jamal} votes</li>
        <li>Ali : {votes.Ali} votes</li>
        <li>Ahmed : {votes.Ahmed} votes</li>
      </ul>

      <button onClick={() => dispatch(RESET())}>
        Reinitialiser
      </button>
    </div>
  );
}

export default VoteApp;
