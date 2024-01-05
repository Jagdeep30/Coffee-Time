import "./navbar.css";
import Logo from "./../../assets/updatedLogo.png";
// import {Link} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = (props) => {
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
				

				<div className="myprofile">
					<img src={props.profileImg} alt="Me" className='profileImg'/>
				</div>


				<img src={Logo} alt='Company Logo' className='logo' />
				{props.menu?<div className='collapse navbar-collapse' id='navbarToggler'>
					<ul className='menu navbar-nav me-auto mb-2 mb-lg-0 mt-2 ps-3'>
						<li className='nav-item item montserrat'>
							<HashLink smooth className='nav-link' to='/dashboard'>
								Home
							</HashLink>
						</li>
						<li className='nav-item item montserrat'>
							<HashLink
								smooth
								className='nav-link'
								to='/dashboard/review#review'
							>
								About
							</HashLink>
						</li>

						<li className='nav-item item montserrat'>
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
						</li>

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
