import { useState } from 'react';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Typography, Container, Fab, Box } from '@mui/material';

import ControlPanel from '../ControlPanel/ControlPanel';

import NameModal from '../Modals/NameModal';
import ReportsModal from '../Reports/ReportsModal';
import Loading from '../shared/Loading';
import { Station } from '../../ts/types';
import useUserName from '../hooks/useUserName';
import { useFetchData } from '../hooks/useFetchQuery';
import { styled } from '@mui/system';
import ErrorComponent from '../shared/Error';

const MainBox = styled(Box)({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3em 0',
});

function MainSection() {
    const {
        data: stationsData,
        error,
        isLoading,
    } = useFetchData<Station[], Error>('stations', { queryKey: ['stations'] });

    const { userName, setUserName, isNameModalOpen, setIsNameModalOpen } = useUserName();
    const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);

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

	if (error) {
		return <ErrorComponent />;
	}

    return (
        <MainBox as="main">
            <Typography
                variant="h3"
                component="h1"
                sx={{ flexGrow: 1, textAlign: 'center', my: 5 }}
            >
                Sistema de Controle de Volume de Armazenamento
            </Typography>

            <Container maxWidth="md" sx={{ pb: 10 }}>
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
        </MainBox>
    );
}

export default MainSection;
