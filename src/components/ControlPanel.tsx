import React, { useState, useEffect } from 'react';
import StorageStation from './StorageStation';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchData, insertReport, updateStation } from '../utils/utils';
import { ControlPanelProps, Station } from '../ts/types';

const ControlPanel: React.FC<ControlPanelProps> = ({ userName, stationsData }) => {
    const [stations, setStations] = useState<Station[]>(stationsData);

    useEffect(() => {
        if (stationsData) {
            setStations(stationsData);
        }
    }, [stationsData]);

    // if (error) return <div>Error: {error.message}</div>;

    const handleStationUpdate = (index: number, updatedFields: Partial<Station>) => {
        const newStations = [...stations];
        newStations[index] = { ...newStations[index], ...updatedFields };
        updateStation('stations', updatedFields, newStations[index].id);
        setStations(newStations);
        console.log('handleStationUpdate --> ', stations);
    };

    const handleStartCollection = async (index: number) => {
        const newValues = { collectionInProgress: true };
        await updateStation('stations', newValues, stations[index].id);
        handleStationUpdate(index, newValues);

        // if (!updatedStation.collectionInProgress) throw new Error('Failed to update station');
    };

    function getReportData(index: number) {
        const date = new Date();
        const gmt3Offset = 180;
        const adjustedISODate = new Date(date.getTime() - gmt3Offset * 60 * 1000).toISOString();

        return {
            date: adjustedISODate,
            station: stations[index].name,
            registeredBy: userName,
        };
    }

    const handleCompleteCollection = async (index: number): Promise<Station> => {
        const newValues = { collectionInProgress: false, volume: 0 };
        const completedStation = await updateStation('stations', newValues, stations[index].id);
        const report = await insertReport('collectionReports', getReportData(index));
        handleStationUpdate(index, newValues);

        return completedStation;
    };

    console.log('rendering ControlPanel --> stations', stations);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {stations.map((station, index) => (
                <StorageStation
                    key={index}
                    stationName={station.name}
                    collectionInProgress={station.collectionInProgress}
                    volume={station.volume}
                    onStartCollection={() => handleStartCollection(index)}
                    onStationChange={(updatedFields: Partial<Station>) =>
                        handleStationUpdate(index, updatedFields)
                    }
                    onCompleteCollection={() => handleCompleteCollection(index)}
                />
            ))}
        </Box>
    );
};

export default ControlPanel;
