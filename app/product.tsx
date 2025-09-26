import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetailScreen() {
  const product = {
    id: 1,
    name: 'Cửa Gỗ Óc Chó Cao Cấp',
    price: '12.500.000 VNĐ',
    image: require('@/assets/images/door-1.jpg'),
    category: 'Cửa Gỗ Tự Nhiên',
    rating: 4.8,
    features: ['Chống mối mọt', 'Cách âm tốt', 'Bảo hành 5 năm'],
    description:
      'Cửa gỗ óc chó cao cấp được chế tác từ gỗ tự nhiên nhập khẩu, mang đến sự sang trọng, bền bỉ và đẳng cấp cho không gian sống. Thiết kế hiện đại kết hợp cùng độ bền vượt trội, chống cong vênh, mối mọt.'
  };

  const handleAddToCart = () => {
    Alert.alert('Giỏ hàng', 'Sản phẩm đã được thêm vào giỏ hàng!');
  };

  const handleBuyNow = () => {
    Alert.alert('Mua ngay', 'Chuyển tới trang thanh toán...');
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Ảnh sản phẩm */}
      <Image source={product.image} style={styles.productImage} contentFit="cover" />

      {/* Thông tin chính */}
      <ThemedView style={styles.content}>
        <ThemedText style={styles.productName}>{product.name}</ThemedText>
        <ThemedText style={styles.productCategory}>{product.category}</ThemedText>

        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color="#FFD700" />
          <ThemedText style={styles.rating}>{product.rating}</ThemedText>
        </View>

        <ThemedText style={styles.productPrice}>{product.price}</ThemedText>

        {/* Mô tả sản phẩm */}
        <ThemedText style={styles.sectionTitle}>Mô tả sản phẩm</ThemedText>
        <ThemedText style={styles.description}>{product.description}</ThemedText>

        {/* Tính năng nổi bật */}
        <ThemedText style={styles.sectionTitle}>Tính năng nổi bật</ThemedText>
        {product.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={20} color="#2E8B57" />
            <ThemedText style={styles.featureText}>{feature}</ThemedText>
          </View>
        ))}
      </ThemedView>

      {/* Thanh nút hành động */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={22} color="#2E8B57" />
          <ThemedText style={styles.cartText}>Thêm vào giỏ</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <ThemedText style={styles.buyText}>Mua Ngay</ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  productImage: { width: '100%', height: 280 },
  content: { padding: 16 },
  productName: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
  productCategory: { fontSize: 14, color: '#888', marginBottom: 8 },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  rating: { marginLeft: 4, fontSize: 14, fontWeight: '600' },
  productPrice: { fontSize: 20, fontWeight: 'bold', color: '#2E8B57', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#2E8B57' },
  description: { fontSize: 15, lineHeight: 22, color: '#444', marginBottom: 16 },
  featureItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  featureText: { marginLeft: 8, fontSize: 15, color: '#333' },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  cartButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2E8B57',
    borderRadius: 8,
    paddingVertical: 12,
    marginRight: 10,
  },
  cartText: { marginLeft: 8, color: '#2E8B57', fontWeight: '600' },
  buyButton: {
    flex: 1,
    backgroundColor: '#2E8B57',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  buyText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});
