import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Product1Screen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('@/assets/images/door-1.jpg')} style={styles.image} />
        <ThemedText type="title" style={styles.name}>
          Cửa Gỗ Óc Chó Cao Cấp
        </ThemedText>
        <ThemedText style={styles.price}>12.500.000 VNĐ</ThemedText>
        <ThemedText style={styles.category}>Danh mục: Cửa Gỗ Tự Nhiên</ThemedText>
        <ThemedText style={styles.featuresTitle}>Tính năng:</ThemedText>
        <ThemedText style={styles.feature}>• Chống mối mọt</ThemedText>
        <ThemedText style={styles.feature}>• Cách âm tốt</ThemedText>
        <ThemedText style={styles.feature}>• Bảo hành 5 năm</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  image: { width: '100%', height: 250, borderRadius: 12, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 18, color: '#2E8B57', marginBottom: 8 },
  category: { fontSize: 16, color: '#666', marginBottom: 12 },
  featuresTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  feature: { fontSize: 14, color: '#333', marginBottom: 2 },
});
