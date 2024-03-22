    import  { useEffect, useState } from "react";
    import Slider from "react-slick";
    import axios from "axios";
    import ReactStars from "react-rating-stars-component";

    import one from '../../assets/one.png';
    import twoImage from '../../assets/twoImage.png';
    import threeImage from '../../assets/threeImage.png';
    import four from '../../assets/four.png';
    import degree from '../../assets/360degree.svg';
    import LogoAdidas from "../../assets/LogoAdidas.svg";



    const CarouselSecond = () => {
    const [products, setProducts] = useState({ rating: 0 });

    useEffect(() => {
        axios.get("https://dummyjson.com/products/39")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
        ]
    };

    return (
        <div className="slider_parent">
        <div>
            <h3 style={{ textAlign: "left", letterSpacing: "0px", color: "#542E90", opacity: 1, fontSize: "28px", marginLeft: "30px" }}>Similar Products</h3>
            <p style={{ textAlign: "left", letterSpacing: "0px", color: "#575756", opacity: 1, fontSize: "22px", marginLeft: "30px" }}>You may like these products also</p>
        </div>



        <div className="slider-container">
            <Slider {...settings} className="custom-slider2">

            <div>
                <img src={one} width={"280px"} alt="" />
                <img src={degree} className="degree" width={"50px"} alt="" />
                <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <div className="details__product">
                <div>
                    <p className="details_price">9,999 LE</p>
                    <span><del className="del_count">9,999 LE</del></span>
                </div>
                <div>
                    <img src={LogoAdidas} width={"60px"} alt="" />
                </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%" }}>
                <div>
                <ReactStars
                value={products.rating}
                count={5}
                size={24}
                activeColor="#ffd700"
                inactiveColor="#cccccc"
                edit={false}
                />
                </div>
                <div>
                    <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
                </div>
                </div>
                <div>
                <p style={{ textAlign: "center", width: "80%", marginTop: "3px" }}>Pickup From: <span style={{ fontWeight: "600" }}> Genena Mall</span></p>
                </div>
            </div>

            <div>
            <img src={twoImage} width={"280px"} alt="" />
            <img src={degree} className="degree" width={"50px"} alt="" />
            <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <div className="details__product">
            <div>
                <p className="details_price">9,999 LE</p>
                <span><del className="del_count">9,999 LE</del></span>
            </div>
            <div>
                <img src={LogoAdidas} width={"60px"} alt="" />
            </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%" }}>
            <div>
            <ReactStars
            value={products.rating}
            count={5}
            size={24}
            activeColor="#ffd700"
            inactiveColor="#cccccc"
            edit={false}
            />
            </div>
            <div>
                <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
            </div>
            </div>
            <div>
            <p style={{ textAlign: "center", width: "80%", marginTop: "3px" }}>Pickup From: <span style={{ fontWeight: "600" }}> Genena Mall</span></p>
            </div>
        </div>


        <div>
        <img src={threeImage} width={"280px"} alt="" />
        <img src={degree} className="degree" width={"50px"} alt="" />
        <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <div className="details__product">
        <div>
            <p className="details_price">9,999 LE</p>
            <span><del className="del_count">9,999 LE</del></span>
        </div>
        <div>
            <img src={LogoAdidas} width={"60px"} alt="" />
        </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%" }}>
        <div>
        <ReactStars
        value={products.rating}
        count={5}
        size={24}
        activeColor="#ffd700"
        inactiveColor="#cccccc"
        edit={false}
        />
        </div>
        <div>
            <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
        </div>
        </div>
        <div>
        <p style={{ textAlign: "center", width: "80%", marginTop: "3px" }}>Pickup From: <span style={{ fontWeight: "600" }}> Genena Mall</span></p>
        </div>
    </div>
    <div>
    <img src={four} width={"280px"} alt="" />
    <img src={degree} className="degree" width={"50px"} alt="" />
    <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    <div className="details__product">
    <div>
        <p className="details_price">9,999 LE</p>
        <span><del className="del_count">9,999 LE</del></span>
    </div>
    <div>
        <img src={LogoAdidas} width={"60px"} alt="" />
    </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%" }}>
    <div>
    <ReactStars
    value={products.rating}
    count={5}
    size={24}
    activeColor="#ffd700"
    inactiveColor="#cccccc"
    edit={false}
    />
    </div>
    <div>
        <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
    </div>
    </div>
    <div>
    <p style={{ textAlign: "center", width: "80%", marginTop: "3px" }}>Pickup From: <span style={{ fontWeight: "600" }}> Genena Mall</span></p>
    </div>
</div>

            </Slider>
        </div>
        </div>
    );
    };

    export default CarouselSecond;
