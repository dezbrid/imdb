import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type RootStackParamList = {
  IMDb: undefined;
  Details: {imbdId: string};
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
