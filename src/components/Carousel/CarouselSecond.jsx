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
    import star from "../../assets/star.svg";
    import star__fill from "../../assets/star__fill.svg";



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
        <div className="slider_parent" >
        <div>
            <h3 style={{ textAlign: "left", letterSpacing: "0px", color: "#542E90", opacity: 1, fontSize: "28px", marginLeft: "30px" }}>Similar Products</h3>
            <p style={{ textAlign: "left", letterSpacing: "0px", color: "#575756", opacity: 1, fontSize: "22px", marginLeft: "30px" }}>You may like these products also</p>
        </div>



        <div className="slider-container">
            <Slider {...settings} className="custom-slider2">

            <div >
                <img src={one} width={"280px"} alt="" />
                <div className="degreeimg">

                <img src={degree} className="degree" alt="" />
                </div>
                <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <div className="details__product">
                <div>
                    <p className="details_price">9,999 LE</p>
                    <div className="det__del">

                    <span><del className="del_count">9,999 LE</del>
                         </span>

                         <span className="del__count-span">
                        <span>

                        50% Off
                        </span>
                        
                        </span>
                    </div>
                  
                </div>
                <div className="img-silder"> 
                    <img src={LogoAdidas} width={"60px"} alt="" />
                </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%" , marginTop:"5px"  }}>
            <div style={{display:"flex" , gap:"2px" , alignItems:"center" , justifyContent:"center"}}>
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star__fill} alt="" />
                </div>
                <div style={{marginTop:"5px"}}>
                    <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
                </div>
                </div>
                <div style={{marginTop:"5px"}}>
                <p style={{ textAlign: "center", width: "80%", marginTop: "3px" }}>Pickup From: <span style={{ fontWeight: "600" }}> Genena Mall</span></p>
                </div>
            </div>

            <div>
            <img src={twoImage} width={"280px"} alt="" />
            <div className="degreeimg">


            <img src={degree} className="degree"  alt="" />
</div>
            <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <div className="details__product">
            <div>
                <p className="details_price">9,999 LE</p>
            </div>
            <div className="img-silder"> 
                <img src={LogoAdidas} width={"60px"} alt="" />
            </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%" , marginTop:"15px"  }}>
            <div style={{display:"flex" , gap:"2px" , alignItems:"center" , justifyContent:"center"}}>
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star__fill} alt="" />
                </div>
            <div>
                <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
            </div>
            </div>
            <div style={{marginTop:"5px"}}>
            <p style={{ textAlign: "center", width: "90%", display:"flex" ,alignItems:"center", marginTop: "3px"  , justifyContent:"space-between"}}>
                <span>

                From: <span style={{fontWeight:"bold" ,color:"#1D1D1B"}} >UK</span>
                </span>
                
                 <span >
                 To: <span style={{fontWeight:"bold" ,color:"#1D1D1B"}} >Egypt</span>
                 
                 </span>
                 
                 <span color="#1D1D1B">
                 in: <span style={{fontWeight:"bold" ,color:"#1D1D1B"}} >10 Days</span>
                 
                 </span>
                 </p>
            </div>
        </div>


        <div>
        <img src={threeImage} width={"280px"} alt="" />
        <div className="degreeimg">

        <img src={degree} className="degree"  alt="" />
        </div>
        <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <div className="details__product" >
        <div className="details_price__parent">
                    <p className="details_price">9,999 LE</p>
                    <div className="det__del">

                    <span><del className="del_count">9,999 LE</del>
                         </span>

                         <span className="del__count-span">
                        <span>

                        30% Off
                        </span>
                        
                        </span>
                    </div>
                  
                </div>
        <div className="img-silder"> 
            <img src={LogoAdidas} width={"60px"}  alt="" />
        </div>
        </div>


        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%" , marginTop:"5px" }}>
        <div style={{display:"flex" , gap:"2px"}}>
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star__fill} alt="" />
                </div>
                <div style={{marginTop:"5px"}}>
            <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
        </div>
        </div>
        <div style={{marginTop:"5px"}}>
        <p style={{ textAlign: "center", width: "80%", marginTop: "3px" }}>Pickup From: <span style={{ fontWeight: "600" }}> Genena Mall</span></p>
        </div>
    </div>
    <div>
    <img src={four} width={"280px"} alt="" />
    <div className="degreeimg">

    <img src={degree} className="degree"  alt="" />
    </div>
    <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    <div className="details__product">
    <div>
                    <p className="details_price">9,999 LE</p>
                    <div className="det__del">

                    <span><del className="del_count">9,999 LE</del>
                         </span>

                         <span className="del__count-span">
                        <span>

                        70% Off
                        </span>
                        
                        </span>
                    </div>
                  
                </div>
                <div className="img-silder"> 
        <img src={LogoAdidas} width={"60px"} alt="" />
    </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%" , marginTop:"5px"  }}>
            <div style={{display:"flex" , gap:"2px" , alignItems:"center" , justifyContent:"center"}}>
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star} alt="" />
             <img src={star__fill} alt="" />
                </div>
                <div style={{marginTop:"5px"}}>
        <p style={{ color: "#000", fontWeight: "500" }}>{products.rating} <span>of 5</span></p>
    </div>
    </div>
    <div style={{marginTop:"5px"}}>
    <p style={{ textAlign: "center", width: "90%", display:"flex" ,alignItems:"center", marginTop: "3px"  , justifyContent:"space-between"}}>
                <span>

                From: <span style={{fontWeight:"bold" ,color:"#1D1D1B"}} >Egypt</span>
                </span>
                
                 <span >
                 To: <span style={{fontWeight:"bold" ,color:"#1D1D1B"}} >Egypt</span>
                 
                 </span>
                 
                 <span color="#1D1D1B">
                 in: <span style={{fontWeight:"bold" ,color:"#1D1D1B"}} >2 Days</span>
                 
                 </span>
                 </p>    </div>
</div>

            </Slider>
        </div>
        </div>
    );
    };

    export default CarouselSecond;
