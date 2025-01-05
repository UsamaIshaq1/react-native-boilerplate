import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

const EyeSvg = (props: SvgProps) => {
  return (
    <Svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      stroke="black"
      {...props}
    >
      <Path d="M9.9999 14.6667C13.2593 14.6667 16.1746 12.3385 17.6486 10.899C17.8827 10.6704 17.8827 10.3296 17.6486 10.101C16.1746 8.66145 13.2593 6.33333 9.9999 6.33333C6.74045 6.33333 3.82524 8.66145 2.35122 10.101C2.11709 10.3296 2.11709 10.6704 2.35122 10.899C3.82524 12.3385 6.74045 14.6667 9.9999 14.6667ZM18.2308 11.4952C18.7997 10.9396 18.7997 10.0604 18.2308 9.50481C16.7375 8.04643 13.6128 5.5 9.9999 5.5C6.38701 5.5 3.26229 8.04643 1.76898 9.50481C1.20005 10.0604 1.20005 10.9396 1.76898 11.4952C3.26229 12.9536 6.38701 15.5 9.9999 15.5C13.6128 15.5 16.7375 12.9536 18.2308 11.4952Z" />
      <Path d="M9.99992 13.8333C11.8409 13.8333 13.3333 12.3409 13.3333 10.5C13.3333 8.65905 11.8409 7.16667 9.99992 7.16667C8.15897 7.16667 6.66659 8.65905 6.66659 10.5C6.66659 12.3409 8.15897 13.8333 9.99992 13.8333ZM9.9999 14.6667C12.3011 14.6667 14.1666 12.8012 14.1666 10.5C14.1666 8.19881 12.3011 6.33333 9.9999 6.33333C7.69871 6.33333 5.83325 8.19881 5.83325 10.5C5.83325 12.8012 7.69871 14.6667 9.9999 14.6667Z" />
    </Svg>
  );
};
export default EyeSvg;
