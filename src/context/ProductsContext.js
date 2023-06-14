import React, {useState, useEffect, useContext} from "react"

const ProductsContext = React.createContext()

function ProductsProvider({children}){
    const [productData, setData] = useState([])
    const [displayedData, setDisplayedData] = useState(productData)

    async function getProductData() {
        const response = await fetch('https://dummyjson.com/products');
        if(!response.ok){
            throw new Error('can not fetch api')
        }
        const data = await response.json()
        setData(data.products.map(product => {
            return{
                ...product,
                quantity: 0
            }
        }))
    }

    function copyingData(){
        setDisplayedData(productData)
    }

    useEffect(() => {
      getProductData()
    }, [])

    useEffect(() => {
        setDisplayedData(productData)
      }, [productData])
    
console.log(productData, 'product data')

    return(
        <ProductsContext.Provider value={{productData, setData, displayedData, setDisplayedData, copyingData}}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProductsContext(){
    return(
        useContext(ProductsContext)
    )
}

export {ProductsProvider, useProductsContext}