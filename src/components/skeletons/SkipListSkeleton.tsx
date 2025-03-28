import { Skeleton } from '@/components/Skeleton';

export default function SkipListSkeleton() {
    return (
        <div className="mx-auto max-h-[70vh] max-w-3xl overflow-y-auto px-4 py-8">
            <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer rounded-lg border-2 bg-amber-50/20 p-4 transition-all"
                    >
                        <div className="flex min-h-[100px] items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-5 w-5 rounded-full border" />
                                    <Skeleton className="h-5 w-32" />
                                </div>
                                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16" />
                                        <Skeleton className="h-5 w-16" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16" />
                                        <Skeleton className="h-5 w-16" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16" />
                                        <Skeleton className="h-5 w-16" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-24" />
                                        <Skeleton className="h-5 w-16" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-5 w-16" />
                                        <Skeleton className="h-5 w-16" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <Skeleton className="h-5 w-20" />
                                <Skeleton className="mt-1 h-5 w-20" />
                                <Skeleton className="mt-1 h-5 w-20" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
