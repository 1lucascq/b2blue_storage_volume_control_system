import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Slide, Slider, Box, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import TapeWarning from './TapeWarning';
import { StorageStationProps } from '../../ts/types';

const StorageStation: React.FC<StorageStationProps> = ({
    stationName,
    volume,
    collectionInProgress,
    onStartCollection,
    onCompleteCollection,
    onStationChange,
}) => {
    const [currentVolume, setCurrentVolume] = useState(volume);
    const autoCollectVolume = 80;

    const handleSliderChange = (_event: any, newValue: number | number[]) => {
        setCurrentVolume(newValue as number);
    };

    useEffect(() => {
        if (volume >= autoCollectVolume && currentVolume === volume) {
            startCollection();
        }
    }, [volume, currentVolume]);

    useEffect(() => {
        setCurrentVolume(volume);
    }, [volume]);

    function startCollection() {
        onStartCollection();
    }

    async function completeCollection() {
        await onCompleteCollection();
    }

    function handleReset() {
        setCurrentVolume(volume);
    }

    function displayValue() {
        if (currentVolume === volume) {
            return `${volume}%`;
        }

        if (currentVolume > volume) {
            return (
                <>
                    {volume}% &rarr;{' '}
                    <Typography component="span" fontWeight="bold" color="#28a745">
                        {currentVolume}%
                    </Typography>
                </>
            );
        }

        return (
            <>
                {volume}% &rarr;{' '}
                <Typography component="span" fontWeight="bold" color="#dc3545">
                    {currentVolume}%
                </Typography>
            </>
        );
    }

    // console.log('rendering StorageStation --> volume', volume, 'currentVolume', currentVolume);
    return (
        <Card
            sx={{
                boxShadow: 3,
                border: '1px solid',
                borderColor: 'primary.light',
                position: 'relative',
                padding: 4,
                backgroundColor: 'secondary.light',
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography variant="h5">{stationName}</Typography>
                    <Typography variant="body1" fontWeight="bold">
                        {displayValue()}
                        {currentVolume !== volume && currentVolume >= autoCollectVolume && (
                            <Tooltip
                                title="Salve o novo volume para iniciar a coleta"
                                placement="top"
                            >
                                <WarningIcon sx={{ color: 'orange', position: 'absolute' }} />
                            </Tooltip>
                        )}
                    </Typography>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Slider
                        value={currentVolume}
                        disabled={collectionInProgress}
                        onChange={handleSliderChange}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={100}
                        size="medium"
                        sx={{
                            height: 18,
                            '& .MuiSlider-track': {
                                background:
                                    'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(121,90,9,1) 70%, rgba(255,0,57,1) 100%)',
                            },
                            '& .MuiSlider-thumb': {
                                backgroundColor: 'white',
                            },
                        }}
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" width="100%" gap={2}>
                    <Button
                        fullWidth
                        disabled={collectionInProgress || currentVolume === volume}
                        variant="contained"
                        color="primary"
                        onClick={() => onStationChange({ volume: currentVolume })}
                        sx={{
                            animation:
                                currentVolume !== volume ? 'colorChange 1s infinite' : 'none',
                            '@keyframes colorChange': {
                                '0%': { backgroundColor: 'primary.main' },
                                '50%': { backgroundColor: 'primary.light' },
                                '100%': { backgroundColor: 'primary.main' },
                            },
                        }}
                    >
                        Atualizar
                    </Button>
                    <Button
                        fullWidth
                        disabled={collectionInProgress || currentVolume === volume}
                        variant="contained"
                        color="primary"
                        onClick={handleReset}
                    >
                        Redefinir
                    </Button>
                    <Button
                        disabled={!collectionInProgress}
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={completeCollection}
                    >
                        Confirmar Coleta
                    </Button>
                </Box>
                {collectionInProgress && (
                    <TapeWarning textArr={new Array(10).fill('Coleta em Andamento')} />
                )}
            </CardContent>
        </Card>
    );
};

export default StorageStation;
