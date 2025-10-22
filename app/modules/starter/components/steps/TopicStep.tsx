import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingStepProps } from '../../types';

const topics = [
  {
    id: 'business',
    name: 'Kinh doanh',
    description: 'Tiếng Anh thương mại và công việc',
    icon: '💼',
    color: '#4CAF50',
  },
  {
    id: 'travel',
    name: 'Du lịch',
    description: 'Giao tiếp khi đi du lịch',
    icon: '✈️',
    color: '#2196F3',
  },
  {
    id: 'education',
    name: 'Giáo dục',
    description: 'Học tập và nghiên cứu',
    icon: '🎓',
    color: '#FF9800',
  },
  {
    id: 'technology',
    name: 'Công nghệ',
    description: 'IT và công nghệ thông tin',
    icon: '💻',
    color: '#9C27B0',
  },
  {
    id: 'health',
    name: 'Sức khỏe',
    description: 'Y tế và chăm sóc sức khỏe',
    icon: '🏥',
    color: '#F44336',
  },
  {
    id: 'food',
    name: 'Ẩm thực',
    description: 'Nấu ăn và nhà hàng',
    icon: '🍽️',
    color: '#607D8B',
  },
  {
    id: 'sports',
    name: 'Thể thao',
    description: 'Các môn thể thao và fitness',
    icon: '⚽',
    color: '#795548',
  },
  {
    id: 'entertainment',
    name: 'Giải trí',
    description: 'Phim ảnh, âm nhạc, nghệ thuật',
    icon: '🎬',
    color: '#E91E63',
  },
  {
    id: 'daily-life',
    name: 'Cuộc sống hàng ngày',
    description: 'Giao tiếp trong sinh hoạt thường ngày',
    icon: '🏠',
    color: '#3F51B5',
  },
];

export default function TopicStep({ onboardingData, setOnboardingData }: OnboardingStepProps) {
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Chủ đề bạn quan tâm</Text>
        <Text style={styles.subtitle}>
          Chọn các chủ đề mà bạn muốn tập trung học (có thể chọn nhiều)
        </Text>
      </View>

      <View style={styles.listContainer}>
        {topics.map((topic) => {
          const isSelected = onboardingData.topics.includes(topic.id);
          return (
            <TouchableOpacity
              key={topic.id}
              style={[
                styles.methodItem,
                isSelected && styles.methodItemSelected,
                { borderColor: isSelected ? topic.color : '#E5E7EB' },
              ]}
              onPress={() => {
                setOnboardingData(prev => ({
                  ...prev,
                  topics: isSelected 
                    ? prev.topics.filter(id => id !== topic.id)
                    : [...prev.topics, topic.id]
                }));
              }}
            >
              <View style={styles.methodIconContainer}>
                <Text style={styles.methodIcon}>{topic.icon}</Text>
              </View>
              
              <View style={styles.methodContent}>
                <Text style={[
                  styles.methodName,
                  isSelected && { color: topic.color },
                ]}>
                  {topic.name}
                </Text>
                <Text style={styles.methodDescription}>
                  {topic.description}
                </Text>
              </View>

              {isSelected && (
                <View style={[styles.checkmark, { backgroundColor: topic.color }]}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {onboardingData.topics.length > 0 && (
        <View style={styles.selectedCount}>
          <Text style={styles.selectedCountText}>
            Đã chọn {onboardingData.topics.length} chủ đề
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
