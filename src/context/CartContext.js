import React, {useContext, useState} from "react"


const CartContext = React.createContext()

function CartProvider({children}){

    const [cartItems, setCartItems] = useState([])
    const [orderPlaced, setOrderPlaced]= useState(false)

        function addToCart(selectedItem) {
            setCartItems(prevItems => [...prevItems, selectedItem])
            
            console.log(cartItems)
        }

        function removeFromCart(id) {
            setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        }

        function emptyCart(){
            setCartItems([])
        }

        const date = new Date();
        date.setDate(date.getDate() + 4)     
        let deliveryWeekday = date.toLocaleString('default', {weekday: 'long'})
        let deliveryDate = date.toLocaleString('default', {month: 'long'})
        let numericDay = date.getDay()

        let finalDate = deliveryWeekday + ', ' + deliveryDate + ' ' + numericDay

        

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