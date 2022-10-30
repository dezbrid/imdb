import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {NavigationProps} from '@interfaces/navigation';
import styles from './styles';

function IMDb() {
  const navigation = useNavigation<NavigationProps>();
  const gotoDetail = () => {
    navigation.navigate('Details');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={gotoDetail}>
        <Text>IMDb</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default IMDb;