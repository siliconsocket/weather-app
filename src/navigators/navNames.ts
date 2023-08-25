export enum BOTTOM_TAB_NAV {
  HOME_NAVIGATOR = 'BottomTabNavigator@HomeNavigator',
}

export const BOTTOM_TAB_NAV_LABEL: {[key in BOTTOM_TAB_NAV]: string} = {
  [BOTTOM_TAB_NAV.HOME_NAVIGATOR]: 'Inicio',
};

export enum HOME_NAVIGATOR {
  SETTINGS = 'BottomTabNavigator@HomeNavigator@Settings',
  PROFILE = 'BottomTabNavigator@HomeNavigator@Profile',
  MAIN = 'BottomTabNavigator@HomeNavigator@Main',
}

export const HOME_NAVIGATOR_LABEL: {[key in HOME_NAVIGATOR]: string} = {
  [HOME_NAVIGATOR.SETTINGS]: 'Ajustes',
  [HOME_NAVIGATOR.PROFILE]: 'Perfil',
  [HOME_NAVIGATOR.MAIN]: 'Principal',
};
