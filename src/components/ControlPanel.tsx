import React, { useState, useEffect } from 'react';
import StorageStation from './StorageStation';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '../utils/utils';
import { Station } from '../ts/types';

const ControlPanel: React.FC = () => {
	const { data: stationsData, error, isLoading } = useQuery<Station[], Error>({
		queryKey: ['stations'],
		queryFn: fetchItems
	});
	const [stations, setStations] = useState<Station[]>([]);

	useEffect(() => {
		if (stationsData) {
			setStations(stationsData);
		}
	}, [stationsData]);

	// if (error) return <div>Error: {error.message}</div>;

	if (isLoading) return <div>Loading...</div>;

	const handleCollect = (index: number) => {
		const newStations = [...stations];
		newStations[index].volume = 0;
		setStations(newStations);
	};

	const handleVolumeChange = (index: number, newVolume: number) => {
		const newStations = [...stations];
		newStations[index].volume = newVolume;
		setStations(newStations);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
			{stations.map((station, index) => (
				<StorageStation
					key={index}
					stationName={station.name}
					volume={station.volume}
					onCollect={() => handleCollect(index)}
					onVolumeChange={(newVolume) => handleVolumeChange(index, newVolume)}
				/>
			))}
		</Box>
	);
};

export default ControlPanel;
