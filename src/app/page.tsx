import { getSkipsByLocation } from '@/actions/getSkipsByLocation.action';
import { SkipSelectionProgress } from '@/components/home/SkipSelectionProgress.server';
import { SkipSizeIntro } from '@/components/home/SkipSizeIntro.server';

const postcode = 'NR32';
const area = 'Lowestoft';

export default async function HomePage() {
    const data = await getSkipsByLocation({
        postcode,
        area,
    });

    return (
        <div className="min-h-screen">
            <main className="mx-auto max-w-7xl px-4 py-8">
                <SkipSelectionProgress />
                <SkipSizeIntro />
            </main>
        </div>
    );
}
