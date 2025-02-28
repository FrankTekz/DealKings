import React, {useContext, useState} from "react"

const CartContext = React.createContext()

function CartProvider({children}){

    const [cartItems, setCartItems] = useState([])
    const [orderPlaced, setOrderPlaced]= useState(false)

        function addToCart(selectedItem) {
            setCartItems(prevItems => [...prevItems, selectedItem])
        }

        function removeFromCart(id) {
            setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        }

        function emptyCart(){
            setCartItems([])
        }

        //delivery date
        const date = new Date();
        date.setDate(date.getDate() + 5)
        let finalDate = date.toString().match(/\b[\w']+(?:[^\w\n]+[\w']+){0,2}\b/g)[0]

        

    return(
        <CartContext.Provider value={{addToCart, removeFromCart, cartItems, emptyCart, finalDate, setCartItems, orderPlaced, setOrderPlaced}}>
            {children}
        </CartContext.Provider>
    )
}

function useCartContext(){
    return(
        useContext(CartContext)
    )
}

export {CartProvider, useCartContext}