import { Provider } from 'react-redux';
import store from './components/TPs/TP21/Store/store';
import "./components/TPs/TP21/Styles/app.css"
import NavBar from './components/TPs/TP21/NavBar';
import VolsList from "./components/TPs/TP21/VolsList";
import VolsDetails from "./components/TPs/TP21/VolsDetails";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <NavBar/>
                <div className="Contenu">
                    <VolsList/>
                    <VolsDetails/>
                </div>
            </div>
        </Provider>
    );
}
export default App;