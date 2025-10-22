import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://via.placeholder.com/200x200/007bff/ffffff?text=2English' }}
          style={styles.logo}
        />
        
        <Text style={styles.title}>Chào mừng đến với 2English</Text>
        <Text style={styles.subtitle}>
          Ứng dụng học tiếng Anh hiệu quả và thú vị nhất
        </Text>
        
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureText}>Học theo trình độ</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📚</Text>
            <Text style={styles.featureText}>Nội dung đa dạng</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🏆</Text>
            <Text style={styles.featureText}>Theo dõi tiến độ</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => router.push('/screens/starter')}
        >
          <Text style={styles.getStartedButtonText}>Bắt đầu học</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            // TODO: Navigate to login screen
            console.log('Navigate to login');
          }}
        >
          <Text style={styles.loginButtonText}>Đã có tài khoản? Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
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
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    fontWeight: '500',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 16,
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
});
