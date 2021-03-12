import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import SearchIcon from '../components/icons/SearchIcon';
import Layout from '../components/Layout';
import {
  SearchScreenNavigationProps,
  SearchScreenRouteProps,
} from '../types/Screens';

interface SearchScreenProps {
  navigation: SearchScreenNavigationProps;
  route: SearchScreenRouteProps;
}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [value, setValue] = useState('');
  return (
    <Layout colorLevel="1" style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TouchableScale activeScale={.7} style={{paddingHorizontal: 10}}>
          <SearchIcon  width={30} height={30} fill={'#fff'} />
        </TouchableScale>
        <TextInput
          style={styles.inputStyle}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden'
  },
  inputStyle: {
    backgroundColor: '#000',
    color: 'white',
    flex: 1,
  },
  searchBarStyle: {
    backgroundColor: '#000',
    color: 'white',
  },
});

export default SearchScreen;
