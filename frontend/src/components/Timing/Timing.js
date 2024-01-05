import "./timing.css";
import './../../button.css';

import BDesign1 from './../../assets/branch up design.png';
// import BDesign2 from './../../assets/branch down design.png';
import BDesign2 from './../../assets/branch design down.png';




const Timing = () => {
	return (
		<div className='timings' id="timings">
			<img
				src={BDesign2}
				alt='Timing design'
				className='timing-design-up'
			/>
			<h3 className='grand-hotel'>We are Open</h3>
			<div className='weekday'>
				<p className='montserrat day'>Monday - Friday</p>
				<p className='montserrat time'>9:00 am - 10:00 pm</p>
			</div>
			<div className='weekend'>
				<p className='montserrat day'>Saturday - Sunday</p>
				<p className='montserrat time'>10:00 am - 10:10 pm</p>
			</div>
			<img
				src={BDesign1}
				alt='Timing design'
				className='timing-design-down'
			/>
			{/* <div className='bg-icons'>
				<img src={Cup} alt='cup' id='timing-cup' />
				<img
					src={Bean}
					alt='bean'
					id='timing-bean1'
				/>
				<img
					src={Bean}
					alt='bean'
					id='timing-bean2'
				/>
				<img src={Jar} alt='jar' id='timing-jar' />
			</div> */}
		</div>
	);
};

export default Timing;
