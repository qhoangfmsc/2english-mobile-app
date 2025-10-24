import * as Notifications from 'expo-notifications';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OnboardingStepProps } from '../../common/types';

// Cấu hình notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function NotificationStep({ onboardingData, setOnboardingData }: OnboardingStepProps) {
  const [isRequestingNotification, setIsRequestingNotification] = useState(false);

  const requestNotificationPermission = useCallback(async () => {
    try {
      setIsRequestingNotification(true);
      
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      setOnboardingData(prev => ({
        ...prev,
        notificationPermission: finalStatus === 'granted'
      }));

      if (finalStatus !== 'granted') {
        console.log('Permission denied');
      } else {
        console.log('Permission granted');
      }
      
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    } finally {
      setIsRequestingNotification(false);
    }
  }, [setOnboardingData]);

  useEffect(() => {
    requestNotificationPermission();
  }, [requestNotificationPermission]);

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </View>
        
        <Text style={styles.title}>Nhận thông báo học tập</Text>
        <Text style={styles.subtitle}>
          Cho phép chúng tôi gửi thông báo để nhắc nhở bạn học tiếng Anh hàng ngày
        </Text>
      </View>

      <View style={styles.benefitsList}>
        <View style={styles.benefitItem}>
          <Text style={styles.benefitIcon}>⏰</Text>
          <Text style={styles.benefitText}>Lời nhắc học tập hàng ngày</Text>
        </View>
        
        <View style={styles.benefitItem}>
          <Text style={styles.benefitIcon}>📈</Text>
          <Text style={styles.benefitText}>Theo dõi tiến độ học tập</Text>
        </View>
        
        <View style={styles.benefitItem}>
          <Text style={styles.benefitIcon}>🎯</Text>
          <Text style={styles.benefitText}>Thông báo về mục tiêu mới</Text>
        </View>
        
        <View style={styles.benefitItem}>
          <Text style={styles.benefitIcon}>🏆</Text>
          <Text style={styles.benefitText}>Chúc mừng khi đạt thành tích</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  notificationIcon: {
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  benefitsList: {
    marginBottom: 40,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    marginBottom: 12,
  },
  benefitIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  statusContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#F0F9FF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0EA5E9',
  },
  loadingIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  loadingText: {
    fontSize: 16,
    color: '#0EA5E9',
    fontWeight: '500',
    textAlign: 'center',
  },
  completedContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#F0FDF4',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  completedIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  completedText: {
    fontSize: 16,
    color: '#22C55E',
    fontWeight: '500',
    textAlign: 'center',
  },
});
