import React, { useState } from "react";
import Slider from "react-slick";
import { bathData, mciData, railwayData, ssData } from "../../data/products";
import '../Products/Products.css';

const Products = () => {
    const [category, setCategory] = useState('Bath Fittings');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const getProducts = () => {
        switch (category) {
            case 'MCI Fittings':
                return mciData;
            case 'Railway Specific Products':
                return railwayData;
            case 'Stainless Steel Fittings':
                return ssData;
            default:
                return bathData;
        }
    };

    return (
        <div className="products" id="programs">
            <div>
                <p className="products-subheader">
                    <button onClick={() => setCategory('Bath Fittings')}>Bath Fittings</button>
                    <button onClick={() => setCategory('MCI Fittings')}>MCI Fittings</button>
                    <button onClick={() => setCategory('Railway Specific Products')}>Railway Specific Products</button>
                    <button onClick={() => setCategory('Stainless Steel Fittings')}>Stainless Steel Fittings</button>
                </p>
            </div>
            <Slider {...settings} className="products-categories">
                {getProducts().map((product, index) => (
                    <div className="category" key={index}>
                        <img src={product.image} alt={product.name} />
                        <span className="category-heading">{product.name}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Products;
