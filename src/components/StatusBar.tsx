import { ComponentProps } from 'react';
import { StatusBar as RNStatusBar } from 'react-native';

import theme from '@/styles/theme';

type RNStatusBarProps = ComponentProps<typeof RNStatusBar>;

const StatusBar = ({ barStyle = 'dark-content', backgroundColor = theme.colors.gray1, ...rest }: RNStatusBarProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RNStatusBar barStyle={barStyle} backgroundColor={backgroundColor} {...rest} />;
};

export default StatusBar;
