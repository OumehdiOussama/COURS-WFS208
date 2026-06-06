import { Provider } from 'react-redux';
import store from './components/Correction-control3/Exercice1/store';
import VoteApp from './components/Correction-control3/Exercice1/voteApp';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <VoteApp />
            </div>
        </Provider>
    );
}
export default App;