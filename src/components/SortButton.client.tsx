'use client';

import { cn } from '@/helpers/cn';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type SortButtonProps = {
    option: SortOption;
    sortDirection: SortDirection;
    handleSortChange: (optionValue: SortOption['value']) => void;
    isActive: boolean;
};

export default function SortButton({
    handleSortChange,
    isActive,
    option,
    sortDirection,
}: SortButtonProps) {
    return (
        <button
            key={option.value}
            onClick={() => handleSortChange(option.value)}
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
}
