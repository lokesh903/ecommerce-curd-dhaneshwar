import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	admin: null,
	isAuth: false,
	products: null,
	message: null,
	success: false,
	errors: null,
	isLoading: false,
	searchedProducts: null,
};

export const adminReducer = createSlice({
	name: 'admin-slice',
	initialState,
	reducers: {
		setAdmin: (state, action) => {
			state.admin = action.payload;
			state.isAuth = true;
			state.isLoading = false;
			state.errors = null;
		},
		removeAdmin: (state, action) => {
			state.admin = null;
			state.isAuth = false;
			state.errors = [];
			state.products = null;
			state.message = null;
			state.success = false;
			state.isLoading = false;
		},
		isError: (state, action) => {
			state.errors = action.payload;
		},
		removeError: (state, action) => {
			state.errors = [];
		},
		isLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setAllProducts: (state, action) => {
			state.products = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		setSuccess: (state, action) => {
			state.message = action.payload;
		},
		setSearchedProducts: (state, action) => {
			state.products = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
	setAllProducts,
	setMessage,
	setSuccess,
	setSearchedProducts,
} = adminReducer.actions;

export default adminReducer.reducer;
