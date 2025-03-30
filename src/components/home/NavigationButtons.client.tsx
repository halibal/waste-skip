'use client';

import { cn } from '@/helpers/cn';
import { useSkipHiringProgress } from '@/hooks/useSkipHiringProgress';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export default function NavigationButtons() {
    const { goToNextStep, goToPreviousStep, isSkipSizeSelected } =
        useSkipHiringProgress();

    function handleProceedToNextStep() {
        goToNextStep();
    }

    function handleBackToPreviousStep() {
        goToPreviousStep();
    }

    return (
        <>
            <button
                className={cn(
                    'group absolute top-0 right-0 bottom-0 hidden w-[20%] justify-center border-0 shadow-none lg:flex',
                    {
                        'cursor-default': !isSkipSizeSelected,
                        'cursor-pointer': isSkipSizeSelected,
                    }
                )}
                title={
                    isSkipSizeSelected
                        ? 'Continue to Permit Check'
                        : 'Select a Skip Size to Continue'
                }
                type="button"
                onClick={handleProceedToNextStep}
                data-tid="proceed-to-next-step"
                disabled={!isSkipSizeSelected}
                aria-disabled={!isSkipSizeSelected}
            >
                <div
                    id="proceed-next-arrow"
                    className={cn(
                        'bg-transparent transition-all duration-500',
                        {
                            'bg-secondary': isSkipSizeSelected,
                            'group-hover:bg-secondary/20': !isSkipSizeSelected,
                        }
                    )}
                ></div>
                <span
                    className={cn(
                        'absolute top-[30%] translate-x-1/12 -translate-y-1/2 text-4xl opacity-0 transition-all duration-500',
                        {
                            'opacity-100': isSkipSizeSelected,
                            'group-hover:opacity-20': !isSkipSizeSelected,
                        }
                    )}
                >
                    Continue
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
            <div className="mt-4 flex w-full justify-between gap-2 lg:hidden">
                <button
                    className="cursor-pointer rounded-lg border bg-white px-4 py-2 text-secondary shadow-none hover:bg-gray-50"
                    title="Back to Waste Type"
                    type="button"
                    onClick={handleBackToPreviousStep}
                    data-tid="back-to-waste-type"
                >
                    <LuChevronLeft className="ml-2 inline-block text-lg" />
                    Back to Waste Type
                </button>
                <button
                    className={cn('rounded-lg px-4 py-2 text-white', {
                        'cursor-default bg-secondary/50': !isSkipSizeSelected,
                        'cursor-pointer bg-secondary hover:bg-secondary/80':
                            isSkipSizeSelected,
                    })}
                    title={
                        isSkipSizeSelected
                            ? 'Continue to Permit Check'
                            : 'Select a Skip Size to Continue'
                    }
                    type="button"
                    onClick={handleProceedToNextStep}
                    data-tid="continue-to-permit-check"
                    disabled={!isSkipSizeSelected}
                    aria-disabled={!isSkipSizeSelected}
                >
                    Continue to Permit Check
                    <LuChevronRight className="ml-2 inline-block text-lg" />
                </button>
            </div>
        </>
    );
}
