'use client';

import SkipListItem from '@/components/home/SkipListItem';
import SortButton from '@/components/SortButton.client';
import { sortOptions } from '@/constants/sort-options';
import { cn } from '@/helpers/cn';
import { sortSkips } from '@/helpers/sortSkips';
import { useSkipHiringProgress } from '@/hooks/useSkipHiringProgress';
import { useMemo, useState } from 'react';

type SkipSelectorProps = {
    skips: Skip[];
    onSelect?: (skip: Skip | null) => void;
};

export default function SkipSelector({ skips, onSelect }: SkipSelectorProps) {
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
    const [sortOption, setSortOption] = useState<SortOption['value']>('size');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const { handleSkipSizeSelection } = useSkipHiringProgress();

    function handleSelect(skip: Skip) {
        if (selectedSkipId === skip.id) {
            setSelectedSkipId(null);
            if (onSelect) {
                onSelect(null);
            }
            handleSkipSizeSelection(null);

            return;
        }

        setSelectedSkipId(skip.id);
        if (onSelect) {
            onSelect(skip);
        }
        handleSkipSizeSelection(skip);
    }

    function handleSortChange(option: SortOption['value']) {
        if (sortOption === option) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortOption(option);
            setSortDirection('asc');
        }
    }

    const sortedSkips = useMemo(
        () => sortSkips(skips, sortOption, sortDirection),
        [skips, sortOption, sortDirection]
    );

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold">Sort by:</span>
                <div className="flex flex-wrap gap-2">
                    {sortOptions.map((option) => {
                        const isActive = sortOption === option.value;
                        return (
                            <SortButton
                                key={option.value}
                                handleSortChange={handleSortChange}
                                isActive={isActive}
                                option={option}
                                sortDirection={sortDirection}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="max-h-[50vh] space-y-3 overflow-y-auto border-y border-secondary py-2">
                {sortedSkips.map((skip) => (
                    <div
                        key={skip.id}
                        className={cn(
                            'relative z-10 cursor-pointer overflow-hidden rounded-lg border-[3px] bg-white transition-all',
                            'hover:border-primary hover:bg-white hover:shadow-sm',
                            selectedSkipId === skip.id
                                ? 'border-primary shadow-sm'
                                : 'border-gray-300',
                            skip.forbidden && 'cursor-not-allowed opacity-60',
                            {
                                'selected-skip-button-selected':
                                    selectedSkipId === skip.id,
                                'selected-skip-button-unselected':
                                    selectedSkipId !== skip.id,
                            }
                        )}
                        onClick={() => !skip.forbidden && handleSelect(skip)}
                        tabIndex={skip.forbidden ? -1 : 0}
                        onKeyDown={(e) => {
                            if (
                                (e.key === 'Enter' || e.key === ' ') &&
                                !skip.forbidden
                            ) {
                                e.preventDefault();
                                handleSelect(skip);
                            }
                        }}
                        role="radio"
                        aria-checked={selectedSkipId === skip.id}
                        aria-disabled={skip.forbidden}
                    >
                        <SkipListItem skip={skip} />
                    </div>
                ))}
            </div>
        </div>
    );
}
