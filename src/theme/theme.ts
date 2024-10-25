import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	spacing: 8,
	palette: {
		primary: {
			light: '#2aabe1',
			main: '#1E7AB9',
		},
		secondary: {
			main: '#8fd300',
			light: '#e0f3f1'
		},
		tertiary: {
			main: '#f44336',
		},
		background: {
			default: '#F0F8FF',
			paper: '#F8F8FF',
		}
	},
	typography: {
		fontFamily: 'Helvetica, Arial, sans-serif',
		h1: {
			fontSize: '2.5rem',
			fontWeight: 500,
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 500,
		},
		h3: {
			fontSize: '1.75rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: '1rem',
		},
		body2: {
			fontSize: '0.875rem',
			'@media (max-width:500px)': {
				fontSize: '.7rem',
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
				},
				contained: {
					backgroundColor: '#1E7AB9',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#155a8a',
					},
				},
				outlined: {
					borderColor: '#1E7AB9',
					color: '#1E7AB9',
					'&:hover': {
						backgroundColor: 'rgba(30, 122, 185, 0.1)',
					},
				},
				text: {
					color: '#1E7AB9',
					'&:hover': {
						backgroundColor: 'rgba(30, 122, 185, 0.1)',
					},
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#F0F8FF',
				},
			},
		},
	},
});

export default theme;
