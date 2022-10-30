import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Nullable} from '@interfaces/generic';

import iconSerch from './assets/ic_search.png';
import clearIcon from './assets/ic_close.png';
import styles from './styles';

function BarSearch() {
  const [search, setSearch] = useState<string>('');
  let inputRef: Nullable<TextInput> = null;
  const handlePressClearSearch = () => {
    inputRef!.clear();
    setSearch('');
  };
  const handleChangeText = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={[styles.container, styles.containterShadow]}>
      <Image
        source={iconSerch}
        resizeMode="contain"
        style={styles.iconSearch}
      />
      <TextInput
        ref={ref => (inputRef = ref)}
        autoComplete="off"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={'Buscar'}
        onChangeText={handleChangeText}
        value={search}
        autoCapitalize="none"
      />
      {search.length > 0 && (
        <TouchableOpacity onPress={handlePressClearSearch}>
          <Image
            source={clearIcon}
            resizeMode="contain"
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
export default BarSearch;
