import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import User from "./components/User";
import SignInForm from "./components/SignIn Form/SignInForm";
import SignUpForm from "./components/SignUp Form/SignUpForm";
import { useSelector } from "react-redux";

const App = () => {
	const login = useSelector(state=>state.login);
	return (
		<Router >
			<Routes>
				<Route exact path="signin" element={<SignInForm />} />
				<Route exact path="signup" element={<SignUpForm />} />
				<Route exact path='dashboard/*' element={<User />} />
				<Route exact path='admin/*' element={login?<Admin />:<SignInForm/>} />
				<Route path="/" element={<Navigate to="/dashboard" />} />
			</Routes>
		</Router>
	);
};

export default App;
