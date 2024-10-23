import React from 'react';
import ControlPanel from './components/ControlPanel';
import Header from './components/Header';
import { Typography, Container } from '@mui/material';

function App() {
	return (
		<>
			<Header />
			<Typography variant='h3' component='h1' sx={{ flexGrow: 1, textAlign: 'center', my: 5 }}>
				Sistema de Controle de Volume de Armazenamento
			</Typography>

			<Container className='App' maxWidth='md'>
				<ControlPanel />
			</Container>
		</>
	);
}

export default App;
