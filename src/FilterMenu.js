import React from "react";
import CheckboxProton from "./FilterFeatures/CheckboxProton";
import SliderProton from "./FilterFeatures/SliderProton";


export default function FilterMenu({categories, changeChecked, selectedPrice, changePrice}){

    return(
        <div id="filter-menu">
            <h1>Sort</h1>
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
                <SliderProton 
                    value={selectedPrice}
                    changePrice={changePrice}
                />
                <h3>Price</h3>
            </div>
        </div>
    )
}