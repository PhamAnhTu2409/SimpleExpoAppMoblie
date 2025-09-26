import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Camera, CameraView } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

export default function TabTwoScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(true);

  // Yêu cầu quyền truy cập camera
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  // Xử lý khi quét thành công
  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    setIsCameraActive(false);
    
    Alert.alert(
      'QR Code Scanned!',
      `Type: ${type}\nData: ${data}`,
      [
        {
          text: 'Scan Again',
          onPress: () => {
            setScanned(false);
            setIsCameraActive(true);
          },
        },
        {
          text: 'OK',
          style: 'default',
        },
      ]
    );
  };

  // Hiển thị trạng thái quyền truy cập
  if (hasPermission === null) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="camera.viewfinder"
            style={styles.headerImage}
          />
        }>
        <ThemedView style={styles.container}>
          <ThemedText style={styles.message}>Requesting for camera permission...</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    );
  }

  if (hasPermission === false) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="camera.viewfinder"
            style={styles.headerImage}
          />
        }>
        <ThemedView style={styles.container}>
          <ThemedText style={styles.message}>No access to camera</ThemedText>
          <ThemedText style={styles.subMessage}>
            Please enable camera permissions in your device settings to use the QR scanner.
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {isCameraActive ? (
        <CameraView
          style={styles.camera}
          facing="back"
          barcodeScannerSettings={{
            barcodeTypes: ['qr', 'pdf417', 'ean13', 'code128'],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
          <View style={styles.overlay}>
            <View style={styles.scanFrame}>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />
            </View>
            <ThemedText style={styles.scanText}>
              Đưa mã QR vào khung để quét
            </ThemedText>
          </View>
        </CameraView>
      ) : (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={310}
              color="#808080"
              name="camera.viewfinder"
              style={styles.headerImage}
            />
          }>
          <ThemedView style={styles.scanAgainContainer}>
            <ThemedText style={styles.scanAgainText}>
              Camera is paused. Press the button below to scan again.
            </ThemedText>
            <ThemedText 
              style={styles.scanAgainButton}
              onPress={() => {
                setScanned(false);
                setIsCameraActive(true);
              }}
            >
              Scan Again
            </ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 30,
    height: 30,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: '#00FF00',
  },
  cornerTopRight: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 30,
    height: 30,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: '#00FF00',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 30,
    height: 30,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#00FF00',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 30,
    height: 30,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#00FF00',
  },
  scanText: {
    marginTop: 30,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  subMessage: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
  },
  scanAgainContainer: {
    padding: 20,
    alignItems: 'center',
  },
  scanAgainText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  scanAgainButton: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 10,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});