import style from "@/app/cristian/css/Shopping.module.css"
import { ButtonBuy } from "./ButtonBuy"
import { CartIcon } from "./Icons"
import { Products }  from "@/app/cristian/utils/ProductsList"
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
        <button onClick={() => clearToCart()}>Limpiar Carro</button>
      </aside>
    </>
  )
}