import React from 'react';
import WarningPng from '../../assets/images/warning.png';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAllProduct } from '../../store/Actions/adminActions';
import { Box, Container } from '@mui/system';
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

const EditProductForm = ({
	editProductForm,
	mode,
	setEditProductForm,
	product,
}) => {
	const { isAuth, message, success, admin } = useSelector(
		state => state.adminReducer
	);
	const intialEditValue = {
		productName: product.productName,
		price: '',
		quantity: '',
		description: '',
		status: 'Available',
	};
	const [error, setError] = React.useState(null);
	const [formValues, setFormValues] = React.useState(intialEditValue);
	console.log(formValues);
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
	console.log(mode);
	// console.log(product);
	return (
		<Container
			className={`${mode === 'light' ? 'red' : 'green'} rounded px-3 ${
				editProductForm ? 'block' : 'hidden'
			} transition-all absolute flex items-center justify-center w-full h-full top-0 left-0`}
			backgroundColor={'primary'}
		>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmitEditProductForm}
				sx={{ mt: 3 }}
			>
				<Grid container spacing={0}>
					<Grid item xs={6} sm={6}>
						<TextField
							value={formValues.firstname}
							onChange={handleChange}
							hiddenLabel
							id="filled-hidden-label-small"
							defaultValue={formValues.productName}
							variant="filled"
							size="small"
							helperText="Product Name"
							autoComplete="given-name"
							name="firstname"
							required
							fullWidth
							autoFocus
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							defaultValue="Small"
							variant="filled"
							size="small"
							helperText="Price"
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							defaultValue="Small"
							variant="filled"
							size="small"
							helperText="Quantity"
						/>
					</Grid>
					<Grid item="true" xs={5} sm={6}>
						<TextField
							id="standard-basic"
							label="Standard"
							variant="standard"
						/>
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
		</Container>
	);
};

export default EditProductForm;
