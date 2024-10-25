import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import TapeWarning from './TapeWarning';
import { StorageStationProps } from '../../ts/types';
import { styled } from '@mui/system';
import StationHeader from './StationHeader';
import StationSlider from './StationSlider';
import StationButtons from './StationButtons';

const AUTO_COLLECT_VOLUME = 80;

const StyledCard = styled(Card)`
    box-shadow: 3;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.primary.light};
    position: relative;
    padding: ${({ theme }) => theme.spacing(4)};
    background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const StorageStation: React.FC<StorageStationProps> = ({
    stationName,
    volume,
    collectionInProgress,
    onStartCollection,
    onCompleteCollection,
    onStationChange,
}) => {
    const [currentVolume, setCurrentVolume] = useState(volume);

    useEffect(() => {
        const startCollection = () => {
            onStartCollection();
        };

        if (volume >= AUTO_COLLECT_VOLUME && currentVolume === volume && !collectionInProgress) {
            startCollection();
        }
    }, [volume, currentVolume, collectionInProgress, onStartCollection]);

    useEffect(() => {
        setCurrentVolume(volume);
    }, [volume]);

    const handleSliderChange = (_event: any, newValue: number | number[]) => {
        setCurrentVolume(newValue as number);
    };

    const completeCollection = async () => {
        await onCompleteCollection();
    };

    const handleReset = () => {
        setCurrentVolume(volume);
    };

    const displayValue = () => {
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
    };

    console.log('rendering StorageStation');
    return (
        <StyledCard>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <StationHeader
                    stationName={stationName}
                    displayValue={displayValue()}
                    currentVolume={currentVolume}
                    volume={volume}
                    autoCollectVolume={AUTO_COLLECT_VOLUME}
                />

                <StationSlider
                    value={currentVolume}
                    disabled={collectionInProgress}
                    onChange={handleSliderChange}
                />

                <StationButtons
                    collectionInProgress={collectionInProgress}
                    currentVolume={currentVolume}
                    volume={volume}
                    onStationChange={onStationChange}
                    handleReset={handleReset}
                    completeCollection={completeCollection}
                />

                {collectionInProgress && (
                    <TapeWarning textArr={new Array(10).fill('Coleta em Andamento')} />
                )}
            </CardContent>
        </StyledCard>
    );
};

export default StorageStation;
