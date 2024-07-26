import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
	const [formValues, setFormValues] = React.useState({
		email: '',
	});
	const handleChange = e => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();

		// submit logic
		setFormValues({ email: '' });
	};

	return (
		<Container
			component="main"
			maxWidth="xs"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<CssBaseline />
			<Box
				sx={{
					pt:25,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Forget Password
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						onChange={handleChange}
						value={formValues.email}
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Send Link
					</Button>
					<Grid container>
						<Grid item>
							<Link to="/admin/auth/signup" className="text-blue-500">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
