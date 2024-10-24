// src/components/GenericModal.tsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

interface GenericModalProps {
	open: boolean;
	title: string;
	content: React.ReactNode;
	actions: React.ReactNode;
	onClose: () => void;
}

const GenericModal: React.FC<GenericModalProps> = ({ open, title, content, actions, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{content}</DialogContent>
			<DialogActions>{actions}</DialogActions>
		</Dialog>
	);
};

export default GenericModal;
