import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@interfaces/navigation';
import {
  detailImdb,
  detailTitleByIdAsync,
  loadingDetail,
} from '@redux/imdbSlice';

import styles from './styles';

function Details() {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const detailImbd = useAppSelector(detailImdb);
  const loading = useAppSelector(loadingDetail);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(detailTitleByIdAsync(route.params.imbdId));
  }, [route, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
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
        </>
      )}
    </SafeAreaView>
  );
}

export default Details;
