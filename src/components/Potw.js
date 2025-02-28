import React from 'react';
import { useProductsContext } from '../context/ProductsContext';
import PotwCard from './PotwCard';

function Potw(props) {
    const {productData} = useProductsContext()

    let mockData = productData

    const potwArr = mockData.sort( () => Math.random() - 0.5).slice(0,6);

    const potwCards = potwArr.map(product => {
        return(
              <PotwCard
                key={product.id}
                id={product.id}
                img={product.images[0]}
                title={product.title}
                rating={product.rating}
                price={product.price}
                />
            )
          })

    return (
        <div id='potw-div'>
            <h1>Featured Products Of The Week</h1>
            <div id='underline' ></div>
            <div id='potw-menu' >
                {potwCards}
            </div>
        </div>
    );
}

export default Potw;