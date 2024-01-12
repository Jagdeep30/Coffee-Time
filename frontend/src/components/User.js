import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Voucher from "./Voucher/Voucher";
import Footer from "./Footer/Footer";
import { HashLink } from "react-router-hash-link";
import Modal from "./Modal/Modal";
import Review from "./Review/Review";
import Branches from "./Branches/Branches";
import BlackC from "./Black Coffee/BlackC";
import WhiteC from "./White Coffee/WhiteC";
import HotC from "./Hot Coffee/HotC";
import Timing from "./Timing/Timing";
import SignInForm from "./SignIn Form/SignInForm";
import SignUpForm from "./SignUp Form/SignUpForm";
import Form from "./Form/Form";
import { useState } from "react";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";

const User = () => {
	const [isForm, setIsForm] = useState(false);
	return (
		<>
			<div className='container-fluid'>
				<Navbar profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirwPXcQ5lYts8qcm8Qtqyw2KXfEwlME2XPQ&usqp=CAU' menu={true}/>
				{/* <Intro /> */}

				<section style={{ height: "fit-content", width: "100%" }}>
					<Routes>
						<Route path='review' element={<Review />} />
						<Route path='branches' element={<Branches />} />
						<Route path='blackC' element={<BlackC />} />
						<Route path='whiteC' element={<WhiteC />} />
						<Route path='hotC' element={<HotC />} />
						<Route path='timings' element={<Timing />} />
						<Route path='signin' element={<SignInForm />} />
						<Route path='signup' element={<SignUpForm task='Add'/>} />
						<Route path="products" element={<Products/>}/>
						<Route path="voucher" element={isForm?<Form formm={setIsForm}/> : <Voucher formm={setIsForm}/>}/>
						<Route path="orders" element={<Orders/>}/>
						<Route path="/" element={<Intro/>} />
					</Routes>
				</section>

				{/* {isForm ? (
					<Form formm={setIsForm} />
				) : (
					<Voucher formm={setIsForm} />
				)} */}

				<Footer />

				{/* <div id='mybutton'>
						<HashLink smooth to='/signin'>
					<button className='feedback'>
							Sign In
					</button>
						</HashLink>
				</div> */}
			</div>
			<Modal />
		</>
	);
};

export default User;
