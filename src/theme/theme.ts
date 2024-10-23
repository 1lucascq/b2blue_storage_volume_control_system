import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			light: '#2aabe1',
			main: '#1E7AB9',
		},
		secondary: {
			main: '#8fd300',
		},
		tertiary: {
			main: '#f44336',
		},
	},
	typography: {
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
					backgroundColor: '#F8F8FF',
				},
			},
		},
	},
});
// FAFAFA
// F8F8FF
// FFFFF0
// F5F5F5
export default theme;
