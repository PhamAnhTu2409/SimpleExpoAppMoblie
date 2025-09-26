import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';

// Dữ liệu thông báo mẫu
const notifications = [
  {
    id: '1',
    title: 'Đơn hàng đã được xác nhận',
    message: 'Đơn hàng #1234 của bạn đã được xác nhận và đang chuẩn bị giao.',
    time: '2 phút trước',
    icon: 'checkmark-circle-outline',
    color: '#2E8B57',
  },

  {
    id: '3',
    title: 'Giao hàng thành công',
    message: 'Đơn hàng #1229 đã được giao thành công. Cảm ơn bạn đã mua sắm!',
    time: 'Hôm qua',
    icon: 'cube-outline',
    color: '#007AFF',
  },
  {
    id: '4',
    title: 'Cập nhật hệ thống',
    message: 'Ứng dụng sẽ bảo trì từ 0h - 2h sáng mai. Mong bạn thông cảm.',
    time: '2 ngày trước',
    icon: 'information-circle-outline',
    color: '#808080',
  },
];

export default function NotificationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Thông báo
      </ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.notificationCard}>
            <Ionicons
              name={item.icon as any}
              size={28}
              color={item.color}
              style={styles.icon}
            />
            <ThemedView style={styles.textContainer}>
              <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
              <ThemedText style={styles.message}>{item.message}</ThemedText>
              <ThemedText style={styles.time}>{item.time}</ThemedText>
            </ThemedView>
          </ThemedView>
        )}
        ItemSeparatorComponent={() => <ThemedView style={styles.separator} />}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, 
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginBottom: 8,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#E9ECEF',
    marginHorizontal: 16,
  },
});
