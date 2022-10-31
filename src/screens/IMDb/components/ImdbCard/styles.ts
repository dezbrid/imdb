import {StyleSheet} from 'react-native';
import {white, darkGray} from '@constants/colors';
import {GENERAL_BOX_SHADOW} from '@constants/commonStyles';
const HEIGHT_IMAGE = 90;
const WIDTH_IMAGE = 55;
const SIZES = {
  TITLE: 17,
};

export default StyleSheet.create({
  container: {
    ...GENERAL_BOX_SHADOW,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: white,
    paddingVertical: 15,
    paddingHorizontal: 20,
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
