import { Provider } from 'react-redux';
import store from './components/TPs/TP20-redux-hooks/Store/store';
import Compteur from './components/TPs/TP20-redux-hooks/Compteur';
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