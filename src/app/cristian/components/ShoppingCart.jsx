import style from "@/app/cristian/css/Shopping.module.css"
import { ButtonBuy } from "./ButtonBuy"

export function ShoppingCart(){
  return(
    <>
      <img  className={style.img} src="https://media.istockphoto.com/id/1206806317/es/vector/icono-del-carrito-de-compras-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sdScWRH_AeHdG6vHzMn8xUHCpe7iM6O1Skgi2lPuKG0="></img>
      <ButtonBuy name="Pay"/>
    </>
  )
}