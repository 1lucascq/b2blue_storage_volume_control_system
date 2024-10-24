import supabase from '../services/supabaseClient';
import { Station } from '../ts/types';

export const fetchData = async (table: string): Promise<Station[]> => {
    const { data: stations, error } = await supabase.from<string, Station[]>(table).select('*');

    if (error) {
        throw new Error(error.message);
    }
    return (stations as Station[]).sort((a, b) => a.id - b.id) || [];
};

export const updateStations = async (
    table: string,
    updateFields: Partial<Station>,
    id: number
): Promise<Station[]> => {
    const { data: station, error } = await supabase
        .from(table)
        .update(updateFields)
        .eq('id', id)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return (station as Station[]) || [];
};
