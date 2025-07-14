import styles from "@/app/cristian/css/products.module.css"

export function ProductCard ({id,name,category,price,quantity,imgUrl,addToCart}){
  return(
    <>
      <div>
        <h2>{name}</h2>
        <p className={styles.p}>{category}</p>
        <p className={styles.p}>Price: ${price}</p>
        <p className={styles.p}>Quantity: ${quantity}</p>
        <img src={imgUrl} alt={name} className={styles.img}></img>
      </div>
      <button className={styles.button} onClick={() => addToCart(id)}>
      agregar al carro
      </button>

    </>
    
  )
}