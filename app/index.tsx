import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Tên App */}
      <Text style={styles.appTitle}>2English</Text>
      
      {/* Đoạn giới thiệu */}
      <Text style={styles.description}>
        Học tiếng Anh hiệu quả với phương pháp cá nhân hóa. 
        Bắt đầu hành trình học tập của bạn ngay hôm nay!
      </Text>
      
      {/* Nút Bắt đầu */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/modules/starter/screens/StarterScreen")}
      >
        <Text style={styles.primaryButtonText}>Bắt đầu ngay</Text>
      </TouchableOpacity>
      
      {/* Nút Đăng nhập */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/modules/login/screens/LoginScreen")}
      >
        <Text style={styles.secondaryButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: "#3498db",
  },
  secondaryButtonText: {
    color: "#3498db",
    fontSize: 16,
    fontWeight: "600",
  },
});
