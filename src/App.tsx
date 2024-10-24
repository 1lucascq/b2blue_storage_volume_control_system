import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Typography, Container, Fab, Box } from '@mui/material';

import ControlPanel from './components/ControlPanel/ControlPanel';
import Header from './components/Header/Header';
import NameModal from './components/Modals/NameModal';
import ReportsModal from './components/Reports/ReportsModal';
import Footer from './components/Footer/Footer';
import { Station } from './ts/types';
import { fetchData } from './utils/api';
import Loading from './components/shared/Loading';

function App() {
    const {
        data: stationsData,
        error,
        isLoading,
    } = useQuery<Station[], Error>({
        queryKey: ['stations'],
        queryFn: () => fetchData('stations') as Promise<Station[]>,
    });

    const [isNameModalOpen, setIsNameModalOpen] = useState(true);
    const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('userName');

        if (storedName) {
            setUserName(storedName);
            setIsNameModalOpen(false);
        }
    }, []);

    useEffect(() => {
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }, [userName]);

    const handleNameModalClose = (name: string) => {
        localStorage.setItem('userName', name);
        setUserName(name);
        setIsNameModalOpen(false);
    };

    const handleReportsModalOpen = () => {
        setIsReportsModalOpen(true);
    };

    const handleReportsModalClose = () => {
        setIsReportsModalOpen(false);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 5,
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{ flexGrow: 1, textAlign: 'center', my: 5 }}
                >
                    Sistema de Controle de Volume de Armazenamento
                </Typography>

                <Container className="App" maxWidth="md" sx={{ pb: 10 }}>
                    <ControlPanel userName={userName} stationsData={stationsData!} />
                </Container>
                <NameModal open={isNameModalOpen} onClose={handleNameModalClose} />
                <ReportsModal open={isReportsModalOpen} onClose={handleReportsModalClose} />
                <Fab
                    color="primary"
                    aria-label="reports"
                    sx={{ position: 'fixed', bottom: 80, right: 50 }}
                    onClick={handleReportsModalOpen}
                >
                    <SummarizeIcon />
                </Fab>
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
