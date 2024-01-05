import "./blackC.css";
import './../../button.css';

import BlackImg from './../../assets/black coffee.png';
import BDesign1 from './../../assets/branch up design.png';
import BDesign2 from './../../assets/branch design down.png';

import Button from './../Button/Button';



const BlackC = () => {
	return (
		<div id='blackC' className='black-coffee'>
			<img
				src={BDesign2}
				alt='Branch design'
				className='black-design-up'
			/>
			<div className='black-head'>
				<h3 className='grand-hotel'>
					Black&nbsp;Coffee
				</h3>
				{/* <button className='button montserrat black-c' onClick={()=>{alert("Order Placed ✅")}}>
					Order Now 
                    <span></span>
					<span></span>
					<span></span>
					<span></span>
				</button> */}
				<Button/>
			</div>
			<div className='black-content content'>
				<img
					src={BlackImg}
					alt='Black Coffee'
					className='shd'
				/>
				<p className='montserrat'>
				We offer a diverse selection of black coffee. From single-origin and blended beans to various brewing methods, including pour-over, French press, and AeroPress, we cater to a spectrum of coffee preferences. Our black coffee comes in light, medium, and dark roast profiles, each offering a unique flavor experience. You can also customize your black coffee.
				</p>
			</div>
			<img
				src={BDesign1}
				alt='Branch design'
				className='black-design-down'
			/>
			<div className='bg-icons'>
				{/* <img src={Cup} alt='cup' id='black-cup' />
				<img src={Jar} alt='jar' id='black-jar' />
				<img
					src={Bean}
					alt='bean'
					id='black-bean1'
				/>
				<img
					src={Bean}
					alt='bean'
					id='black-bean2'
				/>
				<img
					src={Bean}
					alt='bean'
					id='black-bean3'
				/>
				<img
					src={Bean}
					alt='bean'
					id='black-bean4'
				/> */}
			</div>
		</div>
	);
};

export default BlackC;
