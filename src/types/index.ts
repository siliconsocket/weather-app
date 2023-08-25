import {BOTTOM_TAB_NAV, HOME_NAVIGATOR} from 'src/navigators/navNames';

export type TStackNavigatorProps = {
  [HOME_NAVIGATOR.MAIN]: undefined;
  [HOME_NAVIGATOR.PROFILE]: undefined;
  [HOME_NAVIGATOR.SETTINGS]: undefined;
};

export type TBottomTabNavigatorProps = {
  [BOTTOM_TAB_NAV.HOME_NAVIGATOR]: undefined;
};
