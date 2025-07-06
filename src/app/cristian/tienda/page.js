'use client'
import { HomeTitle } from "@/app/cristian/components/HomeTitle.jsx";
import styles from '@/app/cristian/css/pageProducts.module.css';
import { ShoppingCart } from '@/app/cristian/components/ShoppingCart';
import { ProductCard } from "../components/ProducCard";
import { Products }  from "@/app/cristian/utils/ProductsList"

export default function Welcome() {


  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
           <HomeTitle name="Tienda Cristian Lopez"/>
        </div>
        <div className={styles.cardsGrid}>
            {Products.map((prod, index) =>(
          <div className={styles.card} key={index} >
            <ProductCard
              name={prod.name}
              category={prod.category}
              price={prod.price}
              quantity={prod.quantity}
              imgUrl={prod.imgUrl}
            />
          </div>  
          ))}
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <ShoppingCart/>
          </div>
        </div>
      </div>
    </>
  );
}
