import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import SiteMarkImg from '../../assets/svgs/sitemark.svg';
import SiteLogo from '../../assets/svgs/sitelogo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavFilter, SearchBar } from '.';
import { Profile } from '../admin';
import { asyncLogoutAdmin } from '../../store/Actions/adminActions';
function AppAppBar({ mode, toggleColorMode }) {
	const location = useLocation();
	const paths = ['/admin/homepage', '/admin/filter'];
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = newOpen => () => {
		setOpen(newOpen);
	};
	const { isAuth } = useSelector(state => state.adminReducer);
	// console.log(isAuth);

	const scrollToSection = sectionId => {
		const sectionElement = document.getElementById(sectionId);
		const offset = 128;
		if (sectionElement) {
			const targetScroll = sectionElement.offsetTop - offset;
			sectionElement.scrollIntoView({ behavior: 'smooth' });
			window.scrollTo({
				top: targetScroll,
				behavior: 'smooth',
			});
			setOpen(false);
		}
	};

	return (
		<div>
			<AppBar
				position="fixed"
				sx={{
					boxShadow: 0,
					bgcolor: 'transparent',
					backgroundImage: 'none',
					mt: 2,
					zIndex: '45',
				}}
			>
				<Container maxWidth="lg">
					<Toolbar
						variant="regular"
						sx={theme => ({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							flexShrink: 0,
							borderRadius: '999px',
							bgcolor:
								theme.palette.mode === 'light'
									? 'rgba(255, 255, 255, 0.4)'
									: 'rgba(0, 0, 0, 0.4)',
							backdropFilter: 'blur(24px)',
							maxHeight: 40,
							border: '1px solid',
							borderColor: 'divider',
							boxShadow:
								theme.palette.mode === 'light'
									? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
									: '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
						})}
					>
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								ml: '-18px',
								px: 0,
							}}
						>
							<NavLink to="/" className="max-sm:hidden block">
								<SiteMarkImg width="150" height="auto" />
							</NavLink>
							<NavLink to="/" className="max-sm:block w-1/5 hidden">
								{/* <SiteLogo width="auto" height="120" /> */}
								AB
							</NavLink>

							{/* It Navigation Filter */}
							{/* {isAuth && <NavFilter mode={mode} />} */}
							{isAuth && (
								<>
									{paths.includes(location.pathname) && (
										<Box sx={{ width: 'fit-content' }}>
											<SearchBar mode={mode} />
										</Box>
									)}
								</>
							)}

							{isAuth && (
								<div className="max-sm:hidden flex">
									<NavLink
										to="/admin/pro"
										className="nmwbtn py-[5px] w-auto mr-2 px-4 "
									>
										<Typography variant="body2" color="text.primary">
											Proview
										</Typography>
									</NavLink>
									<NavLink
										to="/admin/filter"
										className="nmwbtn py-[5px] w-auto mr-2 px-4 "
									>
										<Typography variant="body2" color="text.primary">
											Filter
										</Typography>
									</NavLink>
									<NavLink
										to="/admin/homepage"
										className="nmwbtn py-[5px] w-auto px-4"
									>
										<Typography variant="body2" color="text.primary">
											Products
										</Typography>
									</NavLink>
								</div>
							)}
						</Box>
						<Box
							sx={{
								width: 'auto',
								display: { xs: 'none', md: 'flex' },
								gap: 0.5,
								margin: '0 20px',
								alignItems: 'center',
							}}
						>
							<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
							{isAuth ? (
								<Profile />
							) : (
								<>
									{/* <NavLink
										to="/admin/prod"
										className="nmwbtn w-auto px-4 mr-2 py-[5px] text-sm"
									>
										Product view
									</NavLink> */}
									<NavLink
										to="/admin/auth/signin"
										className="nmwbtn w-auto px-4 mr-2 py-[5px] text-sm"
									>
										SIGN IN
									</NavLink>
									<NavLink
										to="/admin/auth/signup"
										className="nmwbtn w-auto px-4 py-[5px] bg-blue-900 text-white text-sm"
									>
										SIGN UP
									</NavLink>
								</>
							)}
						</Box>

						<Box sx={{ display: { sm: '', md: 'none' } }}>
							<Button
								variant="text"
								color="primary"
								aria-label="menu"
								onClick={toggleDrawer(true)}
								sx={{ minWidth: '30px', p: '4px' }}
							>
								<MenuIcon />
							</Button>
							<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
								<Box
									sx={{
										minWidth: '60dvw',
										p: 2,
										pt: 15,
										pb: 4,
										backgroundColor: 'background.paper',
										flexGrow: 1,
									}}
								>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'end',
											flexGrow: 1,
										}}
									>
										<ToggleColorMode
											mode={mode}
											toggleColorMode={toggleColorMode}
										/>
									</Box>
									{isAuth ? (
										<>
											<MenuItem onClick={() => scrollToSection('testimonials')}>
												<NavLink to="/admin/homepage">HOMEPAGE</NavLink>
											</MenuItem>
											<MenuItem onClick={() => scrollToSection('features')}>
												<NavLink to="/admin/filter">FILTER</NavLink>
											</MenuItem>
											<MenuItem>
												<NavLink to="/admin/auth/reset-password">
													RESET PASSWORD
												</NavLink>
											</MenuItem>
										</>
									) : (
										<>
											<>
												<MenuItem onClick={() => scrollToSection('features')}>
													Features
												</MenuItem>
												<MenuItem onClick={() => scrollToSection('footer')}>
													Footer
												</MenuItem>
											</>
										</>
									)}

									<Divider />
									{isAuth ? (
										<>
											<MenuItem>
												<NavLink to="#" className="nmwbtn w-full py-2">
													PROFILE
												</NavLink>
											</MenuItem>
											<MenuItem>
												<NavLink to="#" className="nmwbtn w-full py-2">
													SETTINGS
												</NavLink>
											</MenuItem>
											<Button
												onClick={() => dispatch(asyncLogoutAdmin())}
												sx={theme => ({
													borderRadius: '999px',
													mt: 2,
													p: 1,
													color:
														theme.palette.mode === 'light'
															? '#0f0f0f'
															: '#ffff',
													backgroundColor:
														theme.palette.mode === 'light'
															? '#fd907c'
															: '#b4483c',
												})}
												className="nmbtn nbtn"
											>
												LOG OUT
											</Button>
										</>
									) : (
										<>
											<MenuItem>
												<NavLink
													to="/admin/auth/signin"
													className="nmwbtn py-2"
												>
													SIGN IN
												</NavLink>
											</MenuItem>
											<MenuItem>
												<NavLink
													to="/admin/auth/signup"
													className="nmwbtn  bg-blue-900 text-white py-2"
												>
													SIGN UP
												</NavLink>
											</MenuItem>
										</>
									)}
								</Box>
							</Drawer>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}

AppAppBar.propTypes = {
	mode: PropTypes.oneOf(['dark', 'light']).isRequired,
	toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
