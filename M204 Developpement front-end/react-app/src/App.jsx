import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Formulaire from './components/TPs/TP13/Formulaire';
import Editer from './components/TPs/TP13/Editer';

export default function App() {
  const Users= [
    { id: 1, nom: "Sara", genre: "Femme", loisir: ["Sport", "Musique", "Lecture"] },
    { id: 2, nom: "Youssef", genre: "Homme", loisir: ["Sport", "Musique", "Lecture"] },
    { id: 3, nom: "Imane", genre: "Femme", loisir: ["Sport", "Musique", "Lecture"] },
    { id: 4, nom: "Rachid", genre: "Homme", loisir: ["Sport", "Musique", "Lecture"] }
  ]
  const [Personnes, setPersonnes] = useState(Users);

  function Ajouter(neuPers) {
    setPersonnes([...Personnes, neuPers]);
  }

  function Supprimer(id) {
    setPersonnes(Personnes.filter((ele) => ele.id !== id));
  }

  function Modifier(id, nouvellePers) {
    setPersonnes(Personnes.map((p) => (p.id === id ? nouvellePers : p)));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulaire Personnes={Personnes} Ajouter={Ajouter} Supprimer={Supprimer} />} />
        <Route path="/Editer/:id" element={<Editer Personnes={Personnes} Modifier={Modifier} />} />
      </Routes>
    </BrowserRouter>
  );
}