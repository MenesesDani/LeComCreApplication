import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const ArrowNextIcon = ({
  primaryColor = '#FFFFFF',
  secondaryColor,
  ...props
}: IconProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M12.793 3.29289C13.1835 2.90237 13.8165 2.90237 14.207 3.29289L22.9141 11.9999L14.207 20.707C13.8165 21.0975 13.1835 21.0975 12.793 20.707C12.4024 20.3164 12.4024 19.6834 12.793 19.2929L19.0859 12.9999H3.5C2.94772 12.9999 2.5 12.5522 2.5 11.9999C2.5 11.4476 2.94772 10.9999 3.5 10.9999H19.0859L12.793 4.70696C12.4024 4.31643 12.4024 3.68342 12.793 3.29289Z"
      fill={primaryColor}
    />
  </Svg>
);

export default ArrowNextIcon;
