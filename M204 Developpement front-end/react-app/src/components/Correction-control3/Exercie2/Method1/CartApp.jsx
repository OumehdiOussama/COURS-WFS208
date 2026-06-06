
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./cartSlice";

function CartApp() {
  const { items, totalCount, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Casquette", price: 15 }
  ];

  return (
    <div>
      <h2>Panier</h2>
      <p>Nombre d'articles : {totalCount}</p>
      <p>Prix total : {totalPrice} €</p>

      <h3>Produits :</h3>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price} €
          <button onClick={() => dispatch(addItem(p))}>Ajouter</button>
          <button onClick={() => dispatch(removeItem(p.id))}>Supprimer</button>
        </div>
      ))}

      <button onClick={() => dispatch(clearCart())}>Vider le panier</button>

      <h3>Panier actuel :</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.name} - {item.price} €</li>
        ))}
      </ul>
    </div>
  );
}

export default CartApp;