import React from 'react';
import WarningPng from '../../assets/images/warning.png';
import { useDispatch } from 'react-redux';
import {
	asyncAllProduct,
	asyncDeleteProduct,
} from '../../store/Actions/adminActions';

const DeleteConfirmation = ({
	setOpen,
	deleteConfirmationBox,
	setDeleteConfirmationBox,
	productName,
	productId,
}) => {
	// console.log(productId);
	const dispatch = useDispatch();
	const handleDeleteProduct = productId => {
		dispatch(asyncDeleteProduct(productId));
		setTimeout(() => {
			dispatch(asyncAllProduct());
		}, 1000);
		setDeleteConfirmationBox(prev => !prev);
		setOpen(prev => !prev);
	};
	return (
		<div
			className={`bg-gray-400/50 px-3 ${
				deleteConfirmationBox ? 'block' : 'hidden'
			} transition-all absolute flex items-center justify-center w-full h-full top-0 left-0`}
		>
			<div className="flex flex-col text-gray-800 p-8 max-sm:px-6 max-sm:pb-12 bg-white m-auto text-center rounded-lg">
				<h1 className="text-2xl  font-bold">Delete Product?</h1>
				<p className="text-lg max-sm:text-base font-medium leading-tight my-4">
					Are you Sure you want to delete <b>" {productName} "</b>? <br /> You
					can't undo this Action.
				</p>
				<div className="warning box bg-[#FFE8D9] max-sm:px-2 flex flex-col max-sm:items-center items-start rounded-sm px-8 border-l-4 border-[#F9703E] py-4">
					<div className="font-semibold text-lg max-sm:text-base -ml-6 mb-1 flex items-center justify-center gap-3 ">
						<img src={WarningPng} width="25" heigh="25" alt="" />
						<p className="mt-1  text-red-700">Warning</p>
					</div>
					<p className="text-base max-sm:text-sm text-red-700 ml-3">
						By deleting this product{' '}
						<b>All Customer will not be see this product in future.</b>
					</p>
				</div>
				<div className="flex gap-6	justify-center">
					<button
						onClick={() => handleDeleteProduct(productId)}
						className="mt-6 flex w-1/3 max-sm:w-1/2 max-sm:py-3 max-sm:h-fit items-center justify-center rounded-full border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white max-sm:bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="currentColor"
						>
							<path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path>
						</svg>
						&nbsp;Delete
					</button>
					<button
						onClick={() => setDeleteConfirmationBox(prev => !prev)}
						className="mt-6 flex w-1/3 max-sm:w-1/2 max-sm:py-3 max-sm:h-fit items-center justify-center rounded-full border border-transparent max-sm:bg-gray-700 bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmation;
