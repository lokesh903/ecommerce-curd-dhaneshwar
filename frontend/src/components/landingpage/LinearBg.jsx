import { alpha, Box } from '@mui/material';
import React from 'react';

const LinearBg = () => {
	return (
		<Box
			id="hero"
			sx={theme => ({
				width: '100vw',
				height: '100%',
				zIndex: '-10',
				pointerEvents: 'none',
				position: 'absolute',
				top: '0',
				backgroundImage:
					theme.palette.mode === 'light'
						? 'linear-gradient(180deg, #CEE5FD, #FFF)'
						: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
				backgroundSize: '100% 80%',
				backgroundRepeat: 'no-repeat',
			})}
		></Box>
	);
};

export default LinearBg;
