// src/components/ReportsModal.tsx
import React, { useState } from 'react';
import { Button, CircularProgress, SelectChangeEvent } from '@mui/material';
import { Report, ReportsModalProps } from '../../ts/types';
import GenericModal from '../shared/GenericDialog';
import SelectReport from './SelectReport';
import { useFetchData } from '../hooks/useFetchQuery';
import ErrorComponent from '../shared/Error';

const ReportsModal: React.FC<ReportsModalProps> = ({ open, onClose }) => {
    const [filter, setFilter] = useState<string>('all');

    const {
        data: reports,
        error,
        isLoading,
    } = useFetchData<Report[], Error>('collectionReports', {
        queryKey: ['reports'],
        enabled: open,
    });

    const filteredReports =
        filter === 'all' ? reports : reports?.filter((report) => report.station === filter);

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
        setFilter(event.target.value as string);
    };
    const options = Array.from(new Set(reports?.map((report) => report.station)));

    return (
        <GenericModal
            open={open}
            onClose={onClose}
            title="Relatório de Coletas"
            content={
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {isLoading ? (
                        <CircularProgress />
                    ) : error ? (
                        <ErrorComponent />
                    ) : (
                        <SelectReport
                            filter={filter}
                            handleFilterChange={handleFilterChange}
                            filteredReports={filteredReports || []}
                            options={options}
                        />
                    )}
                </div>
            }
            actions={
                <Button onClick={onClose} color="primary">
                    Fechar
                </Button>
            }
        />
    );
};

export default ReportsModal;
