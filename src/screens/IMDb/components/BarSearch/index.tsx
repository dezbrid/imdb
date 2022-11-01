import React, {useState, useEffect} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {Nullable} from '@interfaces/generic';
import {alphanumericRegex} from '@constants/regex';
import {useAppDispatch} from '@hooks/redux';
import useDebounce from '@hooks/useDebounce';
import {imdbTitleAsync, clearListImdb} from '@redux/imdbSlice';

import iconSerch from './assets/ic_search.png';
import clearIcon from './assets/ic_close.png';
import styles from './styles';

function BarSearch() {
  const [search, setSearch] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  let inputRef: Nullable<TextInput> = null;
  const debouncesSearch = useDebounce(search, 500);
  useEffect(() => {
    if (debouncesSearch.length >= 3 && !hasError) {
      dispatch(imdbTitleAsync(debouncesSearch.trim()));
    }
    if (debouncesSearch.length === 0) {
      dispatch(clearListImdb());
    }
  }, [hasError, debouncesSearch, dispatch]);

  const handlePressClearSearch = () => {
    inputRef!.clear();
    setSearch('');
  };
  const handleChangeText = (text: string) => {
    const error = text.match(alphanumericRegex);
    setHasError(error === null);
    setSearch(text);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.barSearch, styles.barSearchShadow]}>
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
      {hasError && <Text style={styles.textError}>solo letras y numeros</Text>}
    </View>
  );
}
export default BarSearch;
