import { RefObject } from 'react';
import { getVersion } from 'react-native-device-info';
import WebView from 'react-native-webview';

import stringifiedPostMessageObject from '@/utils/bridge/stringifiedPostMessageObject';

const sendAppVersion = (webViewRef: RefObject<WebView>) => {
  const version = getVersion();

  webViewRef.current?.postMessage(stringifiedPostMessageObject({ type: 'APP_VERSION', data: version }));
};

export default sendAppVersion;
