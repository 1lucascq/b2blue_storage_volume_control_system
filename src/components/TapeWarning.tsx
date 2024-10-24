import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { TapeWarningProps } from '../ts/types';

const moveLeft = keyframes`
	0% { transform: translateX(30%); }
	100% { transform: translateX(0%); }
`;

const ScrollingBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    whiteSpace: 'nowrap',
    gap: theme.spacing(4),
    animation: `${moveLeft} 1s linear infinite`,
    animationDuration: '30s',
}));

const Marquee: React.FC<TapeWarningProps> = ({ textArr }) => {
    return (
        <Box sx={{ py: 4, overflowX: 'hidden' }}>
            <Box
                sx={{
                    background: 'linear-gradient(to right, #2196f3, #21cbf3)',
                    mx: -1,
					py: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        maskImage:
                            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        width: '100%',
                        justifyContent: 'end',
                    }}
                >
                    <ScrollingBox>
                        {[...textArr].map((text, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 4,
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        color: 'grey.900',
                                    }}
                                >
                                    {text}
                                </Typography>
                                <Typography>⚠️</Typography>
                            </Box>
                        ))}
                    </ScrollingBox>
                </Box>
            </Box>
        </Box>
    );
};

export default Marquee;
