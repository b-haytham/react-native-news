import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../components/Layout';
import {
  SettingsScreenNavigationProps,
  SettingsScreenRouteProps,
} from '../types/Screens';


import DropDownPicker from 'react-native-dropdown-picker';

import {useAppDispatch, useAppSelector} from '../redux/store';
import TouchableScale from 'react-native-touchable-scale';
import SaveIcon from '../components/icons/SaveIcon';
import { switchToAR, switchToDE, switchToEN } from '../redux/language/languageSlice';
import { arabicNews, deutschNews, englishNews } from '../redux/news/newsSlice';

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProps;
  route: SettingsScreenRouteProps;
}

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const dispatch = useAppDispatch()
  const language = useAppSelector((state) => state.languageSlice.language);
  
  const [selected, setSelected] = useState(language.value);
  
  console.log(selected !== language.value)


  const handleSave = () => {
    switch (selected) {
      case 'de': 
        dispatch(switchToDE())
        dispatch(deutschNews())
        break
      case 'ar':
        dispatch(switchToAR())
        dispatch(arabicNews())
        break
      default:
        dispatch(switchToEN())
        dispatch(englishNews())
        break  
    }
  }

  return (
    <Layout colorLevel="1" style={styles.container}>
      <View style={styles.selectLanguageContainer}>
        <DropDownPicker

          items={[
            {label: 'English', value: 'en'},
            {label: 'Deutsch', value: 'de'},
            {label: 'Arabic', value: 'ar'},
          ]}
          defaultValue={selected}
          containerStyle={{
            flex: 1,
            height: 40,
          }}
          style={{backgroundColor: '#000'}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#000'}}
          globalTextStyle={{color: '#fff'}}
          onChangeItem={(item) => setSelected(item.value)}
        />
        {selected !== language.value && (
          <TouchableScale activeScale={0.7} onPress={handleSave}>
            <SaveIcon width={30} height={30} fill="#fff" style={{marginLeft: 10}} />
          </TouchableScale>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectLanguageContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
   // justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default SettingsScreen;
