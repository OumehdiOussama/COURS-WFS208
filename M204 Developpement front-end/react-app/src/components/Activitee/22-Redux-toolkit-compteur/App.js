import { Provider } from 'react-redux';
import store from './components/Activitee/22-Redux-toolkit-compteur/Store/store';
import Compteur from './components/Activitee/22-Redux-toolkit/compteur';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Compteur />
            </div>
        </Provider>
    );
}
export default App;