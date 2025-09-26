import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';

// Dữ liệu đơn hàng mẫu
const orders = [
  {
    id: 'ORD-2024-1001',
    status: 'completed',
    statusText: 'Hoàn thành',
    date: '15/12/2024',
    total: 1250000,
    items: [
      { name: 'Áo thun nam basic', quantity: 2, price: 250000 },
      { name: 'Quần jeans slim fit', quantity: 1, price: 750000 },
    ],
    icon: 'checkmark-circle-outline',
    color: '#2E8B57',
  },
  {
    id: 'ORD-2024-1002',
    status: 'shipping',
    statusText: 'Đang giao hàng',
    date: '14/12/2024',
    total: 890000,
    items: [
      { name: 'Giày thể thao nam', quantity: 1, price: 650000 },
      { name: 'Tất thể thao', quantity: 2, price: 120000 },
    ],
    icon: 'bicycle-outline',
    color: '#007AFF',
  },
  {
    id: 'ORD-2024-1003',
    status: 'processing',
    statusText: 'Đang xử lý',
    date: '13/12/2024',
    total: 450000,
    items: [
      { name: 'Mũ lưỡi trai', quantity: 1, price: 150000 },
      { name: 'Ví da nam', quantity: 1, price: 300000 },
    ],
    icon: 'time-outline',
    color: '#FF9500',
  },
  {
    id: 'ORD-2024-1004',
    status: 'cancelled',
    statusText: 'Đã hủy',
    date: '12/12/2024',
    total: 680000,
    items: [
      { name: 'Balo du lịch', quantity: 1, price: 680000 },
    ],
    icon: 'close-circle-outline',
    color: '#FF3B30',
  },
  {
    id: 'ORD-2024-1005',
    status: 'completed',
    statusText: 'Hoàn thành',
    date: '10/12/2024',
    total: 3200000,
    items: [
      { name: 'iPhone case', quantity: 1, price: 300000 },
      { name: 'AirPods Pro', quantity: 1, price: 2900000 },
    ],
    icon: 'checkmark-circle-outline',
    color: '#2E8B57',
  },
];

export default function OrdersScreen() {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + '₫';
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted;
      case 'shipping':
        return styles.statusShipping;
      case 'processing':
        return styles.statusProcessing;
      case 'cancelled':
        return styles.statusCancelled;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Đơn hàng của tôi
      </ThemedText>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.orderCard}>
            <Ionicons
              name={item.icon as any}
              size={28}
              color={item.color}
              style={styles.icon}
            />
            
            <ThemedView style={styles.contentContainer}>
              {/* Header - Mã đơn hàng và trạng thái */}
              <ThemedView style={styles.orderHeader}>
                <ThemedText type="defaultSemiBold" style={styles.orderId}>
                  {item.id}
                </ThemedText>
                <ThemedView style={[styles.statusBadge, getStatusStyle(item.status)]}>
                  <ThemedText style={styles.statusText}>
                    {item.statusText}
                  </ThemedText>
                </ThemedView>
              </ThemedView>

              {/* Ngày đặt hàng */}
              <ThemedText style={styles.orderDate}>
                Ngày đặt: {item.date}
              </ThemedText>

              {/* Danh sách sản phẩm */}
              <ThemedView style={styles.itemsContainer}>
                {item.items.map((product, index) => (
                  <ThemedText key={index} style={styles.productItem}>
                    • {product.name} x{product.quantity}
                  </ThemedText>
                ))}
              </ThemedView>

              {/* Tổng tiền */}
              <ThemedView style={styles.totalContainer}>
                <ThemedText style={styles.totalLabel}>Tổng cộng:</ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.totalAmount}>
                  {formatCurrency(item.total)}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        )}
        ItemSeparatorComponent={() => <ThemedView style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  listContent: {
    paddingBottom: 16,
  },
  orderCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  contentContainer: {
    flex: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderId: {
    fontSize: 16,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  statusCompleted: {
    backgroundColor: '#E8F5E8',
  },
  statusShipping: {
    backgroundColor: '#E8F0FF',
  },
  statusProcessing: {
    backgroundColor: '#FFF4E5',
  },
  statusCancelled: {
    backgroundColor: '#FFE8E8',
  },
  statusDefault: {
    backgroundColor: '#F0F0F0',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  itemsContainer: {
    marginBottom: 8,
  },
  productItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: '#333',
  },
  totalAmount: {
    fontSize: 16,
    color: '#2E8B57',
  },
  separator: {
    height: 8,
  },
});