import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Slide, Slider, Box, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

import { StorageStationProps } from '../ts/types';

const StorageStation: React.FC<StorageStationProps> = ({
    stationName,
    volume,
    onCollect,
    onVolumeChange,
}) => {
    const [isCollectionAvailable, setIsCollectionAvailable] = useState(false);
    const [isCollectionRequested, setIsCollectionRequested] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(volume);
    const collectionVolume = 80;

    const handleSliderChange = (_event: any, newValue: number | number[]) => {
        setCurrentVolume(newValue as number);
    };

    useEffect(() => {
        if (volume >= collectionVolume && !isCollectionAvailable && currentVolume === volume) {
            setIsCollectionAvailable(true);
        } else {
            setIsCollectionAvailable(false);
        }
    }, [volume, currentVolume]);

    function handleCollect() {
        setIsCollectionRequested(true);
        console.log('pedido de coleta gerado');
        setTimeout(() => {
            onCollect();
            setIsCollectionAvailable(false);
            setIsCollectionRequested(false);
        }, 10000);
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
    return (
        <Card
            sx={{
                boxShadow: 3,
                border: '1px solid',
                borderColor: 'primary.light',
                position: 'relative',
                padding: 4,
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography variant="h5">{stationName}</Typography>
                    <Typography variant="body1" fontWeight="bold">
                        {displayValue()}
                        {currentVolume !== volume && currentVolume >= collectionVolume && (
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
                        disabled={isCollectionRequested}
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
                        variant="contained"
                        color="primary"
                        onClick={() => onVolumeChange(currentVolume)}
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
                    <Button fullWidth variant="contained" color="primary" onClick={handleReset}>
                        Redefinir
                    </Button>
                    <Button
                        disabled={!isCollectionAvailable}
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleCollect}
                    >
                        Confirmar Coleta
                    </Button>
                </Box>
            </CardContent>

            <Slide
                direction="up"
                in={isCollectionRequested}
                mountOnEnter
                unmountOnExit
                timeout={{ enter: 500, exit: 500 }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        backgroundColor: 'tomato',
                        color: 'white',
                        textAlign: 'center',
                        padding: 1,
                    }}
                >
                    Coleta em andamento
                </Box>
            </Slide>
        </Card>
    );
};

export default StorageStation;

// stations = {
// 	id: string  // PK tabela 1
// 	stationName: string // tabela 1
// 	createdAt: date // tabela 1

// }
// collections = {
// 	station: stationId // tabela 2
// 	completedBy: string // (user) tabela 2
// 	collection: date // PK tabela 2
// }

// data = {
// 	stations = {
// 		stationName: string // tabela 1
// 		stationId: string  // PK tabela 1
// 		collections = [
// 			{
// 				station: stationId // tabela 2
// 				completedBy: string // (user) tabela 2
// 				collection: date // PK tabela 2
// 			},
// 			{
// 				station: stationId // tabela 2
// 				completedBy: string // (user) tabela 2
// 				collection: date // PK tabela 2
// 			}
// 		]
// 	}

// }
