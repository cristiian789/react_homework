// components/ShoppingCartItem.jsx
import style from "@/app/cristian/css/Shopping.module.css"

export function ShoppingCartItem({ id, name, category, price, quantity, imgUrl, clearToCart, removeToCart }) {
  return (
    <div className={style.cartItem}>
      <img src={imgUrl} alt={name} className={style.img} />
      <div>
        <h4>{name}</h4>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Total: {price * quantity}</p>
        <button onClick={() => removeToCart(id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => removeToCart(id,true)}>Eliminar Todos</button>
      </div>
    </div>
  );
}