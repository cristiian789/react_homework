import styles from "@/app/cristian/css/products.module.css"
import { ButtonBuy } from "./ButtonBuy"

export function ProductCard ({name,category,price,quantity,imgUrl}){
  return(
    <>
      <div>
        <h2>{name}</h2>
        <p className={styles.p}>{category}</p>
        <p className={styles.p}>Price: ${price}</p>
        <p className={styles.p}>Quantity: ${quantity}</p>
        <img src={imgUrl} alt={name} className={styles.img}></img>
      </div>
      <ButtonBuy name="Buy"/>

    </>
    
  )
}