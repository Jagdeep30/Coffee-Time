import "./hotC.css";
import './../../button.css';

import HotCImg from './../../assets/hot coffee.png';
import HotCD from './../../assets/hot coffee design 3.png';

import Button from './../Button/Button';

const HotC = () => {
	return (
		<div id="hotC" className='hot-coffee'>
			<img
				src={HotCD}
				alt=''
				className='hot-coffee-design'
			/>
			<div className='hotC-content content'>
				<img
					src={HotCImg}
					alt='Hot Coffee'
					className='shd'
				/>
				<p className='montserrat'>
				Hot coffee is our specialty. We take pride in serving freshly brewed, piping hot coffee that warms both the body and soul. Whether you're a fan of rich, dark roasts, creamy lattes, or aromatic pour-overs, we've got a steaming cup of coffee waiting for you. Join us to experience the comforting warmth and rich flavors of hot coffee at its finest.
				</p>
			</div>
			<div className='hot-head'>
				<h3 className='grand-hotel'>
					Hot&nbsp;{/* <br /> */}Coffee
				</h3>
				{/* <button className='button montserrat' onClick={()=>{alert("Order Placed ✅")}}>
					Order Now <span></span>
					<span></span>
					<span></span>
					<span></span>
				</button> */}
				<Button/>
			</div>
			{/* <div className='bg-icons'>
				<img src={Cup} alt='cup' id='hot-cup' />
				<img src={Jar} alt='jar' id='hot-jar' />
				<img
					src={Bean}
					alt='bean'
					id='hot-bean1'
				/>
				<img
					src={Bean}
					alt='bean'
					id='hot-bean2'
				/>
			</div> */}
		</div>
	);
};

export default HotC;
