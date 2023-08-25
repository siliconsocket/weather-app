import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import * as Icons from '_icons';

type Props = {
  iconName: string;
  iconStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  fill?: string;
  onPress?: () => void;
};

const SVGRIcon = ({
  iconName,
  iconSize = 39,
  fill = '#000',
  iconStyle,
  onPress,
}: Props) => {
  const DynamicComponent = Icons[iconName];
  return (
    <DynamicComponent
      fill={fill}
      height={iconSize}
      style={iconStyle}
      width={iconSize}
      onPress={onPress}
    />
  );
};

export default SVGRIcon;
