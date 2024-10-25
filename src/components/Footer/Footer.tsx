import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#333',
                color: 'white',
                py: 2,
                textAlign: 'center',
                width: '100%',
            }}
        >
            <Typography variant="body2" textAlign={'right'} mr={5}>
                &copy; {new Date().getFullYear()} B2Blue - Controle de Volume de Armazenamento de
                Resíduos
            </Typography>
        </Box>
    );
};

export default Footer;
