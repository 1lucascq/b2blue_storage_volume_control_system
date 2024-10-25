import { useEffect, useState } from 'react';
import { Station } from '../../ts/types';

export const useStations = (stationsData: Station[]) => {
    const [stations, setStations] = useState<Station[]>(stationsData);

    useEffect(() => {
        if (stationsData) {
            setStations(stationsData);
        }
    }, [stationsData]);

    return { stations, setStations };
};
