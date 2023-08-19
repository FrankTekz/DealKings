import React, {useState, useEffect, useContext} from "react"

const ProductsContext = React.createContext()

function ProductsProvider({children}){
    const [productData, setData] = useState([])
    const [displayedData, setDisplayedData] = useState(productData)
    const [selectedPrice, setSelectedPrice] = useState(1749)
    const [categories, setCategories] = useState([
        { id: 1, checked: false, label: 'smartphones' },
        { id: 2, checked: false, label: 'laptops' },
        { id: 3, checked: false, label: 'fragrances' },
        { id: 4, checked: false, label: 'skincare' },
        { id: 5, checked: false, label: 'groceries' },
        { id: 6, checked: false, label:  'home-decoration' },
      ]);

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

      const handleChangePrice = (event, value) => {
        setSelectedPrice(value)
    }

    function clearFilters(){
        setDisplayedData(productData)
        setSelectedPrice(1749)
        setCategories([
            { id: 1, checked: false, label: 'smartphones' },
            { id: 2, checked: false, label: 'laptops' },
            { id: 3, checked: false, label: 'fragrances' },
            { id: 4, checked: false, label: 'skincare' },
            { id: 5, checked: false, label: 'groceries' },
            { id: 6, checked: false, label:  'home-decoration' },
          ])
        }
    


    return(
        <ProductsContext.Provider value={{productData, setData, displayedData, setDisplayedData, copyingData, selectedPrice, setSelectedPrice, handleChangePrice, categories, setCategories, clearFilters}}>
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