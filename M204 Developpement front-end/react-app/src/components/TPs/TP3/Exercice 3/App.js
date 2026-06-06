import './App.css';
import ListeCategorie from './components/ListeCategorie';
function App() {
  const produits = [ 
    {nom: 'Telephone', price: 300, category: 'electronique'}, 
    {nom: 'Livre', price: 20, category: 'lecture'}, 
    {nom: 'Ordinateur', price: 800, category: 'electronique'}, 
    {nom: 'Roman', price: 100, category: 'lecture'},
    {nom: 'Table', price: 80, category: 'meuble'},
    {nom: 'Tablette', price: 2000, category: 'electronique'}
  ];
  return (
    <div>
      <ListeCategorie produits={produits}/>
    </div>
  );
}
export default App;