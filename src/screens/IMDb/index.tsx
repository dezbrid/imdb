import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '@hooks/redux';
import {ImdbObject} from '@interfaces/imdb';
import {ListKeyExtractor} from '@interfaces/generic';
import {
  listImdb,
  loadingList,
  currentSearch,
  imdbTitleAsync,
} from '@redux/imdbSlice';

import styles from './styles';
import BarSearch from './components/BarSearch';
import ImdbCard from './components/ImdbCard';

function IMDb() {
  const imbds = useAppSelector(listImdb);
  const loading = useAppSelector(loadingList);
  const currentSearchValue = useAppSelector(currentSearch);
  const dispatch = useAppDispatch();
  const renderItem: ListRenderItem<ImdbObject> = ({item}) => (
    <ImdbCard {...item} />
  );
  const keyExtractor: ListKeyExtractor<ImdbObject> = (_, i) => i.toString();
  const separator = () => <View style={styles.separator} />;
  const footerComponent = () => {
    if (loading) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  };
  const emptyComponent = () => {
    if (loading) {
      return null;
    } else {
      return <Text style={styles.text}>no hay resultado </Text>;
    }
  };
  const handleMoresImbds = () => {
    dispatch(imdbTitleAsync(currentSearchValue));
  };
  return (
    <SafeAreaView style={styles.container}>
      <BarSearch />

      <FlatList<ImdbObject>
        data={imbds}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={emptyComponent}
        extraData={[imbds, loading]}
        onEndReachedThreshold={0.1}
        onEndReached={handleMoresImbds}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footer}
      />
    </SafeAreaView>
  );
}

export default IMDb;
