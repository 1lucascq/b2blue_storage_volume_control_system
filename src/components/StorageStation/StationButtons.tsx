// src/components/StorageStation/StationButtons.tsx
import React from 'react';
import { Box, styled } from '@mui/material';
import ActionButton from './ActionButton';
import { StationButtonsProps } from '../../ts/types';


const ButtonsWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	gap: theme.spacing(2),
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		gap: theme.spacing(1),
	},
}));

const StationButtons: React.FC<StationButtonsProps> = ({
    collectionInProgress,
    currentVolume,
    volume,
    onStationChange,
    handleReset,
    completeCollection,
}) => {
    return (
        <ButtonsWrapper>
            <ActionButton
                fullWidth
                disabled={collectionInProgress || currentVolume === volume}
                onClick={() => onStationChange({ volume: currentVolume })}
                sx={{
                    animation: currentVolume !== volume ? 'colorChange 1s infinite' : 'none',
                    '@keyframes colorChange': {
                        '0%': { backgroundColor: 'primary.main' },
                        '50%': { backgroundColor: 'primary.light' },
                        '100%': { backgroundColor: 'primary.main' },
                    },
                }}
            >
                Atualizar
            </ActionButton>
            <ActionButton
                fullWidth
                disabled={collectionInProgress || currentVolume === volume}
                onClick={handleReset}
            >
                Redefinir
            </ActionButton>
            <ActionButton fullWidth disabled={!collectionInProgress} onClick={completeCollection}>
                Confirmar Coleta
            </ActionButton>
        </ButtonsWrapper>
    );
};

export default StationButtons;
