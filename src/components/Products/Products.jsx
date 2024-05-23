import React from "react";
import { productsData } from "../../data/products";
import '../Products/Products.css';

const Products = () => {
    return (
        <div className="Products" id="programs">
            {/* Header */}
            <div className="products-header">
            </div>
            <div className="products-categories">
                {productsData.map((product, index) => (
                    <div className="category" key={index}>
                        <img src={product.imgSrc} alt={product.heading} />
                        <span className="category-heading">{product.heading}</span>
                        <span className="category-details">{product.details}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
