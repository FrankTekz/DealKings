import React from "react";
import CheckboxProton from "./CheckboxProton";
// import SliderProton from "./SliderProton";
import { Slider } from "@mui/material";
import { useProductsContext } from "../context/ProductsContext";



export default function ModalMenu({changeChecked}){
    const {selectedPrice, handleChangePrice, clearFilters, categories, modalStatus, handleClose} = useProductsContext()
    
    return(
        <div id="modal-menu">
            <h1>Filters</h1>
            <div id="category-li">
                <h3>Category</h3>
                {categories.map((category) => (
                    <CheckboxProton
                    key={category.id}
                    category={category}
                    changeChecked={changeChecked}
                    />
                ))}
                
            </div>
            <div id="price">
                <h3>Price</h3>
                <p>${selectedPrice}</p>
                <Slider
                    onChange={handleChangePrice}
                    value={selectedPrice}
                    min={13}
                    max={1749}
                />
            </div>
            <button id="clear-filters" onClick={clearFilters} >clear filters</button>
            <button onClick={handleClose} >apply filters</button>
        </div>
    )
}