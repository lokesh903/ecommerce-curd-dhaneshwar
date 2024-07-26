import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import {
	setAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
	setAllProducts,
	setMessage,
	setSuccess,
	setSearchedProducts,
} from '../Reducers/AdminReducer';

export const asyncHomepage = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/');
		// console.log(data);
		dispatch(setAdmin(data.data.currentAdmin));
	} catch (error) {
		// console.log(error);
		dispatch(isError(error.response.data.message));
	}
};
/* -----------  CURRENT ADMIN   -----------*/
export const asyncCurrentAdmin = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/admin');
		// console.log(data.data.currentAdmin, 'Current Admin Added');
		dispatch(setAdmin(data.data.currentAdmin));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};
/* -----------  ADMIN SIGN_UP  -----------*/
export const asyncSignUpAdmin = admin => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.post('/admin/signup', admin);
		// console.log(data, 'Admin SIGN_UP done');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
		dispatch(asyncCurrentAdmin());
	} catch (error) {
		// console.log(error);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN SIGN_IN   ----------*/
export const asyncSignInAdmin = admin => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.post('/admin/signin', admin);
		console.log(data, 'Admin SIGN_IN done');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
		dispatch(asyncCurrentAdmin(data));
	} catch (error) {
		console.log(error);	
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN LOG_OUT   ----------*/
export const asyncLogoutAdmin = () => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.post('/admin/signout');
		// console.log(data, 'Admin Logout-done!');
		dispatch(removeAdmin(data));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN FORGET_PASSWORD_SENDLINK   ----------*/
export const asyncForgetLinkSend = email => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.post('/admin/sendlink-mail', email);
		// console.log(data, 'Admin Forget-LInk-Sent!');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN PRODUCT_CREAT   ----------*/
export const asyncCreateProduct = formData => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.post(
			'/admin/product/create-product',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		// console.log(data, 'Product donnnnnnnn');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
	} catch (error) {
		console.log(error);
		dispatch(isError(error?.response?.data?.message));
	}
};

/* -----------   ADMIN VIEW ALL PRODUCTS   ----------*/
export const asyncAllProduct = () => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.get('/admin/product/viewall');
		dispatch(setAllProducts(data.data.products));
		// console.log(data.data.products, 'All Product Visible');
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

export const asyncSetMessage = () => async (dispatch, getState) => {
	try {
		dispatch(setMessage(null));
		dispatch(setSuccess(false));
	} catch (error) {
		console.log(error);
	}
};

export const asyncCreateManyProduct =
	manydata => async (dispatch, getState) => {
		try {
			const data = await axiosInstance.post(
				'/admin/product/create-many',
				manydata
			);
			console.log('allll done bro');
			// dispatch(setAllProducts(data.data.products));
			// console.log(data.data.products, 'All Product Visible');
		} catch (error) {
			console.log(error);
			// dispatch(isError(error.response.data.message));
		}
	};

export const asyncSearchProduct = debouncedSearch => async dispatch => {
	try {
		const params = new URLSearchParams({
			searchText: debouncedSearch,
		});

		const data = await axiosInstance.get(
			`/admin/product/search?${params.toString()}`
		);
		console.log(data);
		dispatch(setAllProducts(data?.data?.products));
	} catch (error) {
		// console.log(error);
		dispatch(
			isError(error.response?.data?.message || 'Error occurred during search')
		);
	}
};

export const asyncDeleteProduct = productId => async dispatch => {
	try {
		const data = await axiosInstance.delete(
			`/admin/product/delete/${productId}`
		);
		console.log(data);
		dispatch(setMessage(data.data.message));
	} catch (error) {
		console.log(error);
		dispatch(
			isError(error.response?.data?.message || 'Error occurred during search')
		);
	}
};

export const asyncRemoveErrors = () => async dispatch => {
	try {
		dispatch(removeError([]));
	} catch (error) {
		console.log(error);
	}
};
