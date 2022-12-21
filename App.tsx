/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import BASE_URL from '@/constants/webView';
import useAndroidBackButton from '@/hooks/android/useAndroidBackButton';
import useSendFCMToken from '@/hooks/pushAlarm/useSendFCMToken';
import { requestUserPermission } from '@/utils/firebase/messaging';
import handleNavigate from '@/utils/webViewNavigate/handleNavigate';

const App = () => {
  const webViewRef = useRef<WebView | null>(null);

  useAndroidBackButton(webViewRef);
  useSendFCMToken(webViewRef);

  useEffect(() => {
    const getToken = async () => {
      const token = await messaging().getToken();
      // eslint-disable-next-line no-console
      console.log(token);
    };
    getToken();
  }, []);

  useEffect(() => {
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async ({ notification }: FirebaseMessagingTypes.RemoteMessage) => {
      Alert.alert(notification?.title ?? '', notification?.body);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          ref={(ref) => {
            if (!ref) return;
            webViewRef.current = ref;
          }}
          source={{ uri: BASE_URL }}
          bounces={false}
          onNavigationStateChange={handleNavigate}
          onShouldStartLoadWithRequest={handleNavigate}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
