import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LinearBg } from '../landingpage';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
} from '../../store/Actions/adminActions';

const AuthLayout = () => {
	const { isAuth, admin, products } = useSelector(state => state.adminReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (!admin) {
			dispatch(asyncCurrentAdmin());
		} else {
			navigate('/admin/homepage')
			if (!products || products.length <= 0) {
				dispatch(asyncAllProduct());
			}
		}
	}, [isAuth]);

	return (
		<>
			<LinearBg />
			<Outlet />
		</>
	);
};

export default AuthLayout;
