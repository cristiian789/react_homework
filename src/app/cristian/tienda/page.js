'use client'
import { HomeTitle } from "@/app/cristian/components/HomeTitle.jsx";
import styles from '@/app/cristian/css/pageProducts.module.css';
import { Shopping } from '@/app/cristian/components/ShoppingCart';
import { ProductCard } from "../components/ProducCard";
import { useReducer } from "react";
import { ShoppingReducer, ShoppingInitialState, CART_ACTION_TYPES } from "../reducer/ShoppingReducer";


export default function Welcome() {


  const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState)
  const {products, cart} = state

  const addToCart = (id) => {
    console.log(id)
    dispatch({type: CART_ACTION_TYPES.ADD_TO_CART, payload: id})
  }
  const removeToCart = (id, all = false) => {
    console.log(id, all)
    if(all){
      dispatch({type: CART_ACTION_TYPES.REMOVE_ALL_TO_CART, payload: id})
    }else {
      dispatch({type: CART_ACTION_TYPES.REMOVE_ONE_TO_CART, payload: id})
    }
  }
  const clearToCart = () => {
    dispatch({type: CART_ACTION_TYPES.CLEAR_TO_CART})
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
           <HomeTitle name="Tienda Cristian Lopez"/>
        </div>
        <div className={styles.cardsGrid}>
            {products.map((prod) =>(
          <div className={styles.card} key={prod.id}>
            <ProductCard
              id={prod.id}
              name={prod.name}
              category={prod.category}
              price={prod.price}
              quantity={prod.quantity}
              imgUrl={prod.imgUrl}
              addToCart={addToCart}
            />
          </div>  
          ))}
        </div>
        <Shopping data={cart} clearToCart={clearToCart} removeToCart={removeToCart} />
      </div>
    </>
  );
}
