import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingStepProps } from '../../types';

const reasons = [
  {
    id: 'career',
    name: 'Thăng tiến nghề nghiệp',
    description: 'Cải thiện cơ hội việc làm và thăng tiến',
    icon: '💼',
    color: '#4CAF50',
  },
  {
    id: 'travel',
    name: 'Du lịch',
    description: 'Giao tiếp khi đi du lịch nước ngoài',
    icon: '✈️',
    color: '#2196F3',
  },
  {
    id: 'education',
    name: 'Học tập',
    description: 'Theo học tại các trường quốc tế',
    icon: '🎓',
    color: '#FF9800',
  },
  {
    id: 'communication',
    name: 'Giao tiếp',
    description: 'Kết bạn và giao lưu với người nước ngoài',
    icon: '🗣️',
    color: '#9C27B0',
  },
  {
    id: 'entertainment',
    name: 'Giải trí',
    description: 'Xem phim, đọc sách, nghe nhạc tiếng Anh',
    icon: '🎬',
    color: '#F44336',
  },
  {
    id: 'personal',
    name: 'Cá nhân',
    description: 'Phát triển bản thân và mở rộng kiến thức',
    icon: '🌟',
    color: '#607D8B',
  },
];

export default function ReasonStep({ onboardingData, setOnboardingData }: OnboardingStepProps) {
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Tại sao bạn muốn học tiếng Anh?</Text>
        <Text style={styles.subtitle}>
          Hiểu được mục tiêu của bạn giúp chúng tôi tạo ra lộ trình học phù hợp nhất
        </Text>
      </View>

      <View style={styles.listContainer}>
        {reasons.map((reason) => (
          <TouchableOpacity
            key={reason.id}
            style={[
              styles.levelItem,
              onboardingData.reason === reason.id && styles.levelItemSelected,
              { borderColor: onboardingData.reason === reason.id ? reason.color : '#E5E7EB' },
            ]}
            onPress={() => setOnboardingData(prev => ({ ...prev, reason: reason.id }))}
          >
            <View style={styles.levelIconContainer}>
              <Text style={styles.levelIcon}>{reason.icon}</Text>
            </View>
            
            <View style={styles.levelContent}>
              <Text style={[
                styles.levelName,
                onboardingData.reason === reason.id && { color: reason.color },
              ]}>
                {reason.name}
              </Text>
              <Text style={styles.levelDescription}>
                {reason.description}
              </Text>
            </View>

            {onboardingData.reason === reason.id && (
              <View style={[styles.checkmark, { backgroundColor: reason.color }]}>
                <Text style={styles.checkmarkText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
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
  listContainer: {
    gap: 12,
  },
  levelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    borderWidth: 2,
  },
  levelItemSelected: {
    backgroundColor: '#F0F8FF',
  },
  levelIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  levelIcon: {
    fontSize: 24,
  },
  levelContent: {
    flex: 1,
  },
  levelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  levelDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
