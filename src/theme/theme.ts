import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
// #2AABE1 - Light blue.
// #249BCD - Slightly darker than #2AABE1.
// #1E8CB9 - Moderately darker.
// #1A6DA5 - Slightly darker than #1E8CB9.
// #166091 - A balanced dark blue.
// #197DA5 - A shade between the previous ones.
// #12537D - A deep dark shade.
// #0E4669 - Darker blue tone.
// #0F5F7D - Darker than the base blue.
// #0A3955 - Darkest shade.
// #CCFFCC - A very soft, pastel green.
// #E6FFE6 - An almost white, light green.
// #D9FFB3 - A gentle, light lime green.
// #B3FFCC - A minty, light green.
// #E0F8D8 - A pale, fresh green.
// #e0f3f1
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
					backgroundColor: '#F0F8FF',
				},
			},
		},
	},
});

export default theme;
