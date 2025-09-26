import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,   // Ẩn header mặc định
          gestureEnabled: true, // Vuốt sang phải để back (iOS mặc định, Android cũng hỗ trợ)
        }}
      >
        {/* Tabs chính */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Màn hình modal
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', title: 'Modal' }}
        /> */}

        {/* Màn hình chi tiết sản phẩm (dynamic route) */}
        <Stack.Screen
          name="product/[id]"
          options={{
            headerShown: false, // Tự custom UI back
            gestureEnabled: true,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
