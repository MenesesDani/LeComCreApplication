// components/icons/ArrowIcon.tsx
import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ShareIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "#FB8500",
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12.6201 3.31637C12.8888 3.19514 13.2037 3.24251 13.4248 3.43747L21.6455 10.6875C22.4355 11.3842 22.4355 12.6158 21.6455 13.3125L13.4248 20.5625C13.2037 20.7574 12.8888 20.8048 12.6201 20.6836C12.3514 20.5623 12.1787 20.2948 12.1787 20V16.2529C10.2311 16.2592 8.56574 16.3109 7.05371 16.7441C5.44388 17.2054 3.98126 18.108 2.59961 19.9502C2.40588 20.2082 2.06883 20.3139 1.7627 20.2119C1.45644 20.1098 1.25 19.8228 1.25 19.5C1.25001 14.8815 2.77885 11.9064 5.06641 10.1025C7.16044 8.45135 9.789 7.86307 12.1787 7.76559V3.99997C12.1787 3.70516 12.3514 3.43767 12.6201 3.31637Z"
      fill={fill}
    />
  </Svg>
);

export default ShareIcon;
