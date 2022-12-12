import { RefObject, useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';
import WebView from 'react-native-webview';

const useAndroidBackButton = (webViewRef: RefObject<WebView>) => {
  useEffect(() => {
    if (Platform.OS !== 'android') return;

    const handleBackButtonPress = () => {
      try {
        webViewRef.current?.goBack();
        return true;
      } catch (error) {
        console.error('handleBackButtonPress Error : ', error);
      }
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress);
    };
  }, [webViewRef]);
};

export default useAndroidBackButton;
