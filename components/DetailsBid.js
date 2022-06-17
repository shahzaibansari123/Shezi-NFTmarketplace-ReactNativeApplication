import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SHADOWS, SIZES, FONTS } from "../constants";
import React from "react";

const DetailsBid = ({ bid }) => {
  return (
    <View>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text>Bid placed by {bid.name}</Text>
      </View>
    </View>
  );
};

export default DetailsBid;
