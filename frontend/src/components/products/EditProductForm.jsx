import React from 'react';
import WarningPng from '../../assets/images/warning.png';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAllProduct } from '../../store/Actions/adminActions';
import { Box } from '@mui/system';
import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const EditProductForm = ({ editProductForm, setEditProductForm, product }) => {
	const { isAuth, message, success, admin } = useSelector(
		state => state.adminReducer
	);
	const [error, setError] = React.useState(null);
	const [formValues, setFormValues] = React.useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		contact: '',
		city: '',
		gender: '',
	});
	const handleChange = e => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
		setError(null);
	};
	const dispatch = useDispatch();
	// const handleSubmitEditProductForm = () => {
	// 	setTimeout(() => {
	// 		dispatch(asyncAllProduct());
	// 	}, 1000);
	// };
	const handleSubmitEditProductForm = async e => {
		e.preventDefault();
		const hasError = Object.keys(formValues).reduce((acc, field) => {
			if (formValues[field].trim() === '') {
				acc = true;
			}
			return acc;
		}, false);
		if (hasError) {
			setError('All fields must be Filled !.');
			return;
		}
		// SignUP Api code likhunga
		try {
			dispatch(asyncSignUpAdmin(formValues));
			if (success) {
				setFormValues({
					firstname: '',
					lastname: '',
					email: '',
					password: '',
					contact: '',
					city: '',
					gender: '',
				});
				navigate('/admin/homepage');
				dispatch(asyncSetMessage());
			}
		} catch (error) {
			console.error('Error during signup:', error.message);
		}
	};
	// console.log(product);
	return (
		<div
			className={`bg-gray-400 px-3 ${
				editProductForm ? 'block' : 'hidden'
			} transition-all absolute flex items-center justify-center w-full h-full top-0 left-0`}
		>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmitEditProductForm}
				sx={{ mt: 3 }}
			>
				<Grid container spacing={2}>
					<Grid item xs={5} sm={6}>
						<TextField
							value={formValues.firstname}
							onChange={handleChange}
							autoComplete="given-name"
							name="firstname"
							required
							id="firstName"
							label="First Name"
							autoFocus
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							value={formValues.lastname}
							onChange={handleChange}
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastname"
							autoComplete="family-name"
						/>
					</Grid>
					<Grid item xs={5}>
						<TextField
							value={formValues.email}
							onChange={handleChange}
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
					</Grid>
					<Grid item xs={5}>
						<TextField
							value={formValues.password}
							onChange={handleChange}
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="new-password"
						/>
					</Grid>
					<Grid item="true" xs={5}>
						<TextField
							value={formValues.contact}
							onChange={handleChange}
							required
							fullWidth
							id="contactNumber"
							label="Contact Number"
							name="contact"
							type="number"
							autoComplete="family-name"
						/>
					</Grid>
					<Grid item="true" xs={5} sm={6}>
						<TextField
							value={formValues.city}
							onChange={handleChange}
							required 
							fullWidth 
							id="cityName" 
							label="City Name" 
							name="city" 
							autoComplete="family-name" 
						/>
					</Grid>
					<Grid item="true" xs={5} sm={6}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Gender *</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={formValues.gender}
								label="Age"
								name="gender"
								onChange={handleChange}
							>
								<MenuItem value={'Male'}>Male</MenuItem>
								<MenuItem value={'Female'}>Female</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Typography
					sx={{
						mt: 2,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						backgroundColor: 'rgba(202, 100, 100, 0.836)',
						borderRadius: 1,
					}}
					component="h3"
					variant="h6"
				>
					{error}
				</Typography>
				<Button
 					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 2, mb: 2 }}
				>
					Sign Up
				</Button>
				{message && (
					<Typography
						sx={{
							pt: 2,
							fontWeight: '800',
							color: 'green',
						}}
						component="h3"
						variant="h6"
					>
						{message}
					</Typography>
				)}
			</Box>
		</div>
	);
};

export default EditProductForm;
