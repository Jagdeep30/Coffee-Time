import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './products.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/action-creators';
import downloadImage from '../../DownloadImage';

const baseURL = 'https://coffee-time-one.vercel.app/api/v1';

const Products = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    const getProducts = async()=>{
        const result = await axios.get(baseURL+"/admin/products");

        const productWithImages = await Promise.all(
			result.data.data.map(async (val) => {
			  let url = await downloadImage(val.productImage);
			  val.productImage = url;
			  return val;
			})
		  );
        setProducts(productWithImages);
    }

    const handleAddToCart = (e)=>{
        let id = e.target.value;
        dispatch(addToCart(id));
    }

    useEffect(()=>{
        getProducts();
    },[]);

  return (
    <div className="fluid-container d-flex flex-column align-items-center products">
        <h3 className='grand-hotel heading'>Products</h3>

        <div className="fluid-container d-flex justify-content-evenly" style={{"width":"100%"}}>
        {products.length!==0 && products.map((val)=>{
            return(
                <div key={val._id} className="card text-center" style={{"width": "18rem"}}>
                    <img src={val.productImage} className="card-img-top height" alt="..." />
                    <div className="card-body mb-0 body-color">
                        <h5 className="card-title montserrat product-name title">{val.name}</h5>
                        <p className="card-text desc-height" style={{"color":"white"}}>{val.description}</p>
                    </div>
                    <ul className="list-group list-group-flush mb-0 body-color">
                        <li className="list-group-item fw-bold title" style={{"color":"white"}}>Price : {val.unitPrice}</li>
                    </ul>
                    <div className="card-body body-color">
                    <button className="btn btn-primary button p-button" onClick={handleAddToCart} value={val._id}>Add to Cart</button>
                    </div>
                </div>
            );
        })}
        </div>
    </div>
  )
}

export default Products;