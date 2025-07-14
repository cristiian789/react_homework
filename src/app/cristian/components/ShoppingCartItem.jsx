// components/ShoppingCartItem.jsx
import style from "@/app/cristian/css/Shopping.module.css"

export function ShoppingCartItem({ id, name, category, price, quantity, imgUrl, clearToCart, removeToCart }) {
  return (
    <div>
      <div className={style.container}>
        <img src={imgUrl} alt={name} className={style.img} />
        <h4>{name}</h4>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: {price * quantity}</p>
        <button className={style.button} onClick={() => removeToCart(id)}>Eliminar Uno</button>
        <button className={style.button} onClick={() => removeToCart(id,true)}>Eliminar Todos</button>
      </div>
    </div>
  );
}