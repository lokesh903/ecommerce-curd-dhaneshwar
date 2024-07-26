import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ShopImg from '../../assets/images/shop.png';
import ShopingImg from '../../assets/svgs/shoping.svg';
import { alpha } from '@mui/material';

export default function Hero() {
	return (
		<Box
			id="hero"
			sx={theme => ({
				width: '100%',
				backgroundImage:
					theme.palette.mode === 'light'
						? 'linear-gradient(180deg, #b0d2f6, #c4ddf24c)'
						: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
				backgroundSize: '100% 80%',
				backgroundRepeat: 'no-repeat',
			})}
		>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					pt: { xs: 14, sm: 20 },
					pb: { xs: 8, sm: 12 },
				}}
			>
				<Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
					<Typography
						variant="h1"
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							alignSelf: 'center',
							textAlign: 'center',
							fontSize: 'clamp(3.5rem, 10vw, 4rem)',
						}}
					>
						Apna Bazaar &nbsp;
						<Typography
							component="span"
							variant="h1"
							sx={{
								fontSize: 'clamp(3rem, 10vw, 4rem)',
								color: theme =>
									theme.palette.mode === 'light'
										? 'primary.main'
										: 'primary.light',
							}}
						>
							products
						</Typography>
					</Typography>
					<Typography
						textAlign="center"
						color="text.secondary"
						sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
					>
						Discover amazing deals on top-quality products from trusted brands.
						ShopEase: where shopping meets convenience and affordability.
					</Typography>
				</Stack>
				<Box
					id="image"
					sx={theme => ({
						mt: { xs: 8, sm: 10 },
						alignSelf: 'center',
						height: { xs: 200, sm: 700 },
						width: '100%',
						backgroundImage:
							theme.palette.mode === 'light' ? `url()` : `url('../shop.png')`,
						backgroundSize: 'cover',
						borderRadius: '10px',
						outline: '1px solid',
						outlineColor:
							theme.palette.mode === 'light'
								? alpha('#BFCCD9', 0.5)
								: alpha('#9CCCFC', 0.1),
						boxShadow:
							theme.palette.mode === 'light'
								? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
								: `0 0 24px 12px ${alpha('#033363', 0.2)}`,
						overflow: 'hidden',
					})}
				>
					<ShopingImg />
				</Box>
			</Container>
		</Box>
	);
}
