'use server';

import { createQueryString } from '@/helpers/createQueryString';

const REM_WASTE_API_URL = process.env.REM_WASTE_API_URL;

export async function getSkipsByLocation({
    postcode,
    area,
}: {
    postcode?: string;
    area?: string;
}) {
    if (!REM_WASTE_API_URL) {
        throw new Error('API URL is not defined');
    }

    try {
        const queryString = createQueryString({
            postcode,
            area,
        });

        const response = await fetch(
            `${REM_WASTE_API_URL}/skips/by-location${queryString}`,
            {
                cache: 'force-cache',
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) {
            throw new Error(`Error fetching skips: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching skips:', error);
        throw error;
    }
}
