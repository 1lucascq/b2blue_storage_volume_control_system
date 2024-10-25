import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { ReportsTableProps } from '../../ts/types';

function filterDate(date: string) {
	const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth();
    const year = parsedDate.getFullYear();
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();

    return `${day}/${month + 1}/${year} - ${hours}:${minutes}`;
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
    return (
        <TableContainer component={Paper} sx={{ my: 3}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Estação</TableCell>
                        <TableCell>Responsável</TableCell>
                        <TableCell>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.map((report) => (
                        <TableRow key={report.id}>
                            <TableCell>{report.station}</TableCell>
                            <TableCell>{report.registeredBy}</TableCell>
                            <TableCell>{filterDate(report.date!)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReportsTable;
