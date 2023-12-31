import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgHome = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z" />
  </Svg>
);

const Memo = memo(SvgHome);
export default Memo;
