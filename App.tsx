/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

import useAndroidBackButton from '@/hooks/android/useAndroidBackButton';

const BASE_URL = 'https://12-team3-web.pages.dev/';
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
        />
      </SafeAreaView>
    </>
  );
};

export default App;
