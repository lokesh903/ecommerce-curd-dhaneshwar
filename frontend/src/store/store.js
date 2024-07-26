import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './Reducers/AdminReducer';

export const store = configureStore({
	reducer: {
		adminReducer,
	},
});
