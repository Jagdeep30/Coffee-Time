import "./voucher.css";
import './../../button.css';

import voucherImg from './../../assets/vouch.png';


const Voucher = (props) => {
	return (
		<div className='voucher'>
			
			<h3 className='grand-hotel'>Voucher</h3>
			<img src={voucherImg} alt='Voucher' className='voucher-img'/>
			<button className='button montserrat' onClick={()=>{console.log(props.formm(true))}}>
				Claim Voucher <span></span>
				<span></span>
				<span></span>
				<span></span>
			</button>

			{/* <div className='bg-icons'>
				<img
					src={Cup}
					alt='cup'
					id='voucher-cup'
				/>
				<img
					src={Bean}
					alt='bean'
					id='voucher-bean1'
				/>
				<img
					src={Jar}
					alt='jar'
					id='voucher-jar'
				/>
			</div> */}
		</div>
	);
};

export default Voucher;
