import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
	asyncHomepage,
} from './store/Actions/adminActions';
import { AppAppBar, LinearBg } from '../src/components/landingpage';
import { blue } from '@mui/material/colors';

const Layout = () => {
	const dispatch = useDispatch();
	const { admin, products, isAuth } = useSelector(state => state.adminReducer);

	const [mode, setMode] = React.useState('light');
	const defaultTheme = createTheme({ palette: { mode } });
	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	const theme = createTheme({
		palette: {
			// primary: '#e3f2fd',
			primary: {
				main: blue[500],
			},
			tonalOffset: 0.5,
		},
	});
	useEffect(() => {
		if (!admin) {
			dispatch(asyncCurrentAdmin());
		} else {
			if (!products || products.length <= 0) {
				dispatch(asyncAllProduct());
			}
		}
	}, [isAuth]);

	return (
		<div>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
				<Outlet mode={mode} toggleColorMode={toggleColorMode} />
			</ThemeProvider>
		</div>
	);
};

export default Layout;
