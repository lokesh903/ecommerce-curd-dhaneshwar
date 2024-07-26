import React from 'react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogoutAdmin } from '../../store/Actions/adminActions';
import { NavLink, useNavigate } from 'react-router-dom';

const navigationProfile = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Profile = () => {
	const dispatch = useDispatch();
	const { admin } = useSelector(state => state.adminReducer);
	// console.log(admin);
	const navigate = useNavigate();
	const handleLogout = () => {
		console.log("logout");
		dispatch(asyncLogoutAdmin());
		navigate('/');
	};
	return (
		<div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
			{/* Profile dropdown */}
			<Menu as="div" className="relative">
				<div>
					<MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800">
						<span className="absolute" />
						<span className="sr-only">Open user menu</span>
						<img
							alt=""
							src={admin?.avatar.url}
							className="h10 w-10 min-h-10 min-w-10 rounded-full"
						/>
					</MenuButton>
				</div>

				<MenuItems
					transition
					className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
				>
					<MenuItem>
						<Box
							href="#"
							className=" px-4 flex items-center justify-start py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 border-b	"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="28"
								height="28"
								fill="currentColor"
							>
								<path d="M11 14.0619V20H13V14.0619C16.9463 14.554 20 17.9204 20 22H4C4 17.9204 7.05369 14.554 11 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
							</svg>
							<span className="capitalize ml-1 font-extrabold">
								Hello ! &nbsp;
								{admin?.firstname}
							</span>
						</Box>
					</MenuItem>
					<MenuItem>
						<Box
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
						>
							Your Profile
						</Box>
					</MenuItem>
					<MenuItem>
						<Box
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
						>
							Settings
						</Box>
					</MenuItem>
					<MenuItem>
						<Box
							sx={{ ':hover': { cursor: 'pointer' } }}
							onClick={handleLogout}
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
						>
							LOG OUT
						</Box>
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
};

export default Profile;
