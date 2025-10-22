import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CompletionStep() {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.successIcon}>🎉</Text>
        </View>
        <Text style={styles.title}>Hoàn thành!</Text>
        <Text style={styles.subtitle}>
          Chúc mừng bạn đã hoàn thành thiết lập. Bây giờ hãy bắt đầu hành trình học tiếng Anh của bạn!
        </Text>
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
  successIcon: {
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
});
