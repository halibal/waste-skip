'use client';

import { cn } from '@/helpers/cn';
import { useSkipHiringProgress } from '@/hooks/useSkipHiringProgress';
import { useEffect, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export default function NavigationButtons() {
    const [skipSize, setSkipSize] = useState<number | null>(null);
    const { goToNextStep, goToPreviousStep, selectedSkipSize } =
        useSkipHiringProgress();

    function handleProceedToNextStep() {
        goToNextStep();
    }

    function handleBackToPreviousStep() {
        goToPreviousStep();
    }

    useEffect(() => {
        if (!selectedSkipSize) {
            setTimeout(() => {
                setSkipSize(null);
            }, 500);
            return;
        }

        setSkipSize(selectedSkipSize?.size);
    }, [selectedSkipSize]);

    return (
        <>
            <button
                className={cn(
                    'group absolute top-0 right-0 bottom-0 hidden w-[20%] justify-center border-0 shadow-none lg:flex',
                    {
                        'cursor-default': !selectedSkipSize,
                        'cursor-pointer': selectedSkipSize,
                    }
                )}
                title={
                    selectedSkipSize
                        ? 'Continue to Permit Check'
                        : 'Select a Skip Size to Continue'
                }
                type="button"
                onClick={handleProceedToNextStep}
                data-tid="proceed-to-next-step"
                disabled={!selectedSkipSize}
                aria-disabled={!selectedSkipSize}
            >
                <div
                    id="proceed-next-arrow"
                    className={cn(
                        'bg-transparent transition-all duration-500',
                        {
                            'bg-secondary': selectedSkipSize,
                            'group-hover:bg-secondary/20': !selectedSkipSize,
                        }
                    )}
                ></div>
                <span
                    className={cn(
                        'absolute top-[30%] translate-x-1/12 -translate-y-1/2 text-4xl opacity-0 transition-all duration-500',
                        {
                            'opacity-100': selectedSkipSize,
                            'group-hover:opacity-20': !selectedSkipSize,
                        }
                    )}
                >
                    Continue
                </span>
                <span
                    className={cn(
                        'absolute top-[35%] translate-x-1/12 -translate-y-1/2 text-2xl opacity-0 transition-all duration-500',
                        {
                            'opacity-100': selectedSkipSize,
                        }
                    )}
                >
                    {skipSize ? `(${skipSize} Yard)` : ''}
                </span>
            </button>
            <button
                className="group absolute top-0 bottom-0 left-0 hidden w-[20%] cursor-pointer justify-center border-0 shadow-none lg:flex"
                title="Back to Waste Type"
                type="button"
                onClick={handleBackToPreviousStep}
                data-tid="back-to-previous-step"
            >
                <div
                    id="back-arrow"
                    className="bg-transparent transition-all duration-500 group-hover:bg-secondary"
                ></div>
                <span className="absolute top-[30%] -translate-x-1/12 -translate-y-1/2 text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Back
                </span>
            </button>
            <p
                className={cn(
                    'mt-2 text-right text-sm font-medium text-secondary italic opacity-0 transition-opacity duration-500 lg:hidden',
                    {
                        'opacity-100': selectedSkipSize,
                        'group-hover:opacity-20': !selectedSkipSize,
                    }
                )}
            >
                You have selected a skip size of {skipSize} Yard.
            </p>
            <div className="mt-2 flex w-full justify-between gap-2 lg:hidden">
                <button
                    className="flex w-1/2 cursor-pointer items-center justify-center rounded-lg border bg-white px-4 py-2 text-secondary shadow-none transition-all duration-500 hover:bg-gray-50 sm:w-1/3"
                    title="Back to Waste Type"
                    type="button"
                    onClick={handleBackToPreviousStep}
                    data-tid="back-to-waste-type"
                >
                    <LuChevronLeft className="mr-1 text-lg" />
                    Back
                </button>
                <button
                    className={cn(
                        'flex w-1/2 items-center justify-center rounded-lg px-4 py-2 text-white transition-all duration-500 sm:w-1/3',
                        {
                            'cursor-default bg-secondary/50': !selectedSkipSize,
                            'cursor-pointer bg-secondary hover:bg-secondary/80':
                                selectedSkipSize,
                        }
                    )}
                    title={
                        selectedSkipSize
                            ? 'Continue to Permit Check'
                            : 'Select a Skip Size to Continue'
                    }
                    type="button"
                    onClick={handleProceedToNextStep}
                    data-tid="continue-to-permit-check"
                    disabled={!selectedSkipSize}
                    aria-disabled={!selectedSkipSize}
                >
                    Continue
                    <LuChevronRight className="ml-1 text-lg" />
                </button>
            </div>
        </>
    );
}
