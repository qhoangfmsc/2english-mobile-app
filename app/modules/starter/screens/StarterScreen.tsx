import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from '../../../components/ProgressBar';
import CompletionStep from '../components/steps/CompletionStep';
import LanguageStep from '../components/steps/LanguageStep';
import LearningMethodStep from '../components/steps/LearningMethodStep';
import LevelStep from '../components/steps/LevelStep';
import NotificationStep from '../components/steps/NotificationStep';
import ReasonStep from '../components/steps/ReasonStep';
import TopicStep from '../components/steps/TopicStep';
import { OnboardingData, OnboardingStep } from '../types';

export default function StarterScreen() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    language: '',
    level: '',
    reason: '',
    learningMethods: [],
    topics: [],
    notificationPermission: false,
  });
  const totalSteps = 7;
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    }
  };

  const handleFinish = () => {
    router.push('/');
  };

  const renderCurrentStep = () => {
    const stepProps = {
      onboardingData,
      setOnboardingData,
    };

    switch (currentStep) {
      case 1:
        return <LanguageStep {...stepProps} />;
      case 2:
        return <LevelStep {...stepProps} />;
      case 3:
        return <ReasonStep {...stepProps} />;
      case 4:
        return <LearningMethodStep {...stepProps} />;
      case 5:
        return <TopicStep {...stepProps} />;
      case 6:
        return <NotificationStep {...stepProps} />;
      case 7:
        return <CompletionStep />;
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return onboardingData.language !== '';
      case 2:
        return onboardingData.level !== '';
      case 3:
        return onboardingData.reason !== '';
      case 4:
        return onboardingData.learningMethods.length > 0;
      case 5:
        return onboardingData.topics.length > 0;
      case 6:
        return true; // Notification step is optional
      case 7:
        return true; // Final step
      default:
        return false;
    }
  };

  const shouldBlockBack = () => {
    // Block back navigation if user has granted notification permission
    return onboardingData.notificationPermission;
  };

  const handleBack = () => {
    if (shouldBlockBack()) {
      Alert.alert(
        "Không thể quay lại",
        "Bạn đã hoàn thành onboarding. Vui lòng tiếp tục để bắt đầu học.",
        [{ text: "OK" }]
      );
      return;
    }
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as OnboardingStep);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      
      {renderCurrentStep()}

      <View style={styles.bottomSection}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Quay lại</Text>
          </TouchableOpacity>
        )}

        {currentStep < totalSteps && (
          <TouchableOpacity
            style={[
              styles.continueButton,
              !canProceed() && styles.continueButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!canProceed()}
          >
            <Text
              style={[
                styles.continueButtonText,
                !canProceed() && styles.continueButtonTextDisabled,
              ]}
            >
              Tiếp tục
            </Text>
          </TouchableOpacity>
        )}

        {currentStep === totalSteps && (
          <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
            <Text style={styles.finishButtonText}>Bắt đầu học</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },
  bottomSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
    gap: 12,
  },
  backButton: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  backButtonText: {
    color: "#374151",
    fontSize: 18,
    fontWeight: "600",
  },
  continueButton: {
    flex: 2,
    backgroundColor: "#007bff",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  continueButtonDisabled: {
    backgroundColor: "#E5E7EB",
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  continueButtonTextDisabled: {
    color: "#9CA3AF",
  },
  finishButton: {
    flex: 1,
    backgroundColor: "#28A745",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  finishButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
