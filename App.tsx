import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigation from './src/navigation/Navigation';

import {Provider} from 'react-redux';
import store from './src/redux/store';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
