import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingStepProps } from '../../types';

const languages = [
  { id: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { id: 'en', name: 'English', flag: '🇺🇸' },
  { id: 'zh', name: '中文', flag: '🇨🇳' },
  { id: 'ja', name: '日本語', flag: '🇯🇵' },
  { id: 'ko', name: '한국어', flag: '🇰🇷' },
  { id: 'th', name: 'ไทย', flag: '🇹🇭' },
];

export default function LanguageStep({ onboardingData, setOnboardingData }: OnboardingStepProps) {
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Chọn ngôn ngữ của bạn</Text>
        <Text style={styles.subtitle}>
          Chúng tôi sẽ sử dụng ngôn ngữ này để hướng dẫn bạn học tiếng Anh
        </Text>
      </View>

      <View style={styles.listContainer}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.id}
            style={[
              styles.listItem,
              onboardingData.language === language.id && styles.listItemSelected,
            ]}
            onPress={() => setOnboardingData(prev => ({ ...prev, language: language.id }))}
          >
            <Text style={styles.flag}>{language.flag}</Text>
            <Text style={[
              styles.itemName,
              onboardingData.language === language.id && styles.itemNameSelected,
            ]}>
              {language.name}
            </Text>
            {onboardingData.language === language.id && (
              <View style={styles.checkmark}>
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
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  listItemSelected: {
    backgroundColor: '#E3F2FD',
    borderColor: '#007bff',
  },
  flag: {
    fontSize: 24,
    marginRight: 16,
  },
  itemName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  itemNameSelected: {
    color: '#007bff',
    fontWeight: '600',
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
