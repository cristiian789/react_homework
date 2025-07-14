import style from "@/app/cristian/css/Shopping.module.css"
import { CartIcon } from "./Icons"
import { ShoppingCartItem } from "@/app/cristian/components/ShoppingCartItem"

export function Shopping({data,clearToCart, removeToCart}){
  // const {id,name,category,price,quantity,imgUrl} = data
  // console.log(name)
  

  return(
    <>
      <label htmlFor="toggleCart" className={style.cartIcon}>
        <CartIcon />
      </label>
      <input type="checkbox" id="toggleCart" className={style.cartToggle} />
      <aside className={style.cartPanel}>
        <h2>Mis productos</h2>
          {data.map((item) => (
          <ShoppingCartItem
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            quantity={item.quantity}
            imgUrl={item.imgUrl}
            clearToCart={clearToCart}
            removeToCart={removeToCart}
          />
        ))}
        <p className={style.total}>Total: ${data.reduce((acc, item) => acc + item.price * item.quantity,0)}</p>
        <button className={style.buttonClear} onClick={() => clearToCart()}>Limpiar Carro</button>
        <button className={style.buttonPay}>Pagar</button>
      </aside>
    </>
  )
}