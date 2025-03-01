import React, { useEffect, useState, useCallback } from 'react';
import { useProductsContext } from './context/ProductsContext';
import ProductCard from './components/ProductCard';
import ProductColumn from './components/ProductColumn';
import FilterMenu from './components/FilterMenu';
import ModalMenu from './components/ModalMenu';
import gridEmpty from './images/grid.png';
import gridFilled from './images/gridFilled.png';
import columnsFilled from './images/columns.png';
import columnsEmpty from './images/columnsFilled.png';
import filterImg from './images/filter.png';
import Dialog from '@mui/material/Dialog';

function Products() {
    const {
        displayedData,
        setDisplayedData,
        productData,
        selectedPrice,
        categories,
        setCategories,
        modalStatus,
        handleClose,
        handleOpen
    } = useProductsContext();

    const [gridOn, setGridOn] = useState(true);

    const handleChangeChecked = (id) => {
        const changeCheckedCats = categories.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCategories(changeCheckedCats);
    };

    // ✅ Memoized applyFilters to prevent unnecessary re-creation
    const applyFilters = useCallback(() => {
        let updatedList = productData;

        // Category Filter
        const categoriesChecked = categories
            .filter((item) => item.checked)
            .map((item) => item.label);

        if (categoriesChecked.length) {
            updatedList = updatedList.filter((item) =>
                categoriesChecked.includes(item.category)
            );
        }

        // Price Filter
        updatedList = updatedList.filter((item) => item.price <= selectedPrice);

        setDisplayedData(updatedList);
    }, [productData, categories, selectedPrice, setDisplayedData]);

    // ✅ useEffect now runs only when necessary
    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const productCards = displayedData.map((product) => (
        <ProductCard
            key={product.id}
            id={product.id}
            img={product.images[0]}
            title={product.title}
            rating={product.rating}
            price={product.price}
        />
    ));

    const productColumns = displayedData.map((product) => (
        <ProductColumn
            key={product.id}
            id={product.id}
            img={product.images[0]}
            title={product.title}
            rating={product.rating}
            price={product.price}
            description={product.description}
        />
    ));

    function determineOrientation() {
        return gridOn ? productCards : productColumns;
    }

    return (
        <div id='products-title'>
            <h1>Products</h1>
            <div id='products-div'>
                <FilterMenu categories={categories} changeChecked={handleChangeChecked} />
                <div id='product-orientation'>
                    <div id='orientation-options'>
                        <div id='orient-icons'>
                            <img
                                id={gridOn ? 'gridFilled' : 'gridEmpty'}
                                onClick={() => setGridOn(true)}
                                src={gridOn ? gridFilled : gridEmpty}
                                alt="Grid View"
                            />
                            <img
                                id={gridOn ? 'columnsEmpty' : 'columnsFilled'}
                                onClick={() => setGridOn(false)}
                                src={gridOn ? columnsFilled : columnsEmpty}
                                alt="Column View"
                            />
                        </div>
                        <img id='modal-btn' onClick={handleOpen} src={filterImg} alt="Filter Options" />

                        <Dialog open={modalStatus} onClose={handleClose}>
                            <ModalMenu categories={categories} changeChecked={handleChangeChecked} />
                        </Dialog>

                        <div id={gridOn && displayedData.length > 0 ? 'grid-menu' : 'column-menu'}>
                            {displayedData.length === 0 ? (
                                <div className="no-products-message">
                                    <h1>No products match your search filters</h1>
                                </div>
                            ) : (
                                <>{determineOrientation()}</>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
