import "./review.css";
import './../../button.css';

import Customer1 from './../../assets/customer 1.png';
import Customer2 from './../../assets/customer 2.png';
import ReviewD from './../../assets/review design.png';


const Review = () => {
	return (
		<div id='review' className='reviews'>
			<h3 className='grand-hotel'>Customer Reviews</h3>
			<div className='cards'>
				<div className='review-card'>
					<img src={Customer2} alt='Customer' />
					<h6 className='grand-hotel'>John Peter</h6>
					<p className='montserrat'>
					Absolutely love Coffee Time! The atmosphere is cozy, the coffee is top-notch, and the staff is incredibly friendly. It's become my go-to spot for a perfect cup of joe and a quiet place to work or catch up with friends.
					</p>
				</div>
				<div className='review-card'>
					<img src={Customer1} alt='Customer' />
					<h6 className='grand-hotel'>Ella Thomson</h6>
					<p className='montserrat'>
					The coffee at Coffee Time is a revelation! Every sip is a journey through rich, nuanced flavors that wake up my taste buds. Whether it's a perfectly pulled espresso or a meticulously brewed pour-over, I'm consistently impressed by the dedication to quality.
					</p>
				</div>
			</div>
			{/* <div className='bg-icons'>
				<img src={Cup}alt='cup' id='review-cup' />
				<img
					src={Bean}
					alt='bean'
					id='review-bean1'
				/>
				<img src={Jar}alt='jar' id='review-jar' />
			</div> */}
			<img
				src={ReviewD}
				alt='design'
				className='reviews-design'
			/>
		</div>
	);
};

export default Review;
