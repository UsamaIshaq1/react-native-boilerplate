import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
import { height, width } from "~utils/dimensions";

interface SpacerProps {
  horizontal?: number;
  vertical?: number;
}

const Spacer: FC<SpacerProps> = ({ horizontal, vertical }) => {
  return (
    <View
      style={{
        height: height(vertical) ?? 0,
        width: width(horizontal) ?? 0,
      }}
    />
  );
};

export default Spacer;
