import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import GenericModal from './Modal';

interface NameModalProps {
    open: boolean;
    onClose: (name: string) => void;
}

const NameModal: React.FC<NameModalProps> = ({ open, onClose }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose(name);
    };

    return (
        <GenericModal
            open={open}
            title="Enter Your Name"
            content={
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
            }
            actions={
                <Button type="submit" form="name-form" color="primary">
                    Submit
                </Button>
            }
            onClose={() => onClose(name)}
        />
    );
};

export default NameModal;
