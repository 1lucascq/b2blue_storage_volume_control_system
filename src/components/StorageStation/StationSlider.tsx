import React from 'react';
import { Box, Slider } from '@mui/material';
import { StationSliderProps } from '../../ts/types';

const StationSlider: React.FC<StationSliderProps> = ({ value, disabled, onChange }) => {
    const getSliderColor = (value: number) => {
        switch (true) {
            case value < 50:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(0,212,255,1) 100%)';
            case value >= 50 && value < 55:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 90%, rgba(255, 240, 23, 0.933) 100%)';
            case value >= 55 && value < 60:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 83%, rgba(255, 240, 23, 0.933) 100%)';
            case value >= 60 && value < 65:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 77%, rgba(255, 240, 23, 0.933) 100%)';
            case value >= 65 && value < 70:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 67%, rgba(255, 240, 23, 0.933) 100%)';
            case value >= 70 && value < 75:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 63%, rgba(255, 240, 23, 0.933) 97%, rgba(255,0,0,1) 100%)';
            case value >= 75 && value < 80:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 55%, rgba(255, 240, 23, 0.933) 95%, rgba(255,0,0,1) 100%)';
            case value >= 80 && value < 90:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 55%, rgba(255, 240, 23, 0.933) 93%, rgba(255,0,0,1) 100%)';
            case value >= 90:
                return 'linear-gradient(90deg, rgba(0,212,255,1) 50%, rgba(255, 240, 23, 0.933) 80%, rgba(255,0,0,1) 100%)';
            default:
                break;
        }
    };
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
                        background: getSliderColor(value),
                    },
                    '& .MuiSlider-thumb': {
                        backgroundColor: disabled ? '#e8e8e8' : 'white',
                    },
                }}
            />
        </Box>
    );
};

export default StationSlider;
