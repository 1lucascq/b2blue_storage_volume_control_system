// src/components/shared/ActionButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { ActionButtonProps } from '../../ts/types';

const ActionButton: React.FC<ActionButtonProps> = ({
    fullWidth = false,
    disabled = false,
    variant = 'contained',
    color = 'primary',
    onClick,
    children,
    sx = {},
}) => {
    return (
        <Button
            fullWidth={fullWidth}
            disabled={disabled}
            variant={variant}
            color={color}
            onClick={onClick}
            sx={sx}
        >
            {children}
        </Button>
    );
};

export default ActionButton;
