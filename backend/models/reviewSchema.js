// const mongoose = require('mongoose');

// const reviewSchema = new mongoose.Schema(
// 	{
// 		product: {
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: 'product',
// 			required: true,
// 		},
// 		user: {
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: 'user',
// 			required: true,
// 		},
// 		name: {
// 			type: String,
// 			required: true,
// 		},
// 		rating: {
// 			type: Number,
// 			min: 1,
// 			max: 5,
// 		},
// 		review: {
// 			type: String,
// 			minLength: [3, 'Review should be at least 3 characters long'],
// 		},
// 		createdAt: {
// 			type: Date,
// 			default: Date.now,
// 		},
// 	},
// 	{ _id: false }
// );

// const Review = mongoose.model('review', reviewSchema);
// module.exports = Review;
