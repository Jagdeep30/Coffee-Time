import "./footer.css";

import Logo from "./../../assets/updatedLogo.png";
import BDesign2 from "./../../assets/branch down design 2.png";

import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SupportForm from "../SupportForm/SupportForm";

const Footer = () => {
	return (
		<footer>
			<div id='footer' className='footer'>
				<img
					src={BDesign2}
					alt='Branch design'
					className='footer-design-down'
				/>
				<div className='foot'>
					<img src={Logo} alt='' className='logo' />
					<div className='info'>
						<div className='information info-card'>
							<p className='montserrat'>Information.</p>
							<ul>
								<li className='montserrat'>
								<Link className='nav-link' to='/review'>
								About
							</Link>
								</li>
								<li className='montserrat'>
								<Link className='nav-link' to='/branches'>
								Shop
							</Link>
								</li>
								<li className='montserrat'>
								<NavDropdown title="Menu" id="basic-nav-dropdown">
								<NavDropdown.Item href="/blackC">Black Coffee</NavDropdown.Item>
								<NavDropdown.Item href="/whiteC">White Coffee</NavDropdown.Item>
								<NavDropdown.Item href="/hotC">Hot Coffee</NavDropdown.Item>
							</NavDropdown>
								</li>
								<li className='montserrat'>
								<a className='nav-link' href='#footer'>
								Contact
							</a>
								</li>
								
							</ul>
						</div>
						<div className='contact info-card'>
							<p className='montserrat'>Contact Us.</p>
							<ul>
								<li className='montserrat'>
									{/* <a href='/'>Support</a> */}
									<SupportForm/>
									
								</li>
								<li className='montserrat'>
									<a href='/'>coffeetime@coffeetime.com</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='foot-nav'>
					<nav className='navbar'>
						<ul className='menu'>
							<li className='item montserrat'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
							</li>
							<li className='item montserrat'>
							<Link className='nav-link' to='/review'>
								About
							</Link>
							</li>
							<li className='item montserrat'>
							<NavDropdown title="Menu" id="basic-nav-dropdown">
								<NavDropdown.Item href="/blackC">Black Coffee</NavDropdown.Item>
								<NavDropdown.Item href="/whiteC">White Coffee</NavDropdown.Item>
								<NavDropdown.Item href="hotC">Hot Coffee</NavDropdown.Item>
							</NavDropdown>
							</li>
							<li className='item montserrat'>
							<Link className='nav-link' to='/timings'>
								Timings
							</Link>
							</li>
							<li className='item montserrat'>
							<Link className='nav-link' to='/branches'>
								Shop
							</Link>
							</li>
							<li className='item montserrat'>
							<a className='nav-link' href='#footer'>
								Contact
							</a>
							</li>
						</ul>
					</nav>
					<div className='social'>
						<a href="https://www.facebook.com" target="/blank"><i className='ri-facebook-fill'></i></a>
						<a href="https://www.instagram.com" target="/blank"><i className='ri-instagram-line'></i></a>
						<a href="https://www.twitter.com" target="/blank"><i className='ri-twitter-fill'></i></a>
						<a href="https://www.youtube.com" target="/blank"><i className='ri-youtube-fill'></i></a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
