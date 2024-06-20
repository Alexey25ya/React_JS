import React from "react";
import { useParams } from 'react-router-dom';
import Product from "./Product";
import Pagination from "./Pagination";

const ProductList = ({ products }) => {

    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productPerPage = 3;
    const startIndex = (currentPage - 1) * productPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productPerPage);


    return (
        <div>
            {currentProducts.map((product, index) => (
                <Product key={index} product={product} />
            ))}
            <Pagination totalProducts={products.length} productsPerPage={productPerPage} currentPage={currentPage} />
        </div>
    );

};
export default ProductList;