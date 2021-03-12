import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../components/Layout';
import {
  SettingsScreenNavigationProps,
  SettingsScreenRouteProps,
} from '../types/Screens';

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProps;
  route: SettingsScreenRouteProps;
}

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return <Layout colorLevel="1" style={styles.container}></Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
