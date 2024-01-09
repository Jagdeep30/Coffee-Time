import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import User from "./components/User";
import SignInForm from "./components/SignIn Form/SignInForm";
import SignUpForm from "./components/SignUp Form/SignUpForm";

const App = () => {
	return (
		<Router >
			<Routes>
				<Route path="/" element={<Navigate to="/dashboard" />} />
				<Route exact path='dashboard/*' element={<User />} />
				<Route exact path='admin/*' element={<Admin />} />
				<Route exact path="signin" element={<SignInForm />} />
				<Route exact path="signup" element={<SignUpForm />} />
			</Routes>
		</Router>
	);
};

export default App;
