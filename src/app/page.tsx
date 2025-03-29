import SkipList from '@/components/home/SkipList.server';
import { SkipSelectionProgress } from '@/components/home/SkipSelectionProgress.server';
import { SkipSizeIntro } from '@/components/home/SkipSizeIntro.server';
import SkipListSkeleton from '@/components/skeletons/SkipListSkeleton';
import SkipBackground from '@/components/Skip';
import { Suspense } from 'react';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <main className="mx-auto min-h-screen max-w-7xl px-4 py-8">
                <SkipSelectionProgress />
                <SkipSizeIntro />
                <Suspense fallback={<SkipListSkeleton />}>
                    <SkipList />
                </Suspense>
                <SkipBackground />
            </main>
        </div>
    );
}
