'use client';

import SkipListItem from '@/components/home/SkipListItem';
import { sortOptions } from '@/constants/sort-options';
import { cn } from '@/helpers/cn';
import { sortSkips } from '@/helpers/sortSkips';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type SkipSelectorProps = {
    skips: Skip[];
    onSelect?: (skip: Skip | null) => void;
};

export default function SkipSelector({ skips, onSelect }: SkipSelectorProps) {
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
    const [sortOption, setSortOption] = useState<SortOption>('size');
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

    function handleSortChange(option: SortOption) {
        if (sortOption === option) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortOption(option);
            setSortDirection('asc');
        }
    }

    const sortedSkips = sortSkips(skips, sortOption, sortDirection);

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold">Sort by:</span>
                <div className="flex flex-wrap gap-2">
                    {sortOptions.map((option) => {
                        const isActive = sortOption === option.value;
                        return (
                            <button
                                key={option.value}
                                onClick={() =>
                                    handleSortChange(option.value as SortOption)
                                }
                                className={cn(
                                    'flex cursor-pointer items-center gap-1 rounded-full px-3 py-1 text-sm transition-colors',
                                    isActive
                                        ? 'bg-[#0037c1] text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                )}
                                aria-pressed={isActive}
                                role="button"
                                tabIndex={0}
                                title={`Sort by ${option.label} (${isActive && sortDirection === 'desc' ? 'Highest first' : 'Lowest first'})`}
                                type="button"
                            >
                                {option.label}
                                {isActive && (
                                    <span className="ml-1 inline-flex items-center text-xs">
                                        {sortDirection === 'asc' ? (
                                            <FaArrowUp aria-label="Ascending" />
                                        ) : (
                                            <FaArrowDown aria-label="Descending" />
                                        )}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="space-y-3">
                {sortedSkips.map((skip) => (
                    <div
                        key={skip.id}
                        className={cn(
                            'relative cursor-pointer rounded-lg border-2 bg-amber-50/20 p-4 transition-all',
                            'hover:border-[#0037c1] hover:bg-white hover:shadow-sm',
                            selectedSkipId === skip.id
                                ? 'border-[#0037c1] bg-white shadow-sm'
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
