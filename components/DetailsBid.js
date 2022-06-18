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
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
         {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} /> 
    </View>
  );
};

export default DetailsBid;
