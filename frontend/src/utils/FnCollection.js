export const validImageTypes = [
	'image/png',
	'image/jpeg',
	'image/jpg',
	'image/webp',
	'image/gif',
	'image/heic',
	'image/avif',
];

// This Array of Object from Filter Page
export const demoProducts = [
	/// this not using
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	}, // More products...
];
export const subCategories = [
	{ name: 'Totes', href: '#' },
	{ name: 'Backpacks', href: '#' },
	{ name: 'Travel Bags', href: '#' },
	{ name: 'Hip Bags', href: '#' },
	{ name: 'Laptop Sleeves', href: '#' },
];
export const filters = [
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'white', label: 'White', checked: false },
			{ value: 'beige', label: 'Beige', checked: false },
			{ value: 'blue', label: 'Blue', checked: true },
			{ value: 'brown', label: 'Brown', checked: false },
			{ value: 'green', label: 'Green', checked: false },
			{ value: 'purple', label: 'Purple', checked: false },
		],
	},
	{
		id: 'category',
		name: 'Category',
		options: [
			{ value: 'new-arrivals', label: 'New Arrivals', checked: false },
			{ value: 'sale', label: 'Sale', checked: false },
			{ value: 'travel', label: 'Travel', checked: true },
			{ value: 'organization', label: 'Organization', checked: false },
			{ value: 'accessories', label: 'Accessories', checked: false },
		],
	},
	{
		id: 'size',
		name: 'Size',
		options: [
			{ value: '2l', label: '2L', checked: false },
			{ value: '6l', label: '6L', checked: false },
			{ value: '12l', label: '12L', checked: false },
			{ value: '18l', label: '18L', checked: false },
			{ value: '20l', label: '20L', checked: false },
			{ value: '40l', label: '40L', checked: true },
		],
	},
];

///Product dummy data

export const dummyProductData = [
	{
		productName: 'Wireless Mouse',
		price: 20.99,
		quantity: 100,
		description: 'A high-quality wireless mouse',
		manufactured: new Date('2023-01-15'),
		category: 'Electronics',
		productImageUrl: { fileId: '1', url: 'https://example.com/mouse.jpg' },
		rating: 4.5,
		reviews: [
			{
				reviewerName: 'Alice',
				reviewText: 'Great mouse!',
				rating: 5,
				date: new Date('2023-01-20'),
			},
			{
				reviewerName: 'Bob',
				reviewText: 'Works well',
				rating: 4,
				date: new Date('2023-02-10'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Bluetooth Keyboard',
		price: 30.49,
		quantity: 150,
		description: 'A sleek Bluetooth keyboard',
		manufactured: new Date('2023-02-10'),
		category: 'Electronics',
		productImageUrl: { fileId: '2', url: 'https://example.com/keyboard.jpg' },
		rating: 4.7,
		reviews: [
			{
				reviewerName: 'Charlie',
				reviewText: 'Very responsive!',
				rating: 5,
				date: new Date('2023-02-15'),
			},
			{
				reviewerName: 'Dave',
				reviewText: 'Good value',
				rating: 4,
				date: new Date('2023-03-01'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'USB-C Hub',
		price: 25.0,
		quantity: 200,
		description: 'A versatile USB-C hub',
		manufactured: new Date('2023-03-05'),
		category: 'Electronics',
		productImageUrl: { fileId: '3', url: 'https://example.com/usbc_hub.jpg' },
		rating: 4.3,
		reviews: [
			{
				reviewerName: 'Eve',
				reviewText: 'Very handy',
				rating: 4,
				date: new Date('2023-03-10'),
			},
			{
				reviewerName: 'Frank',
				reviewText: 'Works as expected',
				rating: 5,
				date: new Date('2023-03-15'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'HDMI Cable',
		price: 15.99,
		quantity: 300,
		description: 'A durable HDMI cable',
		manufactured: new Date('2023-03-20'),
		category: 'Electronics',
		productImageUrl: { fileId: '4', url: 'https://example.com/hdmi_cable.jpg' },
		rating: 4.6,
		reviews: [
			{
				reviewerName: 'Grace',
				reviewText: 'Good quality',
				rating: 5,
				date: new Date('2023-03-25'),
			},
			{
				reviewerName: 'Heidi',
				reviewText: 'Does the job',
				rating: 4,
				date: new Date('2023-04-05'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Smartphone Stand',
		price: 10.5,
		quantity: 500,
		description: 'A sturdy smartphone stand',
		manufactured: new Date('2023-04-01'),
		category: 'Accessories',
		productImageUrl: {
			fileId: '5',
			url: 'https://example.com/phone_stand.jpg',
		},
		rating: 4.8,
		reviews: [
			{
				reviewerName: 'Ivan',
				reviewText: 'Very useful',
				rating: 5,
				date: new Date('2023-04-05'),
			},
			{
				reviewerName: 'Judy',
				reviewText: 'Stable and strong',
				rating: 5,
				date: new Date('2023-04-10'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Portable Charger',
		price: 35.0,
		quantity: 250,
		description: 'A high-capacity portable charger',
		manufactured: new Date('2023-04-15'),
		category: 'Electronics',
		productImageUrl: {
			fileId: '6',
			url: 'https://example.com/portable_charger.jpg',
		},
		rating: 4.9,
		reviews: [
			{
				reviewerName: 'Mallory',
				reviewText: 'Charges quickly',
				rating: 5,
				date: new Date('2023-04-20'),
			},
			{
				reviewerName: 'Ned',
				reviewText: 'Excellent battery life',
				rating: 5,
				date: new Date('2023-04-25'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Noise Cancelling Headphones',
		price: 120.99,
		quantity: 80,
		description: 'Premium noise cancelling headphones',
		manufactured: new Date('2023-05-01'),
		category: 'Electronics',
		productImageUrl: { fileId: '7', url: 'https://example.com/headphones.jpg' },
		rating: 4.7,
		reviews: [
			{
				reviewerName: 'Oscar',
				reviewText: 'Amazing sound quality',
				rating: 5,
				date: new Date('2023-05-05'),
			},
			{
				reviewerName: 'Peggy',
				reviewText: 'Very comfortable',
				rating: 4,
				date: new Date('2023-05-10'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Wireless Earbuds',
		price: 50.49,
		quantity: 120,
		description: 'Compact wireless earbuds',
		manufactured: new Date('2023-05-15'),
		category: 'Electronics',
		productImageUrl: { fileId: '8', url: 'https://example.com/earbuds.jpg' },
		rating: 4.6,
		reviews: [
			{
				reviewerName: 'Quentin',
				reviewText: 'Great for workouts',
				rating: 5,
				date: new Date('2023-05-20'),
			},
			{
				reviewerName: 'Rachel',
				reviewText: 'Good sound',
				rating: 4,
				date: new Date('2023-05-25'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Laptop Sleeve',
		price: 22.5,
		quantity: 300,
		description: 'A protective laptop sleeve',
		manufactured: new Date('2023-06-01'),
		category: 'Accessories',
		productImageUrl: {
			fileId: '9',
			url: 'https://example.com/laptop_sleeve.jpg',
		},
		rating: 4.4,
		reviews: [
			{
				reviewerName: 'Sam',
				reviewText: 'Fits perfectly',
				rating: 5,
				date: new Date('2023-06-05'),
			},
			{
				reviewerName: 'Trudy',
				reviewText: 'Good material',
				rating: 4,
				date: new Date('2023-06-10'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Gaming Mouse Pad',
		price: 15.0,
		quantity: 400,
		description: 'A large gaming mouse pad',
		manufactured: new Date('2023-06-15'),
		category: 'Accessories',
		productImageUrl: { fileId: '10', url: 'https://example.com/mouse_pad.jpg' },
		rating: 4.7,
		reviews: [
			{
				reviewerName: 'Uma',
				reviewText: 'Smooth surface',
				rating: 5,
				date: new Date('2023-06-20'),
			},
			{
				reviewerName: 'Victor',
				reviewText: 'Great for gaming',
				rating: 5,
				date: new Date('2023-06-25'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Digital Camera',
		price: 299.99,
		quantity: 50,
		description: 'A high-resolution digital camera',
		manufactured: new Date('2023-07-01'),
		category: 'Electronics',
		productImageUrl: { fileId: '11', url: 'https://example.com/camera.jpg' },
		rating: 4.8,
		reviews: [
			{
				reviewerName: 'Wendy',
				reviewText: 'Excellent photos',
				rating: 5,
				date: new Date('2023-07-05'),
			},
			{
				reviewerName: 'Xander',
				reviewText: 'Good features',
				rating: 4,
				date: new Date('2023-07-10'),
			},
		],
		status: 'Available',
	},
	{
		productName: 'Smartwatch',
		price: 150.0,
		quantity: 150,
		description: 'A feature-rich smartwatch',
		manufactured: new Date('2023-07-15'),
		category: 'Electronics',
		productImageUrl: {
			fileId: '12',
			url: 'https://example.com/smartwatch.jpg',
		},
		rating: 4.5,
		reviews: [
			{
				reviewerName: 'Yara',
				reviewText: 'Very functional',
				rating: 5,
				date: new Date('2023-07-20'),
			},
			{
				reviewerName: 'Zack',
				reviewText: 'Good value',
				rating: 4,
				date: new Date('2023-07-25'),
			},
		],
		status: 'Available',
	},
];
