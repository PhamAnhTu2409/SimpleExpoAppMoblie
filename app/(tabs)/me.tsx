import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ProfileTabScreen() {
  const [customerInfo, setCustomerInfo] = useState({
    id: 'CUS-2024-001',
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    phone: '+84 123 456 789',
    membershipLevel: 'Gold Member',
    joinDate: '15/03/2023',
    totalOrders: 47,
    totalSpent: 12500000,
    recentActivity: [
      'Đặt hàng #ORD-2024-056 - 12/12/2024',
      'Cập nhật địa chỉ giao hàng - 10/12/2024',
      'Đặt hàng #ORD-2024-045 - 05/12/2024',
      'Đánh giá sản phẩm - 03/12/2024'
    ]
  });

  const scrollViewRef = useRef<ScrollView>(null); // ref để scroll

  // Cuộn về đầu mỗi khi tab được focus
  useFocusEffect(
    useCallback(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }, [])
  );

  const iconColor = useThemeColor({}, 'text');
  const primaryColor = useThemeColor({}, 'tint');

  const handleEditProfile = () => {
    Alert.alert('Thông báo', 'Tính năng chỉnh sửa hồ sơ sẽ được cập nhật sau!');
  };

  const handleChangePassword = () => {
    Alert.alert('Thông báo', 'Tính năng đổi mật khẩu sẽ được cập nhật sau!');
  };

  const handleLogout = () => {
    Alert.alert(
      'Đăng xuất',
      'Bạn có chắc chắn muốn đăng xuất?',
      [
        { text: 'Hủy', style: 'cancel' },
        { text: 'Đăng xuất', style: 'destructive' }
      ]
    );
  };

  return (
    <ScrollView
      ref={scrollViewRef} // gán ref
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Header Profile */}
      <ThemedView style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.avatar}
          />
          <View style={styles.membershipBadge}>
            <ThemedText style={styles.membershipText}>Gold</ThemedText>
          </View>
        </View>

        <ThemedText style={styles.customerName}>{customerInfo.name}</ThemedText>
        <ThemedText style={styles.customerId}>ID: {customerInfo.id}</ThemedText>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>{customerInfo.totalOrders}</ThemedText>
            <ThemedText style={styles.statLabel}>Đơn hàng</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>
              {customerInfo.totalSpent.toLocaleString('vi-VN')}₫
            </ThemedText>
            <ThemedText style={styles.statLabel}>Tổng chi tiêu</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Thông tin cá nhân */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Thông tin cá nhân</ThemedText>
        {[
          { label: 'Email', value: customerInfo.email, icon: 'envelope', color: iconColor },
          { label: 'Số điện thoại', value: customerInfo.phone, icon: 'phone', color: iconColor },
          { label: 'Ngày tham gia', value: customerInfo.joinDate, icon: 'calendar', color: iconColor },
          { label: 'Hạng thành viên', value: customerInfo.membershipLevel, icon: 'star', color: '#FFD700' }
        ].map((item, idx) => (
          <View key={idx} style={styles.infoItem}>
            <IconSymbol name="pencil" size={20} color={item.color} style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <ThemedText style={styles.infoLabel}>{item.label}</ThemedText>
              <ThemedText style={styles.infoValue}>{item.value}</ThemedText>
            </View>
          </View>
        ))}
      </ThemedView>

      {/* Hoạt động gần đây */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Hoạt động gần đây</ThemedText>
        {customerInfo.recentActivity.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <IconSymbol name="circle.fill" size={8} color={primaryColor} style={styles.activityDot} />
            <ThemedText style={styles.activityText}>{activity}</ThemedText>
          </View>
        ))}
      </ThemedView>

      {/* Các nút hành động */}
      <ThemedView style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton} onPress={handleEditProfile}>
          <ThemedView style={styles.actionButtonContent}>
            <IconSymbol name="pencil" size={20} color={primaryColor} style={styles.actionIcon} />
            <ThemedText style={styles.actionText}>Chỉnh sửa hồ sơ</ThemedText>
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleChangePassword}>
          <ThemedView style={styles.actionButtonContent}>
            <IconSymbol name="key" size={20} color={primaryColor} style={styles.actionIcon} />
            <ThemedText style={styles.actionText}>Đổi mật khẩu</ThemedText>
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]} onPress={handleLogout}>
          <ThemedView style={[styles.actionButtonContent, styles.logoutButtonContent]}>
            <IconSymbol name="rectangle.portrait.and.arrow.right" size={20} color="#FF3B30" style={styles.logoutIcon} />
            <ThemedText style={styles.logoutText}>Đăng xuất</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: '#FFF' },
  profileHeader: { alignItems: 'center', padding: 20, marginBottom: 10 },
  avatarContainer: { position: 'relative', marginBottom: 15 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#6A89CC' },
  membershipBadge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#FFD700', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, borderWidth: 2, borderColor: 'white' },
  membershipText: { fontSize: 12, fontWeight: 'bold', color: '#000' },
  customerName: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  customerId: { fontSize: 14, opacity: 0.7, marginBottom: 15 },
  statsContainer: { flexDirection: 'row', backgroundColor: 'rgba(106, 137, 204, 0.1)', padding: 15, borderRadius: 15, width: '100%', justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 20, fontWeight: 'bold', color: '#6A89CC' },
  statLabel: { fontSize: 12, opacity: 0.7, marginTop: 5 },
  statDivider: { width: 1, backgroundColor: 'rgba(106, 137, 204, 0.3)' },
  section: { padding: 20, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#6A89CC' },
  infoItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)' },
  infoIcon: { marginRight: 15, opacity: 0.7 },
  infoContent: { flex: 1 },
  infoLabel: { fontSize: 12, opacity: 0.7, marginBottom: 2 },
  infoValue: { fontSize: 16, fontWeight: '500' },
  activityItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  activityDot: { marginRight: 12 },
  activityText: { fontSize: 14, flex: 1 },
  actionsSection: { padding: 20, marginTop: 10 },
  actionButton: { marginBottom: 10, borderRadius: 10, overflow: 'hidden' },
  actionButtonContent: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'rgba(106, 137, 204, 0.1)' },
  actionIcon: { marginRight: 12 },
  actionText: { fontSize: 16, fontWeight: '500' },
  logoutButton: { marginTop: 10 },
  logoutButtonContent: { backgroundColor: 'rgba(255, 59, 48, 0.1)' },
  logoutIcon: { marginRight: 12 },
  logoutText: { fontSize: 16, fontWeight: '500', color: '#FF3B30' },
});
