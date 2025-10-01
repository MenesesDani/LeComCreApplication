import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  primaryColor: string;
  secondaryColor: string;
}

const ArrowBigIcon = ({ primaryColor, secondaryColor, ...props }: IconProps) => (
  <Svg width={18} height={14} viewBox="0 0 18 14" fill="none" {...props}>
    <Path
      opacity={0.8}
      d="M1.69565 7.01929L16.6025 7.01929"
      stroke={secondaryColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.3221 1.78271L16.5395 7.00011L11.3221 12.2175"
      stroke={primaryColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowBigIcon;