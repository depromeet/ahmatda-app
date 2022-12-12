import { Linking, Platform } from 'react-native';
import { WebViewNavigation } from 'react-native-webview';

import BASE_URL from '@/constants/webView';

const handleNavigate = (e: WebViewNavigation) => {
  return handleExternalLink(e);
};

const handleExternalLink = (e: WebViewNavigation) => {
  if (Platform.OS === 'android') {
    if (e.url.startsWith(BASE_URL)) {
      return true;
    }
    Linking.openURL(e.url);
    return false;
  }

  const isExternalLink = e.navigationType === 'click';

  if (!isExternalLink) return true;

  Linking.canOpenURL(e.url).then((supported) => {
    if (supported) Linking.openURL(e.url);
  });
  return false;
};

export default handleNavigate;
