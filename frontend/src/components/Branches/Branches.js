import "./branches.css";
import './../../button.css';

import BDesign1 from './../../assets/branch up design.png';
// import BDesign2 from './../../assets/branch down design.png';
import BDesign2 from './../../assets/branch design down.png';
// import NY from './../../assets/new york.png';
// import Jakarta from './../../assets/jakarta.png';
// import Paris from './../../assets/paris.png';
import { useEffect, useState } from "react";
import axios from "axios";
import downloadImage from "../../DownloadImage";

const baseURL = 'https://coffee-time-one.vercel.app/api/v1/';



const Branches = () => {
	const [branch,setBranch] = useState([]);

	const getData = async()=>{
		let result = await axios.get(baseURL+'/admin/stores');
		const branchWithImages = await Promise.all(
			result.data.data.map(async (val) => {
			  let url = await downloadImage(val.storeImage);
			  val.storeImage = url;
			  return val;
			})
		  );

		setBranch(branchWithImages);
		// console.log(result.data.data);
	}

	useEffect(()=>{
		getData();
	},[]);
	return (
		<div id='branches' className='branches'>
			<img
				src={BDesign1}
				alt='Branch design'
				className='branch-design-up'
			/>
			<h3 className='grand-hotel'>Our Branches</h3>
			<div className='location-cards d-flex justify-content-evenly container'>

				{branch.map((val)=>{
					return(
						<div key={val._id} className='branch-card'>
							<img
								src={val.storeImage}
								alt={val.storeName}
							/>
							<p className='branch-name montserrat'>{val.storeName}</p>
						</div>
					);
				})}



				{/* <div className='branch-card'>
					<img
						src={NY}
						alt='New York Branch'
					/>
					<p className='branch-name montserrat'>New York</p>
					<p className='branch-info montserrat'>
					Experience the heart of the city that never sleeps with our New York branch, where the hustle and bustle of Manhattan meets the perfect cup of coffee.
					</p>
				</div>
				<div className='branch-card'>
					<img
						src={Jakarta}
						alt='Jakarta Branch'
					/>
					<p className='branch-name montserrat'>Jakarta</p>
					<p className='branch-info montserrat'>
					Discover the vibrant flavors of Indonesia at our Jakarta branch, where the warmth of local hospitality meets international coffee excellence.
					</p>
				</div>
				<div className='branch-card'>
					<img src={Paris} alt='Paris Branch' />
					<p className='branch-name montserrat'>Paris</p>
					<p className='branch-info montserrat'>
					Indulge in a Parisian coffee experience at our branch in the city of romance, where each sip is a taste of la vie en rose.
					</p>
				</div> */}
			</div>
			<img
				src={BDesign2}
				alt='Branch design'
				className='branch-design-down'
			/>
			{/* <div className='bg-icons'>
				<img src={Cup} alt='cup' id='branch-cup' />
				<img
					src={Bean}
					alt='bean'
					id='branch-bean1'
				/>
				<img
					src={Bean}
					alt='bean'
					id='branch-bean2'
				/>
				<img src={Jar} alt='jar' id='branch-jar' />
			</div> */}
		</div>
	);
};

export default Branches;
