import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={24} color={focused ? Colors[colorScheme ?? 'light'].tint : 'black'} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Đơn hàng',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="shopping-cart" size={24} color={focused ? Colors[colorScheme ?? 'light'].tint : 'black'} />
          ),
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.qrTabContainer}>
              <MaterialIcons 
                name="qr-code-scanner" 
                size={46} 
                color="white" 
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Thông báo',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name="notifications-outline" 
              size={24} 
              color={focused ? Colors[colorScheme ?? 'light'].tint : 'black'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: 'Cá nhân',
          tabBarIcon: ({ color, focused }) => (
            <Feather 
              name="user" 
              size={24} 
              color={focused ? Colors[colorScheme ?? 'light'].tint : 'black'} 
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  qrTabContainer: {
    backgroundColor: 'rgba(255, 71, 71)', // Background 
    width: 60, // Kích thước hình vuông
    height: 60,
    borderRadius: 12, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0, 
    borderWidth: 2,
    borderColor: 'rgba(255, 0, 0, 0.2)', // Viền đỏ nhạt
  },
});