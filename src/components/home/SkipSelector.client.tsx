'use client';

import SkipListItem from '@/components/home/SkipListItem';
import { cn } from '@/helpers/cn';
import { useState } from 'react';

interface SkipSelectorProps {
    skips: Skip[];
    onSelect?: (skip: Skip | null) => void;
}

export default function SkipSelector({ skips, onSelect }: SkipSelectorProps) {
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

    function handleSelect(skip: Skip) {
        if (selectedSkipId === skip.id) {
            // Unselect if already selected
            setSelectedSkipId(null);
            if (onSelect) {
                onSelect(null);
            }

            return;
        }

        // Select new item
        setSelectedSkipId(skip.id);
        if (onSelect) {
            onSelect(skip);
        }
    }

    return (
        <div className="space-y-3">
            {skips.map((skip) => (
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
    );
}
