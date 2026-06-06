import "./Styles/VolsList.css";
import royal_air_maroc from "./../../../../src/components/TPs/TP21/images/royal_air_maroc.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setVols } from "./Store/actions";


function VolsList(){
    const dispatch = useDispatch();
    const Vols = useSelector(state => state.Vols);

    useEffect(() => {
        axios.get('http://localhost:7000/vols')
            .then(res => {
                dispatch(setVols(res.data));
            })
    }, []);


    return(
        <div className="VolsListe">
            <h1 className="Titre-2 Titreliste">Liste des vols</h1>
            <div className="Rechercher">
                <div className="DateDebut">
                    <label htmlFor="">Date de debut:</label><br />
                    <input type="date" name="" id="" />
                </div>
                <div className="DateFin">
                    <label htmlFor="">Date de debut:</label><br />
                    <input type="date" name="" id="" />
                </div>
                <button className="btn-recherche">Rechercher</button>
            </div>
            <div className="Items">
                {Vols.map(e => (
                    <div className="Item">
                        <img className="image-item" src={royal_air_maroc} alt="Avion" />
                        <div className="Villes">
                            {e.villeDepart} - {e.villeArrivee}
                        </div>
                        <p>Prix: {e.prix} DH</p>
                        <p>Date: {e.date}</p>
                        <button className="btn-reserver">
                            Reserver
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default VolsList;