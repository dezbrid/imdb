import {StyleSheet} from 'react-native';
import {white, darkGray} from '@constants/colors';
import {GENERAL_BOX_SHADOW} from '@constants/commonStyles';
const HEIGHT_IMAGE = 160;
const WIDTH_IMAGE = 120;
const SIZES = {
  TITLE: 17,
};

export default StyleSheet.create({
  container: {
    ...GENERAL_BOX_SHADOW,
    borderRadius: 5,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 250,
  },
  image: {
    height: HEIGHT_IMAGE,
    width: WIDTH_IMAGE,
  },
  title: {
    fontSize: SIZES.TITLE,
    fontWeight: 'bold',
    color: darkGray,
  },
});
