import { Skeleton } from '@/components/Skeleton';

export default function SkipListSkeleton() {
    return (
        <div className="mx-auto max-h-[70vh] max-w-3xl overflow-y-auto">
            <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    <Skeleton className="h-5 w-14 bg-primary/30" />
                    <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="h-7 w-32 rounded-full bg-primary/30"
                            />
                        ))}
                    </div>
                </div>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer rounded-lg border-2 border-primary bg-amber-50/20 transition-all"
                    >
                        <div className="flex justify-between">
                            <Skeleton className="h-20 w-28 rounded-r-none bg-secondary" />
                            <div className="flex-1 p-4 text-sm text-secondary">
                                <div className="mb-2 flex items-center gap-1">
                                    <Skeleton className="h-5 w-24 bg-primary/30" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-5 w-32 bg-primary/30" />
                                    <Skeleton className="h-5 w-32 bg-primary/30" />
                                </div>
                            </div>
                            <div className="flex flex-col items-end p-4">
                                <Skeleton className="h-4 w-28 bg-primary/30" />
                                <Skeleton className="mt-1 h-7 w-12 bg-primary/30" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
