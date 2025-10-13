import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  primaryColor: string;
}

const ArrowLeftIcon = ({ primaryColor, ...props }: IconProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 20L9 12L17 4"
      stroke={primaryColor}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default ArrowLeftIcon;
