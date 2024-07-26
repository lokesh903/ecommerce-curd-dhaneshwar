import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppAppBar, Features, Footer, Hero } from './components/landingpage';
import { useEffect, useState } from 'react';
import { asyncCurrentAdmin, asyncHomepage } from './store/Actions/adminActions';
import { useDispatch } from 'react-redux';

export default function LandingPage() {
	const [mount, setMount] = useState(false);
	const dispatch = useDispatch();
	const [mode, setMode] = React.useState('dark');
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
		// localStorage.setItem('mode', mode);
	};
	useEffect(() => {
		localStorage.setItem('mode', mode);
	}, [toggleColorMode]);

	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		< >
			<CssBaseline />
			<Hero />
			<Box sx={{ bgcolor: 'background.default' }}>
				<Features />
				<Divider />
				<Divider />
				<Footer />
			</Box>
		</>
	);
}
