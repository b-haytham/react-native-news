import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface LayoutProps extends ViewProps {
  colorLevel: '1' | '2' | '3' | '4';
}

const Layout: React.FC<LayoutProps> = ({colorLevel, children, style}) => {
  return (
    <View
      style={[
        {
          backgroundColor:
            colorLevel === '4'
              ? '#000'
              : colorLevel === '3'
              ? '#050505'
              : colorLevel === '2'
              ? '#080808'
              : '#121213',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Layout;
