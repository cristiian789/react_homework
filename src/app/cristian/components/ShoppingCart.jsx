import style from "@/app/cristian/css/Shopping.module.css"
import { ButtonBuy } from "./ButtonBuy"
import { CartIcon } from "./Icons"
import { Products }  from "@/app/cristian/utils/ProductsList"

export function ShoppingCart(){
  

  const initialArg = Products


  const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_TO_CART: 'REMOVE_TO_CART',
    CLEAR_TO_CART: 'CLEAR_TO_CART'
  }

  function reducer( state, action){
    switch (action.type) {
      case CART_ACTION_TYPES.ADD_TO_CART:
        
      case CART_ACTION_TYPES.REMOVE_TO_CART:

      case CART_ACTION_TYPES.CLEAR_TO_CART:


    return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialArg)


  return(
    <>
      {/* <img  className={style.img} src="https://media.istockphoto.com/id/1206806317/es/vector/icono-del-carrito-de-compras-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sdScWRH_AeHdG6vHzMn8xUHCpe7iM6O1Skgi2lPuKG0="></img>
      <ButtonBuy name="Pay"/>
      <CartIcon/> */}
      <label htmlFor="toggleCart" className={style.cartIcon}>
        <CartIcon />
      </label>
      <input type="checkbox" id="toggleCart" className={style.cartToggle} />
      <aside className={style.cartPanel}>
        <h2>Mis productos</h2>
      </aside>
    </>
  )
}