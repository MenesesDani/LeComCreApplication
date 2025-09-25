import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  primaryColor: string;
  secondaryColor: string;
}

const EnergyIcon = ({ primaryColor, ...props }: IconProps) => (
  <Svg width={13} height={22} viewBox="0 0 13 22" fill="none" {...props}>
    <Path
      d="M1.12169 13.8238L7.34412 1.37891C7.39131 1.28453 7.53356 1.31811 7.53356 1.42364V8.26151C7.53356 8.61524 7.89083 8.85712 8.21926 8.72575L11.3125 7.48844C11.7394 7.31769 12.151 7.76507 11.9454 8.17629L5.72301 20.6211C5.67582 20.7155 5.53356 20.6819 5.53356 20.5764V13.7385C5.53356 13.3848 5.1763 13.1429 4.84787 13.2743L1.7546 14.5116C1.32773 14.6824 0.916084 14.235 1.12169 13.8238Z"
      fill={primaryColor}
      stroke={primaryColor}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default EnergyIcon;