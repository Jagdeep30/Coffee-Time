import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './products.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/action-creators';

const Products = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    const getProducts = async()=>{
        const res = await axios.get("http://localhost:5000/api/v1/admin/products");
        setProducts(res.data.data);
    }

    const handleAddToCart = (e)=>{
        let id = e.target.value;
        dispatch(addToCart(id));
    }

    useEffect(()=>{
        getProducts();
    },[]);

  return (
    <div className="fluid-container d-flex flex-column align-items-center products" style={{"backgroundColor":'red'}}>
        <h3 className='grand-hotel heading'>Products</h3>

        <div className="container d-flex justify-content-evenly">
        {products.length!==0 && products.map((val)=>{
            return(
                <div key={val._id} className="card text-center" style={{"width": "18rem"}}>
                    <img src={val.productImg} className="card-img-top" alt="..." />
                    <div className="card-body mb-0">
                        <h5 className="card-title montserrat product-name">{val.name}</h5>
                        <p className="card-text">{val.description}</p>
                    </div>
                    <ul className="list-group list-group-flush mb-0">
                        <li className="list-group-item fw-bold">Price : {val.unitPrice}</li>
                    </ul>
                    <div className="card-body">
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