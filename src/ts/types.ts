import { SelectChangeEvent } from '@mui/material';

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

export interface NameModalProps {
    open: boolean;
    onClose: (name: string) => void;
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

export interface SelectReportProps {
    filter: string;
    handleFilterChange: (event: SelectChangeEvent<string>) => void;
    filteredReports: any[];
    options: string[];
}

export interface ActionButtonProps {
    fullWidth?: boolean;
    disabled?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'success';
    onClick: () => void;
    children: React.ReactNode;
    sx?: object;
}

export interface StationHeaderProps {
    stationName: string;
    displayValue: React.ReactNode;
    currentVolume: number;
    volume: number;
    autoCollectVolume: number;
}

export interface StationSliderProps {
    value: number;
    disabled: boolean;
    onChange: (event: Event, newValue: number | number[]) => void;
}

export interface StationButtonsProps {
    collectionInProgress: boolean;
    currentVolume: number;
    volume: number;
    onStationChange: (updatedFields: Partial<{ volume: number }>) => void;
    handleReset: () => void;
    completeCollection: () => void;
}
