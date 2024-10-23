import supabase from '../services/supabaseClient';
import { Station } from '../ts/types';

export const fetchItems = async (): Promise<Station[]> => {
	const { data: stations, error } = await supabase.from<string, Station[]>('stations').select('*');

	if (error) {
		throw new Error(error.message);
	}
	return stations as Station[] || [];
};
