import supabase from '../services/supabaseClient';
import { Station, Report } from '../ts/types';

export const fetchData = async (table: string): Promise<Station[] | Report[]> => {
    const { data, error } = await supabase.from<string, Station[]>(table).select('*');

    if (error) {
        throw new Error(error.message);
    }

	if (table === 'collectionReports') {
		return (data as Report[]).sort((a, b) => a.station.localeCompare(b.station));
	}
	console.log(data)
    return (data as Station[]).sort((a, b) => a.id - b.id) || [];
};

export const updateStation = async (
    table: string,
    updateFields: Partial<Station>,
    id: number
): Promise<Station> => {
    const { data: station, error } = await supabase
        .from(table)
        .update(updateFields)
        .eq('id', id)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return (station[0] as Station) || [];
};

export const insertReport = async (table: string, report: Report): Promise<Report> => {
    const { data: newReport, error } = await supabase.from(table).insert(report).select();

    if (error) {
        throw new Error(error.message);
    }

    return (newReport[0] as Report) || [];
};

// export const stationReports = async (stationName: string) => {
//     const { data: stationReportsData, error } = await supabase
//         .from('stations')
//         .select(
//             `
// 				id,
// 				name,
// 				collections: collectionReports(id, date)
// 			`
//         )
//         .eq('name', stationName);

//     // console.log('stationReportsData', stationReportsData);

//     if (error) {
//         throw new Error(error.message);
//     } else if (stationReportsData) {
//         const collectionsList = stationReportsData.map((station) => ({
//             stationId: station.id,
//             stationName: station.name,
//             collection: station.collections.map((c) => c.id),
//             collectionDate: station.collections.map((c) => c.date),
//         }));

//         // console.log('collectionsList', collectionsList);
//         return collectionsList || [];
//     }
// };
