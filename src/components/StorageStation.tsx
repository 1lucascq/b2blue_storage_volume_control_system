import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Slide, Slider, Box } from '@mui/material';
import { StorageStationProps } from '../ts/types';

const StorageStation: React.FC<StorageStationProps> = ({ stationName, volume, onCollect, onVolumeChange }) => {
	const [isCollectionAvailable, setIsCollectionAvailable] = useState(false);
	const [isCollectionRequested, setIsCollectionRequested] = useState(false);
	const [currentVolume, setCurrentVolume] = useState(volume);

	const handleSliderChange = (_event: any, newValue: number | number[]) => {
		setCurrentVolume(newValue as number);
	};

	if (volume >= 80 && !isCollectionAvailable) setIsCollectionAvailable(true);

	function handleCollect() {
		setIsCollectionRequested(true);
		console.log('pedido de coleta gerado');
		setTimeout(() => {
			onCollect();
			setIsCollectionAvailable(false);
			setIsCollectionRequested(false);
		}, 10000);
	}

	return (
		<Card sx={{ boxShadow: 3, border: '1px solid', borderColor: 'primary.light', position: 'relative', padding: 4 }}>
			<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant='h5'>{stationName}</Typography>
					<Typography variant='body1' fontWeight='bold'>
						{currentVolume}%
					</Typography>
				</Box>

				<Box sx={{ width: '100%' }}>
					<Slider
						value={currentVolume}
						disabled={isCollectionRequested}
						onChange={handleSliderChange}
						aria-labelledby='continuous-slider'
						valueLabelDisplay='auto'
						min={0}
						max={100}
						size='medium'
						sx={{
							height: 18,
							'& .MuiSlider-track': {
								background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(121,90,9,1) 70%, rgba(255,0,57,1) 100%)',
							},
							'& .MuiSlider-thumb': {
								backgroundColor: 'white',
							},
						}}
					/>
				</Box>

				<Box display='flex' justifyContent='space-between' width='100%' gap={2}>
					<Button
						fullWidth
						variant='contained'
						color='primary'
						onClick={onVolumeChange.bind(null, currentVolume)}
						sx={{
							animation: currentVolume !== volume ? 'shake 3s infinite' : 'none',
							'@keyframes shake': {
								'0%': { transform: 'translate(0, 0)' },
								'2%': { transform: 'translate(-2px, -2px)' },
								'4%': { transform: 'translate(2px, 2px)' },
								'6%': { transform: 'translate(2px, -2px)' },
								'8%': { transform: 'translate(-2px, 2px)' },
								'10%': { transform: 'translate(0, 0)' },
								'100%': { transform: 'translate(0, 0)' },
							},
						}}
					>
						Atualizar
					</Button>
					<Button fullWidth variant='contained' color='primary' onClick={handleCollect}>
						Redefinir
					</Button>
					<Button disabled fullWidth variant='contained' color='primary' onClick={handleCollect}>
						Iniciar Coleta
					</Button>
				</Box>
			</CardContent>

			<Slide direction='up' in={isCollectionRequested} mountOnEnter unmountOnExit timeout={{ enter: 500, exit: 500 }}>
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
