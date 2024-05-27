import React from "react";
import Slider from "react-slick";
import { productsData } from "../../data/products";
import '../Products/Products.css';

const Products = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    return (
        <div className="Products" id="programs">
            <div>
                <div className="products-header">
                    New Arrivals
                </div>
                <p className="products-subheader">
                    New Arrivals
                </p>
            </div>
            <Slider {...settings} className="products-categories">
                {productsData.map((product, index) => (
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
