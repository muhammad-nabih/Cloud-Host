import { FetchParams } from '@/types/types';

export const useFetch = async <T>({ url, parameter }: FetchParams): Promise<T> => {
	const query = parameter ? `?${parameter}` : '';
	const res = await fetch(`${url}${query}`);

	if (!res.ok) {
		throw new Error(`Failed to fetch data from ${url}`);
	}

	return res.json() as Promise<T>;
};
