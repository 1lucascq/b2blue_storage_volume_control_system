// src/components/ReportsModal.tsx
import React, { useState } from 'react';
import {
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    CircularProgress,
    SelectChangeEvent,
    Typography,
    OutlinedInput,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../utils/api';
import { Report, ReportsModalProps } from '../../ts/types';
import ReportsTable from './ReportsTable';
import GenericModal from '../shared/GenericDialog';
import SelectReport from './SelectReport';

const ReportsModal: React.FC<ReportsModalProps> = ({ open, onClose }) => {
    const [filter, setFilter] = useState<string>('all');

    const {
        data: reports,
        error,
        isLoading,
    } = useQuery<Report[], Error>({
        queryKey: ['reports'],
        queryFn: () => fetchData('collectionReports') as Promise<Report[]>,
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
                        <>
                            <Typography variant="h2">OPS!</Typography>
                            <Typography>
                                Tivemos problemas com o servidor do Banco de Dados. Tente novamente
                                em alguns instantes enquanto o servidor é iniciado.
                            </Typography>
                        </>
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
