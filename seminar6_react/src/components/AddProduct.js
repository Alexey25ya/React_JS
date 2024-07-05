import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeFavorite } from "../reducers/favoriteSlice";

const AddProduct = () => {
    const favoriteItems = useSelector(state => state.favorite.favoriteItems);
    console.log(favoriteItems);


    const [name, setName] = useState('name');
    const [description, setDescription] = useState('description')
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const handleAddProduct = (item) => {
        dispatch(addProduct(item));
        setName(name);
        setDescription(description)


    };
    const item = { id: Date.now(), name: name, description: description, price: price }

    const handleRemoveFavorite = (item) => {
        dispatch(removeFavorite(item));
    };

    return (
        <div>

            <input
                type="text"
                value={item.name}
                onChange={(e) => (setName(e.target.value))}
            />
            <p>{item.name}</p>
            <textarea
                type="text"
                value={item.description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                value={item.price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button onClick={() => handleAddProduct(item)}>Добавить продукт</button>

            <h2>Favorite items</h2>
            <ul>
                {favoriteItems.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <h2>{item.description}</h2>
                        <h2>{item.price}</h2>
                        <button onClick={() => handleRemoveFavorite(item)}>Remove from favorite</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddProduct;