import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function CategoryScreen() {
  const { id, name } = useLocalSearchParams();
  
  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ title: `Danh mục ${name}` }} />
      <ThemedText type="title">Danh mục: {name}</ThemedText>
      <ThemedText>ID: {id}</ThemedText>
    </ThemedView>
  );
}