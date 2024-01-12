import './orders.css';
import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToCart, deleteFromCart } from '../../state/action-creators';

const Orders = () => {
  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart);
  const [productItems,setProductItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState([]);

  // const parseItems = ()=>{
  //   items.forEach((val,key)=>{
  //     dataItems.push([key,val]);
  //   })
  // }

  const getData = async()=>{
    // items.forEach(async(val,key)=>{
    //   let res = await axios.get(`http://localhost:5000/api/v1/admin/products/${key}`);
    //   dataItems.push(res.data.data);
    // })
    let dataItems = [];
    let valCount = [];
    let price = 0;
    for(const val of items.entries()){
      let res = await axios.get(`http://localhost:5000/api/v1/admin/products/${val[0]}`);
      // res.data.data.count = val[1];
      valCount.push(val[1]);
      dataItems.push(res.data.data);
      price += res.data.data.unitPrice*val[1];
    }
    setProductItems(dataItems);
    setCount(valCount);
    setTotalPrice(price);
  }

  const handleRemove = (val,ind)=>{
    dispatch(deleteFromCart(val._id));
    let temp = [...count];
    if(temp[ind]!==0)temp[ind] = temp[ind] - 1;
    setCount(temp);
    if(count[ind]!==0)setTotalPrice(totalPrice-val.unitPrice);
  }

  const handleAdd = (val,ind) =>{
    dispatch(addToCart(val._id));
    let temp = [...count];
    temp[ind] = temp[ind] + 1;
    setCount(temp);
    setTotalPrice(totalPrice+val.unitPrice);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="fluid-container d-flex flex-column align-items-center products" style={{"backgroundColor":'red'}}>
        <h3 className='grand-hotel heading'>Basket</h3>

        <div className="container d-flex justify-content-evenly" style={{"backgroundColor":"yellow"}}>
          {console.log(productItems)}
          {productItems.map((val,ind)=>{
            // getData(val[0]);
            // console.log(currItem)
            return (
              <div key={val._id} className="card text-center" style={{"width": "18rem"}}>
                    <img src={val.productImg} className="card-img-top" alt="..." />
                    <div className="card-body mb-0">
                        <h5 className="card-title montserrat product-name">{val.name}</h5>
                        <p className="card-text">{val.description}</p>
                    </div>
                    <ul className="list-group list-group-flush mb-0">
                        <li className="list-group-item fw-bold">Price : {val.unitPrice}</li>
                    </ul>
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <button className="btn button count-btn" onClick={()=>{handleRemove(val,ind)}}>-</button>
                      <span className='count'>{count[ind]}</span>
                      <button className="btn button count-btn" onClick={()=>{handleAdd(val,ind)}}>+</button>
                    {/* <button className="btn btn-primary button p-button" value={val._id}>Add to Cart</button> */}
                    </div>
                </div>
            )
          })}
        </div>
        {totalPrice!==0?<div className="badge bg-secondary">Total Amount: {totalPrice}</div>:''}
        {items.size!==0?<button className='button btn'>Order</button>:''}
    </div>
  )
}

export default Orders;