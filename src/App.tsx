import React, { useEffect, useState } from 'react';
import ControlPanel from './components/ControlPanel';
import Header from './components/Header';
import { Typography, Container } from '@mui/material';
import NameModal from './components/NameModal';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [userName, setUserName] = useState('');

	const handleModalClose = (name: string) => {
		localStorage.setItem('userName', name);
		setUserName(name);
		setIsModalOpen(false);
	};

	useEffect(() => {
		const storedName = localStorage.getItem('userName');

		if (storedName) {
			setUserName(storedName);
			setIsModalOpen(false);
		}
	}, []);

	useEffect(() => {
		if (userName) {
			localStorage.setItem('userName', userName);
		}
	}, [userName]);

	return (
		<>
			<Header />
			<Typography variant='h3' component='h1' sx={{ flexGrow: 1, textAlign: 'center', my: 5 }}>
				Sistema de Controle de Volume de Armazenamento
			</Typography>

			<Container className='App' maxWidth='md'>
				<ControlPanel />
			</Container>
			<NameModal open={isModalOpen} onClose={handleModalClose} />
		</>
	);
}

export default App;
