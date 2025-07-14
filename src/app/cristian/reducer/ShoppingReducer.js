  
  import { Products }  from "@/app/cristian/utils/ProductsList"

  export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ONE_TO_CART: 'REMOVE_ONE_TO_CART',
    REMOVE_ALL_TO_CART: 'RREMOVE_ALL_TO_CART',
    CLEAR_TO_CART: 'CLEAR_TO_CART'
  }

  export const ShoppingInitialState = {
  products: Products,
  cart: []
}


  export function ShoppingReducer( state, action){
    switch (action.type) {
      case CART_ACTION_TYPES.ADD_TO_CART:{
        //Buscar el producto en el arreglo
        const newItem = state.products.find(product => product.id === action.payload)
        //console.log(newItem)

        //Validar si existe el carro
        const itemInCart = state.cart.find(item => item.id === newItem.id)

        return itemInCart 
        ?{
          ...state,
          cart: state.cart.map((item) => 
            item.id === newItem.id 
            ? {...item, quantity:item.quantity + 1}
            : item)
        }
        :{
          ...state,
          cart:[...state.cart,{...newItem, quantity: 1}]
          } 
      }
        
      case CART_ACTION_TYPES.REMOVE_ALL_TO_CART:{
        return{
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload )
        }

      }

      case CART_ACTION_TYPES.REMOVE_ONE_TO_CART:{
        //Buscar el producto en el arreglo
        const itemRemove = state.cart.find(product => product.id === action.payload)
        //console.log(itemRemove + "itemremove")

        return itemRemove.quantity > 1 
        ? {
          ...state,
          cart: state.cart.map(item => 
            item.id === action.payload 
            ? {...item,quantity:item.quantity - 1 }
            :item)
        } 
        : {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload )
        }
      }

      case CART_ACTION_TYPES.CLEAR_TO_CART:
        return ShoppingInitialState

    return state
    }
  }