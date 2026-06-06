import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./components/TPs/TP19-redux/Store/store";
import AddUser from "./components/TPs/TP19-redux/AddUser";
import UpdateUser from "./components/TPs/TP19-redux/UpdateUser";
import UsersList from "./components/TPs/TP19-redux/UsersList";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<UsersList />} />
                        <Route path="/AddUser" element={<AddUser />} />
                        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}
export default App;