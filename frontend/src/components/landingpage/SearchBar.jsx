import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useDebounce } from '../../utils/index';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
	asyncSearchProduct,
	asyncRemoveErrors,
} from '../../store/Actions/adminActions';
import { SearchErrorBox } from '../errors';
import LoadingGif from '../../assets/images/loading.gif';

const SearchBar = ({mode}) => {
	const { products, admin, message, success, errors } = useSelector(
		state => state.adminReducer
	);
	const dispatch = useDispatch();
	const [mount, setMount] = useState(false);
	const [search, setSearch] = useState('');
	const { debouncedValue: debouncedSearch, loading } = useDebounce(
		search,
		1200
	);
	const [errorView, setErrorView] = useState('');
	useEffect(() => {
		setErrorView(errors);

		// if (search === '') {
		// 	setErrorView('');
		// }
	}, [errors]);
	const handleSearchChange = e => {
		setSearch(e.target.value);
		// console.log(e.target.value);
	};
	const getAllFetchData = async debouncedSearch => {
		if (debouncedSearch) {
			// console.log(`queri  aayaa` + debouncedSearch);
			dispatch(asyncSearchProduct(debouncedSearch));
		} else {
			console.log('Search nahi hua');
		}
	};
	useEffect(() => {
		if (debouncedSearch !== '') {
			getAllFetchData(debouncedSearch);
		}
		if (!admin) {
			dispatch(asyncCurrentAdmin());
		}
		if (products <= 0) {
			dispatch(asyncAllProduct());
		}
		if (debouncedSearch === '') {
			dispatch(asyncAllProduct());
			dispatch(asyncRemoveErrors());
		}
	}, [debouncedSearch, dispatch]);

	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<div className="SearchBar">
			<div className="container mx-auto flex w-full  max-sm:px-1 relative p-1">
				<label
					className="mx-auto max-sm:mt-0 pr-16 relative max-sm:flex max-sm:justify-betwee max-sm:whitespace-nowrap max-sm:flex-row bg-l-col  min-w-xl max-w-2xl max-sm:max-w-sm flex flex-col md:flex-row items-center justify-center border-[.8px] border-zinc-400 px-2 rounded-full gap-2 shadow-2xl  drop-shadow-lg"
					htmlFor="search"
				>
					<MagnifyingGlassIcon
						aria-hidden="true"
						className="h-6 w-6 text-gray-400"
					/>

					<input
						id="search-bar"
						placeholder="Enter Product Name.."
						name="search"
						required={true}
						onChange={handleSearchChange}
						className={`pl-2 ml-1 max-sm:ml-2 w-[200px] pr-2 tracking-wider focus:invalid:bg-gray-50/10 focus:ring-0 border-none ${
							mode==='light' ? 'text-black ' : 'text-white'
						} font-semibold text-base py-2 max-sm:py-0 max-sm:w-2/3 max-sm:px-2 rounded-md flex-1 outline-none bg-transparent max-sm:placeholder:text-[11px] placeholder:text-gray-500 placeholder:w-[100%] `}
					/>

					<button className="w-full absolute md:w-auto ml-2 max-sm:ml-0 px-3 max-sm:p-1 py-1 max-sm:w-1/4 bg-black  text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden right-2 rounded-full transition-all">
						<div className="flex items-center transition-all opacity-1">
							{loading ? (
								<span className="text-sm max-w-16	 font-semibold whitespace-nowrap truncate mx-auto">
									<img
										priority={'true'}
										src={LoadingGif}
										width={15}
										height={15}
										alt="Searching🔍"
									/>
									{/* <LoadingGif /> */}
								</span>
							) : (
								<span className="text-xs max-sm:text-[10px] max-w-16	 font-semibold whitespace-nowrap truncate mx-auto">
									Search
								</span>
							)}
						</div>
					</button>
					{/* <LoadingGif /> */}
				</label>
				{(errorView ||
					(errorView && Array.isArray(errorView) && errorView.length > 0)) && (
					<div
						className={`absolute top-full max-sm:px-3 max-sm:left-1/4 max-sm:py-1 mr-10 left-0 w-fit whitespace-nowrap ${
							errorView.length === 0 ? 'hidden' : 'block'
						}`}
					>
						<SearchErrorBox errorMsg={errorView}></SearchErrorBox>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
