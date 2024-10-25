import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import {StationHeaderProps} from '../../ts/types'

const StationHeader: React.FC<StationHeaderProps> = ({
    stationName,
    displayValue,
    currentVolume,
    volume,
    autoCollectVolume,
}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">{stationName}</Typography>
            <Typography variant="body1" fontWeight="bold">
                {displayValue}
                {currentVolume !== volume && currentVolume >= autoCollectVolume && (
                    <Tooltip title="Salve o novo volume para iniciar a coleta" placement="top">
                        <WarningIcon sx={{ color: 'orange', position: 'absolute' }} />
                    </Tooltip>
                )}
            </Typography>
        </Box>
    );
};

export default StationHeader;