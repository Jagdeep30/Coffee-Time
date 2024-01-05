import "./App.css";
import Admin from "./components/Admin/Admin";
import User from "./components/User";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/'>
					<Route exact path='dashboard/*' element={<User />} />
					<Route exact path='admin/*' element={<Admin />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
