import { useRef } from 'react';

type UseSwipeProps = {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    threshold?: number;
};

export function useSwipe({
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
}: UseSwipeProps) {
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > threshold;
        const isRightSwipe = distance < -threshold;

        if (isLeftSwipe && onSwipeLeft) onSwipeLeft();
        if (isRightSwipe && onSwipeRight) onSwipeRight();

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
    };
}
