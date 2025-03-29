import { getSkipsByLocation } from '@/actions/getSkipsByLocation.action';
import SkipSelector from '@/components/home/SkipSelector.client';
import { wait } from '@/helpers/wait';

const POST_CODE = 'NR32';
const AREA = 'Lowestoft';

export default async function SkipList() {
    await wait(2000);
    const data = await getSkipsByLocation({
        postcode: POST_CODE,
        area: AREA,
    });

    return (
        <section
            id="skip-list"
            data-tid="skip-list"
            className="mx-auto max-h-[70vh] max-w-3xl overflow-y-auto p-4"
        >
            <SkipSelector skips={data} />
        </section>
    );
}
