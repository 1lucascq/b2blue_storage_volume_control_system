import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import ReportsTable from './ReportsTable';
import { SelectReportProps } from '../../ts/types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const SelectReport: React.FC<SelectReportProps> = ({
    filter,
    handleFilterChange,
    filteredReports,
    options,
}) => {
    return (
        <>
            <FormControl sx={{ my: 3, width: 300 }}>
                <InputLabel>Estação</InputLabel>
                <Select
                    value={filter}
                    onChange={handleFilterChange}
                    input={<OutlinedInput label="Estação" />}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="all">Todas</MenuItem>
                    {options.map((station) => (
                        <MenuItem key={station} value={station}>
                            {station}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <ReportsTable reports={filteredReports || []} />
        </>
    );
};

export default SelectReport;
