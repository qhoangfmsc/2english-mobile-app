import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingStepProps } from '../../types';

const levels = [
  {
    id: 'beginner',
    name: 'Mới bắt đầu',
    description: 'Tôi chưa biết gì về tiếng Anh',
    icon: '🌱',
    color: '#4CAF50',
  },
  {
    id: 'elementary',
    name: 'Cơ bản',
    description: 'Tôi biết một số từ và cụm từ đơn giản',
    icon: '📚',
    color: '#2196F3',
  },
  {
    id: 'intermediate',
    name: 'Trung bình',
    description: 'Tôi có thể giao tiếp cơ bản',
    icon: '🎯',
    color: '#FF9800',
  },
  {
    id: 'upper-intermediate',
    name: 'Trung cấp cao',
    description: 'Tôi có thể thảo luận các chủ đề phức tạp',
    icon: '🚀',
    color: '#9C27B0',
  },
  {
    id: 'advanced',
    name: 'Nâng cao',
    description: 'Tôi muốn cải thiện kỹ năng chuyên sâu',
    icon: '⭐',
    color: '#F44336',
  },
];

export default function LevelStep({ onboardingData, setOnboardingData }: OnboardingStepProps) {
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Trình độ tiếng Anh của bạn</Text>
        <Text style={styles.subtitle}>
          Chọn trình độ phù hợp để chúng tôi có thể cá nhân hóa trải nghiệm học tập
        </Text>
      </View>

      <View style={styles.listContainer}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={[
              styles.levelItem,
              onboardingData.level === level.id && styles.levelItemSelected,
              { borderColor: onboardingData.level === level.id ? level.color : '#E5E7EB' },
            ]}
            onPress={() => setOnboardingData(prev => ({ ...prev, level: level.id }))}
          >
            <View style={styles.levelIconContainer}>
              <Text style={styles.levelIcon}>{level.icon}</Text>
            </View>
            
            <View style={styles.levelContent}>
              <Text style={[
                styles.levelName,
                onboardingData.level === level.id && { color: level.color },
              ]}>
                {level.name}
              </Text>
              <Text style={styles.levelDescription}>
                {level.description}
              </Text>
            </View>

            {onboardingData.level === level.id && (
              <View style={[styles.checkmark, { backgroundColor: level.color }]}>
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
