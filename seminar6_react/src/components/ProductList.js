import React from "react";
import { useDispatch } from "react-redux"
import { addFavorite } from "../reducers/favoriteSlice";

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const handleAddToFavorite = (product) => {
        dispatch(addFavorite(product));
    };
    // const handleAddProduct = (item) => {
    //     dispatch(addProduct(item));

    // };


    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>Name: {product.name}</h2>
                        <p>Description:{product.description}</p>
                        <h2>price: {product.price}</h2>
                        <button onClick={() => handleAddToFavorite(product)}>Add to favorite</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;