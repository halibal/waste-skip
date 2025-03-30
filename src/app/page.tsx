import NavigationButtons from '@/components/home/NavigationButtons.client';
import SkipHiringProgressIndicator from '@/components/home/SkipHiringProgressIndicator';
import SkipList from '@/components/home/SkipList.server';
import { SkipSizeIntro } from '@/components/home/SkipSizeIntro.server';
import SkipListSkeleton from '@/components/skeletons/SkipListSkeleton';
import SkipBackground from '@/components/Skip';
import { SkipHiringProgressProvider } from '@/providers/SkipHiringProgressProvider';
import { Suspense } from 'react';

export default function HomePage() {
    return (
        <SkipHiringProgressProvider>
            <div className="min-h-screen">
                <main className="mx-auto min-h-screen max-w-3xl px-4 py-8">
                    <SkipHiringProgressIndicator />
                    <SkipSizeIntro />
                    <Suspense fallback={<SkipListSkeleton />}>
                        <SkipList />
                    </Suspense>
                    <SkipBackground />
                    <NavigationButtons />
                </main>
            </div>
        </SkipHiringProgressProvider>
    );
}
