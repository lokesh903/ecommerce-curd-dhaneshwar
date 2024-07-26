import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	AuthLayout,
	ForgetPassword,
	ResetPassword,
	SignIn,
	SignUp,
} from './components/auth';
import Layout from './Layout';
import {
	AdminHomepage,
	AdminLayout,
	FilterProductPage,
	ProductPreview,
} from './components/admin';
import { useDispatch, useSelector } from 'react-redux';
import ProductView from './components/admin/ProductView';

function App() {
	const { isAuth } = useSelector(state => state.adminReducer);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	if (isAuth) {
	// 		dispatch(asyncCurrentAdmin());
	// 	}
	// }, []);
	// console.log(isAuth);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" element={<LandingPage />} />
						{/* {isAuth ? ( */}
						<Route path="/admin" element={<AdminLayout />}>
							<Route path="/admin/homepage" element={<AdminHomepage />} />
							<Route path="/admin/filter" element={<FilterProductPage />} />
							<Route path="/admin/pro" element={<ProductPreview />} />
						</Route>
						{/* ) : ( */}
						<Route path="/admin" element={<AuthLayout />}>
							<Route path="/admin/prod" element={<ProductView />} />
							<Route path="/admin/auth/signin" element={<SignIn />} />
							<Route path="/admin/auth/signup" element={<SignUp />} />
							<Route
								path="/admin/auth/forget-password"
								element={<ForgetPassword />}
							/>
							<Route
								path="/admin/auth/reset-password"
								element={<ResetPassword />}
							/>
						</Route>
						{/* )} */}
					</Route>
				</Routes>
				{/* <Toaster position="top-center" reverseOrder={false} /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
