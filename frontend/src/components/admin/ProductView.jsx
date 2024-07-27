'use client';
import { useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Radio,
	RadioGroup,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import {
	DeleteConfirmationBox,
	EcomButton,
	EditProductForm,
} from '../models/index';
import { Container } from '@mui/system';

const product = {
	name: 'Basic Tee 6-Pack ',
	price: '$192',
	rating: 3.9,
	reviewCount: 117,
	href: '#',
	imageSrc:
		'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
	imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
	colors: [
		{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
	],
	sizes: [
		{ name: 'XXS', inStock: true },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: true },
		{ name: 'XL', inStock: true },
		{ name: 'XXL', inStock: true },
		{ name: 'XXXL', inStock: false },
	],
};
// const productViewDetails = {
// 	productName: 'Shoe',
// 	price: '1200',
// 	quantity: 1,
// 	category: 'Shoe',
// 	description: 'okok',
// 	status: 'Available',
// 	reviews: [1, 2, 3],
// 	productImageUrl: {
// 		url: 'https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg',
// 	},
// 	_id: 2303939,
// };

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
// {
// 	open, setOpen, productViewDetails;
// }
export default function ProductView({
	open,
	setOpen,
	productViewDetails,
	mode,
}) {
	// const [open, setOpen] = useState(true);
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
	const [deleteConfirmationBox, setDeleteConfirmationBox] = useState(false);
	const [editProductForm, setEditProductForm] = useState(false);
	// console.log(productViewDetails);
	// alert(deleteConfirmationBox);
	return (
		<Dialog open={open} onClose={setOpen} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
					<DialogPanel
						transition
						className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
					>
						<div className="relative flex w-full items-center overflow-hidden bg-white px-10 pb-8 pt-14 max-sm:pt-20 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="absolute max-sm:hidden -right-2 -top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 -lg:top-8"
							>
								<span className="sr-only">Close</span>
								<XMarkIcon aria-hidden="true" className="h-8 w-8" />
							</button>

							<div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
								<div className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
									<img
										alt={productViewDetails?.productImageUrl?.url}
										src={productViewDetails?.productImageUrl?.url}
										className="object-cover object-center"
									/>
								</div>
								<div className="sm:col-span-8 lg:col-span-7 relative">
									<section
										aria-labelledby="information-heading"
										className="mt-2 relative"
									>
										<EditProductForm
											mode={mode}
											editProductForm={editProductForm}
											setEditProductForm={setEditProductForm}
											product={productViewDetails}
										/>
										<div className="text-xl flex max-sm:text-lg items-center font-bold text-gray-900 sm:pr-12 ">
											<h3 className="text-base text-gray-600">
												Product Name :
											</h3>
											<h2 className="ml-2">
												{productViewDetails?.productName}
											</h2>
										</div>
										<h3 id="information-heading" className="sr-only">
											Product information
										</h3>

										<div className="text-xl max-sm:text-lg my-4  max-sm:my-2 flex items-center font-bold text-gray-900 sm:pr-12 ">
											<h2 className="text-base text-gray-600">Price :</h2>
											<h1 className="ml-2 ">
												₹&nbsp;
												{productViewDetails?.price}
											</h1>
										</div>
										<div className="text-xl  mt-2 flex items-center font-bold text-gray-900 sm:pr-12 max-sm:text-lg">
											<h2 className="text-base text-gray-600">Quantity :</h2>
											<h1 className="ml-2 ">{productViewDetails?.quantity}</h1>
										</div>
										<div className="text-xl my-3 max-sm:my-2 flex items-center font-bold text-gray-900 max-sm:text-lg sm:pr-12 ">
											<h2 className="text-base text-gray-600">Category :</h2>
											<h1 className="ml-2 ">{productViewDetails?.category}</h1>
										</div>
										<div className="text-xl mt-2 flex items-center font-bold text-gray-900 sm:pr-12 max-sm:text-lg">
											<h2 className="text-base text-gray-600">Status :</h2>
											<h1 className="ml-2 ">{productViewDetails?.status}</h1>
										</div>

										{/* Reviews */}
										<div className="mt-6 max-sm:mt-4">
											<h4 className="sr-only">Reviews</h4>
											<div className="flex items-center">
												<div className="flex items-center">
													{[0, 1, 2, 3, 4].map(rating => (
														<StarIcon
															key={rating}
															aria-hidden="true"
															className={classNames(
																product.rating > rating
																	? 'text-gray-900'
																	: 'text-gray-200',
																'h-5 w-5 flex-shrink-0'
															)}
														/>
													))}
												</div>
												<p className="sr-only">
													{product.rating} out of 5 stars
												</p>
												<a
													href="#"
													className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
												>
													{productViewDetails?.reviews.length} reviews
												</a>
											</div>
										</div>
									</section>
									<section className="w-full mt-5 flex justify-between gap-3">
										<EcomButton
											className="w-[47%]"
											onClickFn={setDeleteConfirmationBox}
											colorr={'red'}
										>
											Delete
										</EcomButton>
										<EcomButton
											onClickFn={setEditProductForm}
											className="bg-indigo-800 hover:bg-indigo-700 w-[47%]"
										>
											Edit Details
										</EcomButton>
									</section>
									<section className="w-full max-sm:flex hidden justify-end">
										<button
											onClick={() => setOpen(prev => !prev)}
											className="mt-2 z-50 flex w-1/4 items-center max-sm:h-fit whitespace-nowrap justify-center rounded-md border border-transparent bg-gray-500 py-2 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
												fill="currentColor"
											>
												<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
											</svg>
										</button>
									</section>
								</div>
								<DeleteConfirmationBox
									deleteConfirmationBox={deleteConfirmationBox}
									setDeleteConfirmationBox={setDeleteConfirmationBox}
									productId={productViewDetails?._id}
									productName={productViewDetails?.productName}
									setOpen={setOpen}
								/>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}