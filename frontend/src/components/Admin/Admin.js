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

const Admin = () => {
	return (
		<div>
			<div style={{'color':'red'}}>ADD THE CODE FOR STORING IMAGES IN DATABASE THROUGH CLOUD OR ANYTHING ELSE </div>
			<Navbar
				profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirwPXcQ5lYts8qcm8Qtqyw2KXfEwlME2XPQ&usqp=CAU'
				menu={false}
			/>
			<div className='formSection'>
				<AdminNav />
				<div className='section'>
					<Routes>
						<Route exact path='employeeForm' element={<Employee task='Add'/>} />
						<Route exact path='jobForm' element={<Job task='Add'/>} />
						<Route exact path='supplierForm' element={<Supplier task='Add'/>} />
						<Route exact path='itemForm' element={<RawItem task='Add'/>} />
						<Route exact path='itemstockForm' element={<RawItemStock task='Add'/>}/>
						<Route exact path='voucherForm' element={<Voucher />} />
						<Route exact path='storeForm' element={<Store task='Add'/>} />
						<Route exact path='productForm' element={<Product task='Add'/>} />


						<Route exact path='allproduct' element={<Table collection='Product'/>} />
						<Route exact path='allemployee' element={<Table collection='Employee'/>} />
						<Route exact path='alljob' element={<Table collection='Job'/>} />
						<Route exact path='allitem' element={<Table collection='Item'/>} />
						<Route exact path='allitemstock' element={<Table collection='ItemStock'/>} />
						<Route exact path='allstore' element={<Table collection='Store'/>} />
						<Route exact path='allsupplier' element={<Table collection='Supplier'/>} />
						<Route exact path='allvoucher' element={<Table collection='Voucher'/>} />


						<Route exact path='employeeForm/:id' element={<Employee task='Update'/>} />
						<Route exact path='jobForm/:id' element={<Job task='Update'/>} />
						<Route exact path='supplierForm/:id' element={<Supplier task='Update'/>} />
						<Route exact path='itemForm/:id' element={<RawItem task='Update'/>} />
						<Route exact path='itemstockForm/:id' element={<RawItemStock task='Update'/>}/>
						<Route exact path='voucherForm/:id' element={<Voucher />} />
						<Route exact path='storeForm/:id' element={<Store task='Update'/>} />
						<Route exact path='productForm/:id' element={<Product task='Update'/>} />
						<Route exact path='productForm/:id' element={<Product task='Update'/>} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Admin;
