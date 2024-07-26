import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LinearBg } from '../landingpage';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
} from '../../store/Actions/adminActions';

const AuthLayout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { products, isAuth, admin, success, message } = useSelector(
		state => state.adminReducer
	);
	useEffect(() => {
		if (!admin) {
			dispatch(asyncCurrentAdmin());
		} else {
			if (!products || products.length <= 0) {
				console.log('all products aajoa ek bar');
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
