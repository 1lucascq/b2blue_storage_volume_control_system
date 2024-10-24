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
		// You can add logic here to check if the user has already entered their name
		// For example, you can use localStorage to persist the name
		const storedName = localStorage.getItem('userName');
		console.log(storedName);
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
