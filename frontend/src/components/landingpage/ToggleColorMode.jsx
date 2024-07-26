import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
  return (
		<Box sx={{ maxWidth: '32px', mr: 2 }}>
			<Button
				variant="text"
				onClick={toggleColorMode}
				size="small"
				aria-label="button to toggle theme"
				sx={{
					minWidth: { xs: '60px', lg: '40px' },
					height: { xs: '60px', lg: '40px' },
					p: '4px',
				}}
			>
				{mode === 'dark' ? (
					<WbSunnyRoundedIcon
						sx={{ fontSize: { sm: 'x-large' ,md:"x-large" } }}
					/>
				) : (
					<ModeNightRoundedIcon

						sx={{ fontSize: { sm: 'x-large' ,md:"x-large" } }}
					/>
				)}
			</Button>
		</Box>
	);
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
