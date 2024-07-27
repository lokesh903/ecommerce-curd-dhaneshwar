import React from 'react';

const EcomButton = ({ onClickFn, children, colorr, className, ...props }) => {
	// console.log(colorr);
	return (
		<button
			onClick={() => onClickFn(prev => !prev)}
			className={`flex max-sm:text-base whitespace-nowrap items-center justify-center rounded-md border border-transparent max-sm:bg-${colorr}-600 bg-${colorr}-500 px-8 max-sm:h-fit py-3 text-base font-medium text-white hover:bg-${colorr}-600 focus:outline-none focus:ring-2 focus:ring-${colorr}-500 focus:ring-offset-2  ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default EcomButton;
