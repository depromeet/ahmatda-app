/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

import BASE_URL from '@/constants/webView';
import useAndroidBackButton from '@/hooks/android/useAndroidBackButton';
import handleNavigate from '@/utils/webViewNavigate/handleNavigate';

const App = () => {
  const webViewRef = useRef<WebView | null>(null);

  useAndroidBackButton(webViewRef);

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
          onNavigationStateChange={handleNavigate}
          onShouldStartLoadWithRequest={handleNavigate}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
