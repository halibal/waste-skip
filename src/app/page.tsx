import { getSkipsByLocation } from '@/actions/getSkipsByLocation.action';

const postcode = 'NR32';
const area = 'Lowestoft';

export default async function HomePage() {
    const data = await getSkipsByLocation({
        postcode,
        area,
    });

    return <div>HomePage</div>;
}
