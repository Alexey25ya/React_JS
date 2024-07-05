import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeFavorite } from "../reducers/favoriteSlice";

const FavoriteList = () => {
    const favoriteItems = useSelector(state => state.favorite.favoriteItems);
    const dispatch = useDispatch();

    const handleRemoveFavorite = (item) => {
        dispatch(removeFavorite(item));
    };

    return (
        <div>
            <h2>Favorite items</h2>
            <ul>
                {favoriteItems.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <h2>{item.price}</h2>
                        <button onClick={() => handleRemoveFavorite(item)}>Remove from favorite</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;