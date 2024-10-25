import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchData } from '../../utils/api';
import { Report, Station } from '../../ts/types';

export const useFetchData = <TData extends Station[] | Report[], TError>(
    endpoint: string,
    options: UseQueryOptions<TData, TError>
) => {
    const result = useQuery<TData, TError>({
        queryFn: () => fetchData(endpoint) as Promise<TData>,
        ...options,
    });

    return result;
};
