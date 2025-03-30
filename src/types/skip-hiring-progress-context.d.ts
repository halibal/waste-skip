type SkipHiringProgressContextType = {
    currentStep: number;
    totalSteps: number;
    activeStepId: string;
    goToStep: (step: number) => void;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
    goToStepById: (id: string) => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    completedSteps: number[];
    isSkipSizeSelected: boolean;
    handleSkipSizeSelection: (value: boolean) => void;
};
