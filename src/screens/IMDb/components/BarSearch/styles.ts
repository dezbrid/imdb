import {StyleSheet} from 'react-native';
import {extraLightGray, white} from '@constants/colors';
import {GENERAL_BOX_SHADOW} from '@constants/commonStyles';

const ICON_SIZE = 25;
const CLEAR_ICON_SIZE = 18;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    height: 45,
    borderRadius: 100,
    flexDirection: 'row',
    margin: 20,
    paddingRight: 15,
    paddingLeft: 10,
  },
  iconSearch: {
    marginRight: 10,
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
  inputStyle: {
    flex: 1,
  },
  clearIcon: {
    width: CLEAR_ICON_SIZE,
    height: CLEAR_ICON_SIZE,
  },
  containterShadow: {
    ...GENERAL_BOX_SHADOW,
    borderWidth: 1,
    borderColor: extraLightGray,
  },
});
