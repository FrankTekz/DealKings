import React, {useContext, useState} from "react"


const CartContext = React.createContext()

function CartProvider({children}){

    const [cartItems, setCartItems] = useState([])
    const [viewingCart, setViewCart] = useState(false)

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

        function viewCart(){
            setViewCart(prevState => !prevState)
        }

        function disableScroll(){
            if (viewingCart === true){
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
          }

        const date = new Date();
        date.setDate(date.getDate() + 4)     
        let deliveryWeekday = date.toLocaleString('default', {weekday: 'long'})
        let deliveryDate = date.toLocaleString('default', {month: 'long'})
        let numericDay = date.getDay()

        let finalDate = deliveryWeekday + ', ' + deliveryDate + ' ' + numericDay

        

    return(
        <CartContext.Provider value={{addToCart, removeFromCart, cartItems, emptyCart, finalDate, viewingCart, viewCart, disableScroll, setCartItems}}>
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