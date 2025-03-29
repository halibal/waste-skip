'use client';

import SkipListItem from '@/components/home/SkipListItem';
import SortButton from '@/components/SortButton.client';
import { sortOptions } from '@/constants/sort-options';
import { cn } from '@/helpers/cn';
import { sortSkips } from '@/helpers/sortSkips';
import { useMemo, useState } from 'react';

type SkipSelectorProps = {
    skips: Skip[];
    onSelect?: (skip: Skip | null) => void;
};

export default function SkipSelector({ skips, onSelect }: SkipSelectorProps) {
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
    const [sortOption, setSortOption] = useState<SortOption['value']>('size');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    function handleSelect(skip: Skip) {
        if (selectedSkipId === skip.id) {
            setSelectedSkipId(null);
            if (onSelect) {
                onSelect(null);
            }

            return;
        }

        setSelectedSkipId(skip.id);
        if (onSelect) {
            onSelect(skip);
        }
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

            <div className="max-h-[70vh] space-y-3 overflow-y-auto">
                {sortedSkips.map((skip) => (
                    <div
                        key={skip.id}
                        className={cn(
                            'relative z-10 cursor-pointer overflow-hidden rounded-lg border-2 bg-amber-50/20 transition-all',
                            'hover:border-secondary hover:bg-white hover:shadow-sm',
                            selectedSkipId === skip.id
                                ? 'border-secondary bg-white shadow-sm'
                                : 'border-gray-200',
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
