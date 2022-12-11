/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

import handleNavigate from '@/utils/webViewNavigate/handleNavigate';

const BASE_URL = 'https://12-team3-web.pages.dev/';
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
