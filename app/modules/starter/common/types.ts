export type OnboardingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface OnboardingData {
  language: string;
  level: string;
  reason: string;
  learningMethods: string[];
  topics: string[];
  notificationPermission: boolean;
}

export interface OnboardingStepProps {
  onboardingData: OnboardingData;
  setOnboardingData: React.Dispatch<React.SetStateAction<OnboardingData>>;
}

export interface OnboardingNavigationProps {
  currentStep: OnboardingStep;
  totalSteps: number;
  canProceed: boolean;
  shouldBlockBack: boolean;
  onNext: () => void;
  onBack: () => void;
  onFinish: () => void;
}
