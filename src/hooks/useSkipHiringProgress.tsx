import { SkipHiringProgressContext } from '@/context/skip-hiring-progress-context';
import { useContext } from 'react';

export function useSkipHiringProgress() {
    const context = useContext(SkipHiringProgressContext);
    if (context === undefined) {
        throw new Error(
            'useSkipHiringProgress must be used within a SkipHiringProgressProvider'
        );
    }
    return context;
}
