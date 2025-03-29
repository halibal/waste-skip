import { Skeleton } from '@/components/Skeleton';

export default function SkipListSkeleton() {
    return (
        <div className="mx-auto max-h-[70vh] max-w-3xl overflow-y-auto p-4">
            <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer rounded-lg border-2 border-primary bg-amber-50/20 p-4 transition-all"
                    >
                        <div className="flex min-h-[100px] items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-5 w-5 rounded-full bg-primary/30" />
                                    <Skeleton className="h-5 w-32 bg-primary/30" />
                                </div>
                                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-24 bg-primary/30" />
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                        <Skeleton className="h-5 w-16 bg-primary/30" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <Skeleton className="h-5 w-20 bg-primary/30" />
                                <Skeleton className="mt-1 h-5 w-32 bg-primary/30" />
                                <Skeleton className="mt-1 h-5 w-20 bg-primary/30" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
