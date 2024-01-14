import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AdminNav from "./AdminNav";
import "./admin.css";
import Employee from "../Admin Forms/Employee";
import Job from "../Admin Forms/Job";
import Product from "../Admin Forms/Product";
import RawItem from "../Admin Forms/RawItem";
import RawItemStock from "../Admin Forms/RawItemStock";
import Store from "../Admin Forms/Store";
import Supplier from "../Admin Forms/Supplier";
import Voucher from "../Admin Forms/Voucher";
import Table from "../Data Tables/Table";
import UserTable from "../Data Tables/UserTable";

const Admin = () => {
	return (
		<div>
			{/* <div style={{'color':'red'}}>ADD THE CODE FOR STORING IMAGES IN DATABASE THROUGH CLOUD OR ANYTHING ELSE </div> */}
			<Navbar
				profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirwPXcQ5lYts8qcm8Qtqyw2KXfEwlME2XPQ&usqp=CAU'
				menu={false}
			/>
			<div className='formSection'>
				<AdminNav />
				<div className='section'>
					<Routes>
						<Route path="/forms">
						<Route exact path='employee' element={<Employee task='Add'/>} />
						<Route exact path='job' element={<Job task='Add'/>} />
						<Route exact path='supplier' element={<Supplier task='Add'/>} />
						<Route exact path='item' element={<RawItem task='Add'/>} />
						<Route exact path='itemstock' element={<RawItemStock task='Add'/>}/>
						<Route exact path='voucher' element={<Voucher />} />
						<Route exact path='store' element={<Store task='Add'/>} />
						<Route exact path='product' element={<Product task='Add'/>} />
						<Route exact path='employee/:id' element={<Employee task='Update'/>} />
						<Route exact path='job/:id' element={<Job task='Update'/>} />
						<Route exact path='supplier/:id' element={<Supplier task='Update'/>} />
						<Route exact path='item/:id' element={<RawItem task='Update'/>} />
						<Route exact path='itemstock/:id' element={<RawItemStock task='Update'/>}/>
						<Route exact path='voucher/:id' element={<Voucher />} />
						<Route exact path='store/:id' element={<Store task='Update'/>} />
						<Route exact path='product/:id' element={<Product task='Update'/>} />
						<Route exact path='product/:id' element={<Product task='Update'/>} />
						</Route>

						<Route path="/all">
						<Route exact path='products' element={<Table collection='products'/>} />
						<Route exact path='employees' element={<Table collection='employees'/>} />
						<Route exact path='jobs' element={<Table collection='jobs'/>} />
						<Route exact path='items' element={<Table collection='items'/>} />
						<Route exact path='itemstocks' element={<Table collection='itemStocks'/>} />
						<Route exact path='stores' element={<Table collection='stores'/>} />
						<Route exact path='suppliers' element={<Table collection='suppliers'/>} />
						<Route exact path='vouchers' element={<Table collection='vouchers'/>} />
						<Route exact path='users' element={<UserTable/>} />
						</Route>

					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Admin;
