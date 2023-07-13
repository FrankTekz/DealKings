import React, {useEffect, useState} from 'react';
import {useProductsContext} from './context/ProductsContext'
import { useCartContext } from './context/CartContext';
import ProductCard from './components/ProductCard';
import FilterMenu from './components/FilterMenu';
import cartImg from './images/cartImage.png'
import PopUpCart from "./components/PopUpCart";

function Products() {
    const {displayedData, setDisplayedData, productData} = useProductsContext()
    const {cartItems, viewCart, viewingCart} = useCartContext()
    const [selectedPrice, setSelectedPrice] = useState([1, 1750])
    const [categories, setCategories] = useState([
        { id: 1, checked: false, label: 'smartphones' },
        { id: 2, checked: false, label: 'laptops' },
        { id: 3, checked: false, label: 'fragrances' },
        { id: 4, checked: false, label: 'skincare' },
        { id: 5, checked: false, label: 'groceries' },
        { id: 6, checked: false, label:  'home-decoration' },
      ]);

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value)
    }

    const handleChangeChecked = (id) => {
        const catStateList = categories;
        const changeCheckedCats = catStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        console.log(categories)
        setCategories(changeCheckedCats);
      };

      const applyFilters = () => {
        let updatedList = productData;
        // Category Filter
        const categoriesChecked = categories
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (categoriesChecked.length) {
            updatedList = updatedList.filter((item) =>
            categoriesChecked.includes(item.category)
            )
        }
        //Price Filter
        const minPrice = selectedPrice[0]
        const maxPrice = selectedPrice[1]

        updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        )
            setDisplayedData(updatedList)
    }
        
        useEffect(() => {
            applyFilters()
        }, [categories, selectedPrice])
        

    const productCards = displayedData.map(product => {
    return(
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.images[0]}
            title={product.title}
            rating={product.rating}
            price={product.price}
            />
        )
      })

      const fixedBtn = 
        <button type="button" className="shopping-cart-button float-right" onClick={viewCart}>
            <img src={cartImg} id='cart-img'/>
            <span className="text">({cartItems.length})</span>
        </button>  

    return (
        <div id='products-title' >
            <h1>Products</h1>
        <div id='products-div' >
                <FilterMenu
                    categories={categories}
                    changeChecked={handleChangeChecked}
                    selectedPrice={selectedPrice}
                    changePrice={handleChangePrice}
                />
            <div id='grid-menu' >
                {productCards}
            </div>
            <div id="cart-fixed">
                {cartItems.length > 0 && viewingCart === false ? fixedBtn : null}
            </div>
            {viewingCart === true ? <PopUpCart/> : null}
        </div>
        </div>
    );
}

export default Products;