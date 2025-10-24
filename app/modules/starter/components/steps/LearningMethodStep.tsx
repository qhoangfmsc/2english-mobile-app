import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingStepProps } from '../../common/types';

const learningMethods = [
  {
    id: 'listening',
    name: 'Luyện nghe',
    description: 'Cải thiện kỹ năng nghe hiểu',
    icon: '🎧',
    color: '#4CAF50',
  },
  {
    id: 'speaking',
    name: 'Luyện nói',
    description: 'Phát triển kỹ năng giao tiếp',
    icon: '🗣️',
    color: '#2196F3',
  },
  {
    id: 'reading',
    name: 'Luyện đọc',
    description: 'Nâng cao khả năng đọc hiểu',
    icon: '📖',
    color: '#FF9800',
  },
  {
    id: 'writing',
    name: 'Luyện viết',
    description: 'Cải thiện kỹ năng viết',
    icon: '✍️',
    color: '#9C27B0',
  },
  {
    id: 'vocabulary',
    name: 'Học từ vựng',
    description: 'Mở rộng vốn từ vựng',
    icon: '📚',
    color: '#F44336',
  },
  {
    id: 'grammar',
    name: 'Ngữ pháp',
    description: 'Nắm vững cấu trúc câu',
    icon: '📝',
    color: '#607D8B',
  },
  {
    id: 'exercises',
    name: 'Bài tập',
    description: 'Thực hành với các bài tập',
    icon: '📋',
    color: '#795548',
  },
  {
    id: 'conversation',
    name: 'Hội thoại',
    description: 'Luyện tập giao tiếp thực tế',
    icon: '💬',
    color: '#E91E63',
  },
];

export default function LearningMethodStep({ onboardingData, setOnboardingData }: OnboardingStepProps) {
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Cách bạn muốn học</Text>
        <Text style={styles.subtitle}>
          Chọn các phương pháp học mà bạn quan tâm (có thể chọn nhiều)
        </Text>
      </View>

      <View style={styles.listContainer}>
        {learningMethods.map((method) => {
          const isSelected = onboardingData.learningMethods.includes(method.id);
          return (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodItem,
                isSelected && styles.methodItemSelected,
                { borderColor: isSelected ? method.color : '#E5E7EB' },
              ]}
              onPress={() => {
                setOnboardingData(prev => ({
                  ...prev,
                  learningMethods: isSelected 
                    ? prev.learningMethods.filter(id => id !== method.id)
                    : [...prev.learningMethods, method.id]
                }));
              }}
            >
              <View style={styles.methodIconContainer}>
                <Text style={styles.methodIcon}>{method.icon}</Text>
              </View>
              
              <View style={styles.methodContent}>
                <Text style={[
                  styles.methodName,
                  isSelected && { color: method.color },
                ]}>
                  {method.name}
                </Text>
                <Text style={styles.methodDescription}>
                  {method.description}
                </Text>
              </View>

              {isSelected && (
                <View style={[styles.checkmark, { backgroundColor: method.color }]}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {onboardingData.learningMethods.length > 0 && (
        <View style={styles.selectedCount}>
          <Text style={styles.selectedCountText}>
            Đã chọn {onboardingData.learningMethods.length} phương pháp
          </Text>
        </View>
      )}
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
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderWidth: 2,
  },
  methodItemSelected: {
    backgroundColor: '#F0F8FF',
  },
  methodIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
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
  methodIcon: {
    fontSize: 20,
  },
  methodContent: {
    flex: 1,
  },
  methodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  methodDescription: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedCount: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedCountText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },
});
