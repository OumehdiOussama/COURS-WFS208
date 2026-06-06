import "./components/TPs/TP22-redux-toolkit/style.css"
import { Provider } from 'react-redux';
import store from './components/TPs/TP22-redux-toolkit/Store/store';
import Voitures from './components/TPs/TP22-redux-toolkit/Voitures';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Voitures />
            </div>
        </Provider>
    );
}
export default App;