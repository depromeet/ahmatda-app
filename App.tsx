/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

import BASE_URL from '@/constant/webView';
import handleNavigate from '@/utils/webViewNavigate/handleNavigate';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: BASE_URL }}
          onNavigationStateChange={handleNavigate}
          onShouldStartLoadWithRequest={handleNavigate}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
