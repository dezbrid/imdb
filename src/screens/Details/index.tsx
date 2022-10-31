import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
//import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@interfaces/navigation';
import {detailImdb, detailTitleByIdAsync} from '@redux/imdbSlice';

import styles from './styles';

function Details() {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const detailImbd = useAppSelector(detailImdb);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(detailTitleByIdAsync(route.params.imbdId));
  }, [route, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.string}>
          Título: <Text style={styles.subString}>{detailImbd?.title}</Text>
        </Text>
        <Text style={styles.string}>
          Género: <Text style={styles.subString}>{detailImbd?.genres}</Text>
        </Text>
        <Text style={styles.string}>
          Año: <Text style={styles.subString}>{detailImbd?.year}</Text>
        </Text>
        <Text style={styles.string}>
          Argumento:{' '}
          <Text style={styles.subString}>{detailImbd?.plotLocal}</Text>
        </Text>
      </View>
      <View style={styles.subContainer} />
    </SafeAreaView>
  );
}

export default Details;
