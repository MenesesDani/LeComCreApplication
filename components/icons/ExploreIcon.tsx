import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  primaryColor: string;
  secondaryColor: string;
}

const ExploreIcon = ({ primaryColor, secondaryColor, ...props }: IconProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    {/* Primeira forma, com a cor principal (corpo do ícone) */}
    <Path
      d="M12.125 1C18.2001 1 23.125 5.92487 23.125 12C23.125 18.0751 18.2001 23 12.125 23C6.04987 23 1.125 18.0751 1.125 12C1.125 5.92487 6.04987 1 12.125 1Z"
      fill={primaryColor}
    />
    {/* Segunda forma, com a cor secundária (detalhes do ícone) */}
    <Path
      d="M14.9287 8.01953C15.2565 7.95396 15.5956 8.05656 15.832 8.29297C16.0684 8.52939 16.171 8.86843 16.1055 9.19629L15.1055 14.1963C15.0262 14.592 14.717 14.9012 14.3213 14.9805L9.32127 15.9805C8.99342 16.046 8.65437 15.9435 8.41795 15.707C8.18154 15.4706 8.07895 15.1316 8.14452 14.8037L9.14452 9.80371L9.18456 9.66016C9.30214 9.33454 9.58228 9.08889 9.9287 9.01953L14.9287 8.01953Z"
      fill={secondaryColor}
    />
  </Svg>
);

export default ExploreIcon;