import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const targetProgress = (currentStep / totalSteps) * 100;
    
    Animated.timing(animatedWidth, {
      toValue: targetProgress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentStep, totalSteps, animatedWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View 
          style={[
            styles.progressFill, 
            { width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
              extrapolate: 'clamp',
            })}
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 2,
  },
  stepIndicator: {
    marginTop: 12,
    alignItems: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  stepDotActive: {
    backgroundColor: '#007bff',
  },
  stepDotInactive: {
    backgroundColor: '#D1D5DB',
  },
});
