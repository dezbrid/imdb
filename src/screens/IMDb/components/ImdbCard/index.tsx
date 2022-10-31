import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@interfaces/navigation';
import {ImdbObject} from '@interfaces/imdb';

import styles from './styles';

function ImdbCard(imbd: ImdbObject) {
  const {title, image} = imbd;
  const navigation = useNavigation<NavigationProps>();
  const gotoDetail = () => {
    navigation.navigate('Details');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={gotoDetail}>
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    </View>
  );
}
export default ImdbCard;
