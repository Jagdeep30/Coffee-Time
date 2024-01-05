import "./whiteC.css";
import "./../../button.css";

import WhiteImg from "./../../assets/white coffee.png";

import Button from './../Button/Button';

const WhiteC = () => {
	return (
		<div id="whiteC" className='white-coffee'>
			<div className='white-head'>
				<h3 className='grand-hotel'>White&nbsp;{/* <br /> */}Coffee</h3>
				{/* <button
					className='button montserrat'
					onClick={() => {
						alert("Order Placed ✅");
					}}
				>
					Order Now <span></span>
					<span></span>
					<span></span>
					<span></span>
				</button> */}
				<Button/>
			</div>
			<div className='white-content content'>
				<img src={WhiteImg} alt='White Coffee' className='shd' />
				<p className='montserrat'>
				We craft exquisite white coffees that offer a creamy, luxurious experience. Our baristas expertly prepare a range of white coffee options, from classic lattes and cappuccinos to creative specialty beverages. We use high-quality espresso as the base and combine it with your choice of steamed milk for a velvety texture. Come savor the perfect blend of espresso and silky milk.
				</p>
			</div>
			{/* <div className='bg-icons'>
				<img src={Cup} alt='cup' id='white-cup' />
				<img
					src={Bean}
					alt='bean'
					id='white-bean1'
				/>
				<img
					src={Bean}
					alt='bean'
					id='white-bean2'
				/>
				<img src={Jar} alt='jar' id='white-jar' />
			</div> */}
		</div>
	);
};

export default WhiteC;
