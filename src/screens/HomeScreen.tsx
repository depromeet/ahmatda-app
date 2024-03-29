/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import sendAppVersion from '@/bridge/app-version/sendAppVersion';
import Error from '@/components/Error';
import BASE_URL from '@/constants/webView';
import useAndroidBackButton from '@/hooks/android/useAndroidBackButton';
import theme from '@/styles/theme';
import { LISTENING_MESSAGE_KEY } from '@/utils/bridge/type';
import { requestUserPermission, sendFCMTokenToWebView } from '@/utils/firebase/messaging';
import handleNavigate from '@/utils/webViewNavigate/handleNavigate';

const HomeScreen = () => {
  const { isError, setIsError, onWebViewError } = useAppError();

  const webViewRef = useRef<WebView | null>(null);
  useAndroidBackButton(webViewRef);

  const onWebViewLoad = async () => {
    sendFCMTokenToWebView(webViewRef);
  };

  const onMessage = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);

    switch (data.type as LISTENING_MESSAGE_KEY) {
      case 'APP_VERSION':
        sendAppVersion(webViewRef);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async ({ notification }: FirebaseMessagingTypes.RemoteMessage) => {
      Alert.alert(notification?.title ?? '', notification?.body);
    });

    return unsubscribe;
  }, []);

  if (isError) {
    return (
      <Error
        reload={() => {
          webViewRef.current?.reload();
          setIsError(false);
        }}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.gray1 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
        <WebView
          ref={(ref) => {
            if (!ref) return;
            webViewRef.current = ref;
          }}
          source={{ uri: BASE_URL }}
          bounces={false}
          onNavigationStateChange={handleNavigate}
          onShouldStartLoadWithRequest={handleNavigate}
          onLoad={onWebViewLoad}
          onError={onWebViewError}
          onMessage={onMessage}
          onContentProcessDidTerminate={() => webViewRef.current?.reload()}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const useAppError = () => {
  const [isError, setIsError] = useState<boolean>(false);

  const onWebViewError = () => {
    setIsError(true);
  };

  return { isError, setIsError, onWebViewError };
};
