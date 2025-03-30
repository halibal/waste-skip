'use client';

import { skipHiringSteps } from '@/constants/skip-hiring-steps';
import { useSkipHiringProgress } from '@/hooks/useSkipHiringProgress';

export default function SkipHiringProgressIndicator() {
    const { currentStep, totalSteps, completedSteps } = useSkipHiringProgress();

    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

    return (
        <section
            id="skip-hiring-progress-indicator"
            data-tid="skip-hiring-progress-indicator"
            className="mb-8"
        >
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-500">
                    Step {currentStep + 1} of {totalSteps}
                </h2>
            </div>
            <div className="relative">
                <div className="mb-4 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
                    <div
                        className="flex flex-col justify-center bg-primary text-center whitespace-nowrap text-white shadow-none"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <div className="flex justify-between">
                    {skipHiringSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center ${
                                index === currentStep
                                    ? 'font-medium text-primary'
                                    : 'text-gray-400'
                            }`}
                        >
                            <div
                                className={`mb-1 flex h-8 w-8 items-center justify-center rounded-full ${
                                    index === currentStep
                                        ? 'bg-primary text-white'
                                        : completedSteps.includes(index)
                                          ? 'bg-primary/20 text-primary'
                                          : 'bg-gray-100'
                                }`}
                            >
                                {step.icon}
                            </div>
                            <span className="hidden text-xs sm:block">
                                {step.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
