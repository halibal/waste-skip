import { cn } from '@/helpers/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional class names to extend or override default styles
     */
    className?: string;
}

/**
 * Skeleton component for loading state UI
 *
 * @example
 * // Basic usage
 * <Skeleton className="h-12 w-full" />
 *
 * // Custom styling
 * <Skeleton className="h-32 w-32 rounded-full" />
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
                className
            )}
            {...props}
        />
    );
}
