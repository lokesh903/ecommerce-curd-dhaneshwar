'use client';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import NavBarBox from './NavBarBox';
import AddProductForm from './AddProduct';
import { useSelector } from 'react-redux';
import noProductImg from '../../assets/images/noProducts.webp';
import { filters, subCategories } from '../../utils/FnCollection';

export default function FilterProductPage({ mode}) {
	const [mount, setMount] = useState(false);
	const { products: allProducts } = useSelector(state => state.adminReducer);
	const [navFilterbtn, setNavFilterbtn] = useState(true);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [addProductMenu, setAddProductMenu] = useState(false);
	const handleMobileFilterButton = () => {
		setMobileFiltersOpen(false);
	};
	const handleAddCartMenu = () => {
		setAddProductMenu(prev => !prev);
	};
	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<div className="relative">
			<div className="bg-red-400 h-screen fixed top-0 z-50 auto">
				<AddProductForm
					addProductMenu={addProductMenu}
					handleAddCartMenu={handleAddCartMenu}
					handleMobileFilterButton={handleMobileFilterButton}
					mobileFiltersOpen={mobileFiltersOpen}
				/>
			</div>
			<>
				{/* Mobile filter dialog */}
				<Dialog
					open={mobileFiltersOpen}
					onClose={setMobileFiltersOpen}
					className="relative z-40 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed z-50 inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 z-40 flex">
						<DialogPanel
							transition
							className="relative ml-auto bg-slate-600 flex h-full w-full max-w-xs transform flex-col overflow-y-auto py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
						>
							<div className="flex items-center justify-between mt-20 px-4">
								<h2 className="text-lg font-medium text-gray-900">Filters</h2>
								<button
									type="button"
									onClick={handleMobileFilterButton}
									className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon aria-hidden="true" className="h-6 w-6" />
								</button>
							</div>

							{/* Filters */}
							<form className="mt-4 border-t border-gray-200 z-50">
								<h3 className="sr-only">Categories</h3>
								<ul role="list" className="px-2 py-3 font-medium text-gray-900">
									{subCategories?.map(category => (
										<li key={category.name}>
											<a href={category.href} className="block px-2 py-3">
												{category.name}
											</a>
										</li>
									))}
								</ul>

								{filters?.map(section => (
									<Disclosure
										key={section.id}
										as="div"
										className="border-t border-gray-200 px-4 py-6"
									>
										<h3 className="-mx-2 -my-3 flow-root">
											<DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
												<span className="font-medium text-gray-900">
													{section.name}
												</span>
												<span className="ml-6 flex items-center">
													<PlusIcon
														aria-hidden="true"
														className="h-5 w-5 group-data-[open]:hidden"
													/>
													<MinusIcon
														aria-hidden="true"
														className="h-5 w-5 [.group:not([data-open])_&]:hidden"
													/>
												</span>
											</DisclosureButton>
										</h3>
										<DisclosurePanel className="pt-6">
											<div className="space-y-6">
												{section.options.map((option, optionIdx) => (
													<div key={option.value} className="flex items-center">
														<input
															defaultValue={option.value}
															defaultChecked={option.checked}
															id={`filter-mobile-${section.id}-${optionIdx}`}
															name={`${section.id}[]`}
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label
															htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
															className="ml-3 min-w-0 flex-1 text-gray-500"
														>
															{option.label}
														</label>
													</div>
												))}
											</div>
										</DisclosurePanel>
									</Disclosure>
								))}
							</form>
						</DialogPanel>
					</div>
				</Dialog>

				<Container className="mx-auto max-w-full  max-sm:px-0 px-6 lg:px-0">
					{/* Navbar for Homepage and Filter Page Same componet */}
					<NavBarBox
						mode={mode}
						handleAddCartMenu={handleAddCartMenu}
						addProductMenu={addProductMenu}
						handleMobileFilterButton={handleMobileFilterButton}
						mobileFiltersOpen={mobileFiltersOpen}
						setMobileFiltersOpen={setMobileFiltersOpen}
						navFilterbtn={navFilterbtn}
					/>
					{/* Navbar for Homepage and Filter Page Same componet */}

					<section
						aria-labelledby="products-heading"
						className="relative pb-24 max-sm:pt-12 pt-28"
					>
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>

						<div className="grid grid-cols-1   gap-x-8 gap-y-10 relative lg:grid-cols-4">
							{/* Filters */}
							<div>
								<form className="SideBar sticky top-0 Filter hidden lg:block  rounded bg-slate-100/70 z-40">
									<h3 className="sr-only">Categories</h3>
									<ul
										role="list"
										className={`space-y-4 border-b text-black px-2 py-2 border-gray-200 pb-6 text-sm font-semibold `}
									>
										{subCategories.map(category => (
											<li
												className="hover:bg-slate-200 w-fit py-1 hover:px-2 rounded transition-all delay-50 duration-100"
												key={category.name}
											>
												<Link to={category.href}>{category.name}</Link>
											</li>
										))}
									</ul>

									{filters.map(section => (
										<Disclosure
											key={section.id}
											as="div"
											className="border-b border-gray-200 py-6"
										>
											<h3 className="-my-3 flow-root">
												<DisclosureButton className="group flex w-full items-center justify-between bg-slate-50  py-3 text-sm text-gray-400 hover:text-gray-500">
													<span className="font-medium ml-2 text-gray-950">
														{section.name}
													</span>
													<span className="ml-6 flex items-center">
														<PlusIcon
															aria-hidden="true"
															className="h-5 w-5 group-data-[open]:hidden"
														/>
														<MinusIcon
															aria-hidden="true"
															className="h-5 w-5 [.group:not([data-open])_&]:hidden"
														/>
													</span>
												</DisclosureButton>
											</h3>
											<DisclosurePanel className="pt-6">
												<div className="space-y-4">
													{section.options.map((option, optionIdx) => (
														<div
															key={option.value}
															className="flex items-center ml-2"
														>
															<input
																defaultValue={option.value}
																defaultChecked={option.checked}
																id={`filter-${section.id}-${optionIdx}`}
																name={`${section.id}[]`}
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
															/>
															<label
																htmlFor={`filter-${section.id}-${optionIdx}`}
																className="ml-3 text-sm text-gray-900"
															>
																{option.label}
															</label>
														</div>
													))}
												</div>
											</DisclosurePanel>
										</Disclosure>
									))}
								</form>
							</div>

							{/* Product grid */}
							<div className="lg:col-span-3">
								{allProducts && allProducts.length > 0 ? (
									<div className="Product-Container mt-6 grid grid-cols-1 max-sm:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
										{allProducts.map(product => (
											<Box key={product._id} className="group relative">
												<div className="acha aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 max-sm:h-52">
													<img
														alt={product?.productName}
														src={product?.productImageUrl.url}
														className="h-full w-full object-cover object-center lg:h-full lg:w-full"
													/>
												</div>
												<Box className="mt-4 flex justify-between">
													<Box>
														<Typography>
															<Link href={product.href}>
																<span
																	aria-hidden="true"
																	className="absolute inset-0"
																/>
																<Typography
																	component={'span'}
																	variant={'body2'}
																	sx={{
																		display: 'flex',
																		flexDirection: { xs: 'column', md: 'row' },
																		alignSelf: 'center',
																		textAlign: 'center',
																		fontSize: 'clamp(1rem, .8vw, 1rem)',
																		fontWeight: '600',
																		opacity: '.9',
																	}}
																>
																	{product?.productName}
																</Typography>
															</Link>
														</Typography>
														<Typography
															sx={{ backgroundColor: 'rgb(177, 174, 174)' }}
														>
															{product?.price}
														</Typography>
													</Box>
													<Typography
														variant="h5"
														sx={{
															display: 'flex',
															flexDirection: { xs: 'column', md: 'row' },
															alignSelf: 'center',
															textAlign: 'center',
															fontSize: 'clamp(.6rem, 4vw, 1rem)',
															fontWeight: '600',
														}}
													>
														{product.price}
													</Typography>
												</Box>
											</Box>
										))}
									</div>
								) : (
									<Box
										sx={{
											height: '60vh',
											width: '100%',
											margin: 'auto',
											display: 'flex',
											flexDirection: { xs: 'column', md: 'row' },
											alignItems: 'center',
											justifyContent: 'center',
										}}
										className="gray"
									>
										<Typography
											variant="h5"
											sx={{
												textAlign: 'center',
												fontSize: 'clamp(.6rem, 4vw, 2rem)',
												fontWeight: '600',
												textAlign: 'center',
											}}
										>
											<img
												src={noProductImg}
												width="300"
												className="m-auto"
												height="200"
												alt=""
											/>
											NO PRODUCTS !! ADD PRODUCTS
										</Typography>
									</Box>
								)}
							</div>
						</div>
					</section>
				</Container>
			</>
		</div>
	);
}
