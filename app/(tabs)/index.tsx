import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// Dữ liệu sản phẩm mẫu
const featuredProducts = [
  {
    id: 1,
    name: 'Cửa Gỗ Óc Chó Cao Cấp',
    price: '12.500.000 VNĐ',
    image: require('@/assets/images/door-1.jpg'),
    category: 'Cửa Gỗ Tự Nhiên',
    rating: 4.8,
    features: ['Chống mối mọt', 'Cách âm tốt', 'Bảo hành 5 năm']
  },
  {
    id: 2,
    name: 'Cửa Nhôm Kính Xingfa',
    price: '8.900.000 VNĐ',
    image: require('@/assets/images/door-2.jpg'),
    category: 'Cửa Nhôm Kính',
    rating: 4.6,
    features: ['Chống nước', 'An toàn', 'Dễ vệ sinh']
  },
  {
    id: 3,
    name: 'Cửa Thép Vân Gỗ',
    price: '6.750.000 VNĐ',
    image: require('@/assets/images/door-3.jpg'),
    category: 'Cửa Thép',
    rating: 4.7,
    features: ['Chống cháy', 'Bền bỉ', 'Bảo mật cao']
  },
  {
    id: 4,
    name: 'Cửa Kính Cường Lực',
    price: '15.200.000 VNĐ',
    image: require('@/assets/images/door-4.jpg'),
    category: 'Cửa Kính',
    rating: 4.9,
    features: ['Sang trọng', 'Hiện đại', 'Tối ưu ánh sáng']
  }
];

const categories = [
  { id: 1, name: 'Cửa Gỗ', icon: '🏠', count: 45 },
  { id: 2, name: 'Cửa Nhôm', icon: '🔩', count: 32 },
  { id: 3, name: 'Cửa Thép', icon: '🚪', count: 28 },
  { id: 4, name: 'Cửa Kính', icon: '🔍', count: 15 },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Thanh tìm kiếm và giỏ hàng cố định */}
      <ThemedView style={styles.headerContainer}>
        <ThemedView style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm..."
            placeholderTextColor="#999"
          />
        </ThemedView>

        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#2E8B57" />
          <ThemedView style={styles.cartBadge}>
            <ThemedText style={styles.cartBadgeText}>3</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

      {/* Nội dung chính */}
      <ScrollView contentContainerStyle={{ paddingTop: 120, paddingBottom: 24 }}>
        {/* Welcome Section */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Cửa Hàng Cửa Đẹp</ThemedText>
          <ThemedText style={styles.subtitle}>
            Nâng tầm không gian sống của bạn
          </ThemedText>
        </ThemedView>

        {/* Categories Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Danh Mục Sản Phẩm</ThemedText>
          <ThemedView style={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={{
                  pathname: '/category',
                  params: { id: category.id, name: category.name }
                }}
                asChild
              >
                <ThemedView style={styles.categoryCard}>
                  <ThemedText style={styles.categoryIcon}>{category.icon}</ThemedText>
                  <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
                  <ThemedText style={styles.categoryCount}>
                    {category.count} sản phẩm
                  </ThemedText>
                </ThemedView>
              </Link>
            ))}
          </ThemedView>
        </ThemedView>

        {/* Featured Products Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle">Sản Phẩm Nổi Bật</ThemedText>

            <ThemedText style={styles.seeAllText}>Xem tất cả</ThemedText>

          </ThemedView>

          <FlatList
            data={featuredProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false} // FlatList nằm trong ScrollView
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                asChild
              >
                <ThemedView style={styles.productCard}>
                  <Image source={item.image} style={styles.productImage} contentFit="cover" />
                  <ThemedView style={styles.productInfo}>
                    <ThemedView style={styles.productHeader}>
                      <ThemedText style={styles.productName}>{item.name}</ThemedText>
                      <ThemedView style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <ThemedText style={styles.rating}>{item.rating}</ThemedText>
                      </ThemedView>
                    </ThemedView>

                    <ThemedText style={styles.productPrice}>{item.price}</ThemedText>
                  </ThemedView>
                </ThemedView>
              </Link>
            )}
          />
        </ThemedView>

        {/* Services Section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Dịch Vụ Của Chúng Tôi</ThemedText>
          <ThemedView style={styles.servicesGrid}>
            <ThemedView style={styles.serviceItem}>
              <Ionicons name="hammer" size={32} color="#2E8B57" />
              <ThemedText style={styles.serviceTitle}>Thi Công Lắp Đặt</ThemedText>
              <ThemedText style={styles.serviceDescription}>
                Đội ngũ thợ lành nghề, thi công chuyên nghiệp
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.serviceItem}>
              <Ionicons name="shield-checkmark" size={32} color="#2E8B57" />
              <ThemedText style={styles.serviceTitle}>Bảo Hành Dài Hạn</ThemedText>
              <ThemedText style={styles.serviceDescription}>
                Bảo hành lên đến 5 năm cho tất cả sản phẩm
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.serviceItem}>
              <Ionicons name="car" size={32} color="#2E8B57" />
              <ThemedText style={styles.serviceTitle}>Vận Chuyển Miễn Phí</ThemedText>
              <ThemedText style={styles.serviceDescription}>
                Miễn phí vận chuyển trong bán kính 50km
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Contact Section */}
        <ThemedView style={styles.contactSection}>
          <ThemedText type="subtitle">Liên Hệ Ngay</ThemedText>
          <ThemedText style={styles.contactText}>📞 Hotline: 0123456789</ThemedText>
          <ThemedText style={styles.contactText}>🏢 Địa chỉ: 123 Hà Nội</ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Header cố định
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginRight: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Các style cũ giữ nguyên
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 8,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  sectionContainer: {
    gap: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#2E8B57',
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  categoryCard: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    minWidth: '48%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontWeight: '600',
    fontSize: 14,
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '48%',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productInfo: {
    padding: 12,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  productName: {
    fontSize: 14,
    fontWeight: '900',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 8,
  },
  viewDetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E8B57',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  servicesGrid: {
    gap: 16,
  },
  serviceItem: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  contactSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA',
    margin: 16,
    borderRadius: 12,
    gap: 12,
  },
  contactText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
