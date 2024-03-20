import  { useEffect, useState } from 'react';
import axios from 'axios';
import LogoAdidas from "../assets/LogoAdidas.svg";
import ReactStars from "react-rating-stars-component";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/1') // Corrected the URL
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <p className='url__product'> Men / Clothing / Tops / Adidas / Adidas Black T-Shirt</p>


        <div className='product' key={products.id}>
<div className='product__images'>
<img src={products.images[0]} alt='products image'/>
</div>
<div className='Details__product'>
<img src={LogoAdidas} alt='products image'/>

            <strong>{products.description}</strong>
            <span>{products.category}</span>
            <span>{products.name}</span>
            <div className='star__rating'>
            <ReactStars
            value={products.rating} // Rating value
            count={5} // Number of stars
            size={24} // Size of the stars
            activeColor='#ffd700' // Filled star color
            inactiveColor='#cccccc' // Outline star color
            edit={false} // Disable editing
            />
            <p className='rating'>{products.rating} of 5 <span className='stock'>{products.stock}</span></p>
            </div>
            <span>{products.price} LE <del>{products.price} LE</del></span>

          </div>
        </div>

    </div>
  );
};

export default ProductsList;
