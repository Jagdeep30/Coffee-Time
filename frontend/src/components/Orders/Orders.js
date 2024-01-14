import './orders.css';
import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToCart, deleteFromCart } from '../../state/action-creators';
import downloadImage from '../../DownloadImage';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart);
  const user = useSelector(state=>state.user);
  const login = useSelector(state=>state.login);
  const navigate = useNavigate();
  const [productItems,setProductItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(false);
  const [voucher, setVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

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
    let images = [];
    let price = 0;
    for(const val of items.entries()){
      let res = await axios.get(`http://localhost:5000/api/v1/admin/products/${val[0]}`);
      let image = await downloadImage(res.data.data.productImage);
      
      valCount.push(val[1]);
      images.push(image);
      dataItems.push(res.data.data);
      price += res.data.data.unitPrice*val[1];
    }

    images = await Promise.all(images);
    images.forEach((val,ind)=>{
      dataItems[ind].productImage = val;
    })
    // console.log(dataItems);
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

  // const getVoucher = async(code)=>{
  //   let result = await axios.get(`http://localhost:5000/api/v1/admin/vouchers/code/${code}`);
  //   return result;
  // }

  const handleOrder = async()=>{
    // console.log("user is ");
    // console.log(user);
    if(!login){
      navigate('/signin');
      return
    }
    // let reqData = {
    //   userID : user._id
    // };
    let reqData = new FormData();
    reqData.append("userID",user._id);

    let redempData = new FormData();

    if(voucher && voucherCode){
        let voucherResult = await axios.get(`http://localhost:5000/api/v1/admin/vouchers/code/${voucherCode}`);
        // let voucherResult = getVoucher(voucherCode);
        // console.log(voucherResult.data.data);
        // let vouc = voucherResult.data.data;
        if(voucherResult.data.status==='fail'){
          alert("Invalid voucher code");
          return;
        }
        else{
          reqData.append("voucherID",voucherResult.data.data._id);
          if(voucherResult.data.data.amount>=totalPrice){
            setTotalPrice(0);
          }
          else{
            setTotalPrice(totalPrice-(voucherResult.data.data.amount));
          }
        }
        redempData.append("voucherID",voucherResult.data.data._id);
        redempData.append("userID",user._id);
        // redempData = {
        //   voucherID:voucherResult.data.data._id,
          
        //   userID:user._id
        // }
      
        // console.log("----------------------------------------------------------------------------");
        // await axios.post('http://localhost:5000/api/v1/admin/voucherReds',redempData);
    }
    // console.log(voucher);
    let res = await axios.post('http://localhost:5000/api/v1/admin/orders',reqData);

    for( let item of items.entries()){
      let itemData = new FormData();
      itemData.append("quantity",item[1]);
      itemData.append("orderID",res.data.data._id);
      itemData.append("productID",item[0]);
      // let itemData = {
      //   quantity:item[1],
      //   orderID:res.data.data._id,
      //   productID:item[0]
      // }
      await axios.post('http://localhost:5000/api/v1/admin/orderDetails',itemData)
    }
    

    if(voucher && voucherCode){
      redempData.append("orderID",res.data.data._id);
      // console.log("----------------------------------------------------------------------------");
      await axios.post('http://localhost:5000/api/v1/admin/voucherReds',redempData);
    }


    // let id = res.data.data._id;
    let oId = Math.floor((Math.random())*100);
    setOrderId(oId);
    setOrder(true);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="fluid-container d-flex flex-column align-items-center products" >
        <h3 className='grand-hotel heading'>Basket</h3>

        <div className="container d-flex justify-content-evenly" >
          {/* {console.log(productItems)} */}
          {productItems.map((val,ind)=>{
            // getData(val[0]);
            // console.log(currItem)
            return (
              <div key={val._id} className="card text-center" style={{"width": "18rem"}}>
                    <img src={val.productImage} className="card-img-top height" alt="..." />
                    <div className="card-body mb-0">
                        <h5 className="card-title montserrat product-name">{val.name}</h5>
                        {/* <p className="card-text desc-height">{val.description}</p> */}
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

        <div id="liveAlertPlaceholder">
          {order && <div className="alert alert-success alert-dismissible" role="alert">
          <div>Order Placed={'>'}{orderId}</div>
            <button type="button" className="btn-close" data-bs-dismiss="" aria-label="" onClick={()=>{setOrder(false)}}></button>
          </div>}
        <div className="badge bg-secondary amt">Total Amount: {totalPrice}</div>

        </div>
        <button className='btn button' onClick={()=>{setVoucher(true)}}>Add Voucher Code</button>
        {voucher && <input type='text' className='form-control' placeholder='Enter Voucher Code' style={{"width":"20rem"}} onChange={(e)=>{setVoucherCode(e.target.value)}}/>}
        {items.size!==0?<button className='button btn' onClick={handleOrder}>Order</button>:''}
        {/* // <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={()=>{setOrder(true)}}>Show live alert</button> */}

    </div>
  )
}

export default Orders;