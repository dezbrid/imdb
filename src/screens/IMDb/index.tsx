import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useAppSelector} from '@hooks/redux';
import {ImdbObject} from '@interfaces/imdb';
import {ListKeyExtractor} from '@interfaces/generic';
import {listimdb} from '@redux/imdbSlice';

import styles from './styles';
import BarSearch from './components/BarSearch';
import ImdbCard from './components/ImdbCard';

function IMDb() {
  const imbds = useAppSelector(listimdb);
  const renderItem: ListRenderItem<ImdbObject> = ({item}) => (
    <ImdbCard {...item} />
  );
  const keyExtractor: ListKeyExtractor<ImdbObject> = (_, i) => i.toString();
  const separator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <BarSearch />
      <FlatList<ImdbObject>
        data={imbds}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
}

export default IMDb;
