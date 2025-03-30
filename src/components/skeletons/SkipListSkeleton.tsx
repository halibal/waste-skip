import { Skeleton } from '@/components/Skeleton';

export default function SkipListSkeleton() {
    return (
        <div className="mx-auto max-w-3xl overflow-y-auto p-4">
            <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    <Skeleton className="h-5 w-14 bg-primary/30" />
                    <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="h-7 w-32 rounded-lg bg-primary/30"
                            />
                        ))}
                    </div>
                </div>
                <div className="max-h-[50vh] space-y-3 overflow-y-auto border-y border-secondary py-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative z-10 cursor-pointer overflow-hidden rounded-lg border-[3px] border-primary bg-white transition-all"
                        >
                            <div className="flex justify-between max-sm:flex-col">
                                <Skeleton className="h-14 w-full bg-secondary max-sm:rounded-b-none sm:h-[100px] sm:w-28 sm:rounded-r-none" />
                                <div className="flex-1 px-4 py-2 text-sm text-secondary max-md:flex max-md:flex-wrap max-md:items-center max-sm:justify-center max-sm:gap-2 md:space-y-3 md:p-6">
                                    <div className="flex items-center gap-1">
                                        <Skeleton className="h-5 w-24 bg-primary/30" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 max-sm:justify-center">
                                        <Skeleton className="h-5 w-32 bg-primary/30" />
                                        <Skeleton className="h-5 w-32 bg-primary/30 py-0.5" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-end px-4 py-2 sm:p-6">
                                    <Skeleton className="h-4 w-28 bg-primary/30" />
                                    <Skeleton className="mt-1 h-7 w-12 bg-primary/30" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
