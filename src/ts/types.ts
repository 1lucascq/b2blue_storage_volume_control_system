declare module '@mui/material/styles' {
	interface Palette {
		tertiary: Palette['primary'];
	}
	interface PaletteOptions {
		tertiary?: PaletteOptions['primary'];
	}
}

export interface Station {
	id: number;
	name: string;
	volume: number;
	created_at: string;
}

export interface StorageStationProps {
	stationName: string;
	volume: number;
	onCollect: () => void;
	onVolumeChange: (newVolume: number) => void;
}
