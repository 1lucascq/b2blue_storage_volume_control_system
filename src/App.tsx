import { Box } from '@mui/material';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';

function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
			<MainSection />
            <Footer />
        </Box>
    );
}

export default App;
