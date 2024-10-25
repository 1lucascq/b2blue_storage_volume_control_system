import React from 'react';
import { Box, Slider } from '@mui/material';
import { StationSliderProps } from '../../ts/types';

const StationSlider: React.FC<StationSliderProps> = ({ value, disabled, onChange }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                value={value}
                disabled={disabled}
                onChange={onChange}
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
    );
};

export default StationSlider;