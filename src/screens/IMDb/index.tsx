import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import {useAppSelector} from '@hooks/redux';
import {ImdbObject} from '@interfaces/imdb';
import {ListKeyExtractor} from '@interfaces/generic';
import {listImdb, loadingList} from '@redux/imdbSlice';

import styles from './styles';
import BarSearch from './components/BarSearch';
import ImdbCard from './components/ImdbCard';

function IMDb() {
  const imbds = useAppSelector(listImdb);
  const loading = useAppSelector(loadingList);
  const renderItem: ListRenderItem<ImdbObject> = ({item}) => (
    <ImdbCard {...item} />
  );
  const keyExtractor: ListKeyExtractor<ImdbObject> = (_, i) => i.toString();
  const separator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <BarSearch />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList<ImdbObject>
          data={imbds}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={separator}
          refreshing={true}
          ListEmptyComponent={() => <Text>Lista vacia </Text>}
        />
      )}
    </SafeAreaView>
  );
}

export default IMDb;
