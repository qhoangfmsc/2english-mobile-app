import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Configure WebBrowser for better auth experience
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [isInProgress, setIsInProgress] = useState(false);
  
  // Google OAuth configuration
  const clientId = "961776588783-jtf9ir09a5asgr05rgh6atkde246meer.apps.googleusercontent.com";
  // const redirectUri = AuthSession.makeRedirectUri({
  //   preferLocalhost: false,
  //   useProxy: true,
  // } as any);
  const redirectUri = 'https://sad-bars-fix.loca.lt'; // URL public từ localtunnel


  console.log("Redirect URI:", redirectUri);

  const handleGoogleLogin = async () => {
    try {
      setIsInProgress(true);
      
      // Create auth request
      const request = new AuthSession.AuthRequest({
        clientId,
        scopes: ['openid', 'profile', 'email'],
        redirectUri,
        responseType: AuthSession.ResponseType.Code,
        extraParams: {},
        prompt: AuthSession.Prompt.SelectAccount,
      });

      // Start authentication
      const result = await request.promptAsync({
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      });

      if (result.type === 'success') {
        // Exchange code for token
        const tokenResult = await AuthSession.exchangeCodeAsync(
          {
            clientId,
            code: result.params.code,
            redirectUri,
            extraParams: {
              code_verifier: request.codeVerifier || '',
            },
          },
          {
            tokenEndpoint: 'https://oauth2.googleapis.com/token',
          }
        );

        // Get user info
        const userInfoResponse = await fetch(
          `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenResult.accessToken}`
        );
        const userInfo = await userInfoResponse.json();

        Alert.alert("Success", "Login successful", [
          { text: "OK", onPress: () => {
            console.log("User info:", userInfo);
            console.log("Token:", tokenResult);
          } },
        ]);
      } else if (result.type === 'error') {
        Alert.alert("Error", "Login failed", [
          { text: "OK", onPress: () => {
            console.error("Auth error:", result.error);
          } },
        ]);
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "An unexpected error occurred", [
        { text: "OK" },
      ]);
    } finally {
      setIsInProgress(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.googleButton, isInProgress && styles.googleButtonDisabled]}
        onPress={handleGoogleLogin}
        disabled={isInProgress}
      >
        <Text style={styles.googleButtonText}>
          {isInProgress ? "Signing in..." : "Sign in with Google"}
        </Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  googleButton: {
    backgroundColor: "#db4437",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  googleButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButtonDisabled: {
    backgroundColor: "#a0a0a0",
    opacity: 0.6,
  },
  backButtonText: {
    color: "#7f8c8d",
    fontSize: 14,
    fontWeight: "500",
  },
});
