import "./navbar.css";
import Logo from "./../../assets/updatedLogo.png";
// import {Link} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import downloadImage from "../../DownloadImage";

const Navbar = (props) => {
	const user = useSelector(state=>state.user);
	const cartSize = useSelector(state => state.cartSize);
	const login = useSelector(state => state.login);
	const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26NjQaonqTRt7BXD_87Iuukitk_kcGBv3w&usqp=CAU");
	
	const getImage = async()=>{
		let img = login?await downloadImage(user.profileImage):image;
		setImage(img);
	}
	useEffect(()=>{
		getImage();
	},[user])
	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<div className='container-fluid d-flex flex-row-reverse justify-content-between ps-3 pe-4 mt-2'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarToggler'
					aria-controls='navbarTogglerDemo03'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				
				<Link to='/dashboard/updateProfile'>
				<div className="myprofile">
					<img src={image} alt="Me" className='profileImg'/>
				</div>
				</Link>


				{!login && <Link to='/signin' className="signin montserrat item">Login/SignUp</Link>}


				{!props.menu?<img src={Logo} alt='Company Logo' className='logo' /> :
				<Link to='/dashboard/orders'>
				<div className="position-relative">
				<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512" className="item cart"><path fill="#29a19c" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
				</svg><span className="align-element translate-middle badge rounded-pill bg-danger">{cartSize!==0?cartSize:''}</span></div></Link>
				}




				{props.menu?<div className='collapse navbar-collapse' id='navbarToggler'>
					<ul className='menu navbar-nav me-auto mb-2 mb-lg-0 mt-2 ps-3'>
						<li className='nav-item item montserrat'>
							<HashLink smooth className='nav-link' to='/dashboard'>
								Home
							</HashLink>
						</li>
						{/* <li className='nav-item item montserrat'>
							<HashLink
								smooth
								className='nav-link'
								to='/dashboard/review#review'
							>
								About
							</HashLink>
						</li> */}
						<li className='nav-item item montserrat'>
							<HashLink
								smooth
								className='nav-link'
								to='/dashboard/products'
							>
								Products
							</HashLink>
						</li>

						{/* <li className='nav-item item montserrat'>
							<NavDropdown title='Menu' id='basic-nav-dropdown'>
								<NavDropdown.Item>
									<HashLink smooth to='/dashboard/blackC#blackC'>
										Black Coffee
									</HashLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<HashLink smooth to='/dashboard/whiteC#whiteC'>
										White Coffee
									</HashLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<HashLink smooth to='/dashboard/hotC#hotC'>
										Hot Coffee
									</HashLink>
								</NavDropdown.Item>
							</NavDropdown>
						</li> */}

						<li className='nav-item item montserrat'>
							<HashLink
								smooth
								className='nav-link'
								to='/dashboard/timings#timings'
							>
								Timings
							</HashLink>
						</li>
						<li className='nav-item item montserrat'>
							<HashLink
								smooth
								className='nav-link'
								to='/dashboard/branches#branches'
							>
								Shop
							</HashLink>
						</li>
						<li className='nav-item item montserrat'>
							<a className='nav-link' href='#footer'>
								Contact
							</a>
						</li>
					</ul>
				</div>:''}
			</div>
		</nav>
	);
};

export default Navbar;
