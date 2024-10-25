import React from 'react';
import StorageStation from '../StorageStation/StorageStation';
import { Box } from '@mui/material';
import { insertReport, updateStation } from '../../utils/api';
import { ControlPanelProps, Station } from '../../ts/types';
import { useStations } from '../hooks/useStations';

const ControlPanel: React.FC<ControlPanelProps> = ({ userName, stationsData }) => {
	const { stations, setStations } = useStations(stationsData);	
    const handleStationUpdate = (index: number, updatedFields: Partial<Station>) => {
        const newStations = [...stations];
        newStations[index] = { ...newStations[index], ...updatedFields };
        updateStation('stations', updatedFields, newStations[index].id);
        setStations(newStations);
    };

    const handleStartCollection = async (index: number) => {
        const newValues = { collectionInProgress: true };
        await updateStation('stations', newValues, stations[index].id);
        handleStationUpdate(index, newValues);
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
        await insertReport('collectionReports', getReportData(index));
        handleStationUpdate(index, newValues);

        return completedStation;
    };

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
