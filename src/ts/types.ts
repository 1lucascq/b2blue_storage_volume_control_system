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
    created_at?: string;
    collectionInProgress: boolean;
}

export interface Report {
    id?: number;
    date?: string;
    station: string;
    registeredBy: string;
}

export interface ControlPanelProps {
    userName: string;
	stationsData: Station[];
}

export interface StorageStationProps {
    stationName: string;
    volume: number;
    collectionInProgress: boolean;
    onStartCollection: () => void;
    onStationChange: (updatedFields: Partial<Station>) => void;
    onCompleteCollection: () => Promise<Station>;
}

export interface TapeWarningProps {
    textArr: string[];
}

export interface ReportsModalProps {
    open: boolean;
    onClose: () => void;
}

export interface ReportsTableProps {
    reports: Report[];
}
