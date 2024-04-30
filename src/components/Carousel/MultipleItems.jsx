import {useState , useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import arrow from "../../assets/arrow.svg";
import arrowRight from "../../assets/arrowRight.svg";

export default function Carousel() {
    const [products, setProducts] = useState({ images: [] });

    useEffect(() => {
        axios.get('https://dummyjson.com/products/39')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className="custom-slider">
                {products.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`tankWater${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
