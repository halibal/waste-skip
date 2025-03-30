'use client';

import { useState } from 'react';
import { skipHiringSteps } from '@/constants/skip-hiring-steps';
import { SkipHiringProgressContext } from '@/context/skip-hiring-progress-context';

interface SkipHiringProgressProviderProps {
    children: React.ReactNode;
    initialStep?: number;
}

export function SkipHiringProgressProvider({
    children,
    initialStep = 2,
}: SkipHiringProgressProviderProps) {
    const [currentStep, setCurrentStep] = useState<number>(initialStep);
    const [completedSteps, setCompletedSteps] = useState<number[]>([0, 1]);
    const [isSkipSizeSelected, setIsSkipSizeSelected] =
        useState<boolean>(false);

    const totalSteps = skipHiringSteps.length;
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;
    const activeStepId = skipHiringSteps[currentStep]?.id || '';

    function handleSkipSizeSelection(value: boolean) {
        setIsSkipSizeSelected(value);
    }

    function goToStep(step: number) {
        if (step >= 0 && step < totalSteps) {
            if (step > currentStep) {
                setCompletedSteps((prev) =>
                    prev.includes(currentStep) ? prev : [...prev, currentStep]
                );
            }
            setCurrentStep(step);
        }
    }

    function goToNextStep() {
        if (!isLastStep) {
            setCompletedSteps((prev) =>
                prev.includes(currentStep) ? prev : [...prev, currentStep]
            );
            setCurrentStep((prev) => prev + 1);
        }
    }

    function goToPreviousStep() {
        if (!isFirstStep) {
            setCurrentStep((prev) => prev - 1);
        }
    }

    function goToStepById(id: string) {
        const stepIndex = skipHiringSteps.findIndex((step) => step.id === id);
        if (stepIndex !== -1) {
            goToStep(stepIndex);
        }
    }

    const value = {
        currentStep,
        totalSteps,
        activeStepId,
        goToStep,
        goToNextStep,
        goToPreviousStep,
        goToStepById,
        isFirstStep,
        isLastStep,
        completedSteps,
        isSkipSizeSelected,
        handleSkipSizeSelection,
    };

    return (
        <SkipHiringProgressContext.Provider value={value}>
            {children}
        </SkipHiringProgressContext.Provider>
    );
}
