import React, { useEffect, useState } from 'react';
import ControlPanel from './components/ControlPanel';
import Header from './components/Header';
import { Typography, Container } from '@mui/material';
import NameModal from './components/NameModal';
import { useQuery } from '@tanstack/react-query';
import { Station } from './ts/types';
import { fetchData } from './utils/utils';

function App() {
    const {
        data: stationsData,
        error,
        isLoading,
    } = useQuery<Station[], Error>({
        queryKey: ['stations'],
        queryFn: () => fetchData('stations'),
    });

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [userName, setUserName] = useState('');

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

    const handleModalClose = (name: string) => {
        localStorage.setItem('userName', name);
        setUserName(name);
        setIsModalOpen(false);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <Typography
                variant="h3"
                component="h1"
                sx={{ flexGrow: 1, textAlign: 'center', my: 5 }}
            >
                Sistema de Controle de Volume de Armazenamento
            </Typography>

            <Container className="App" maxWidth="md">
                <ControlPanel userName={userName} stationsData={stationsData!} />
            </Container>
            <NameModal open={isModalOpen} onClose={handleModalClose} />
        </>
    );
}

export default App;
