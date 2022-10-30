import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail</Text>
    </SafeAreaView>
  );
}

export default Details;
