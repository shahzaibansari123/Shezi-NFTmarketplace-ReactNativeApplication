import { View, Text } from "react-native";
import { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SHADOWS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            colors: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{marginTop: SIZES. base}}>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            colors: COLORS.secondary,
            lineHeight: SIZES.large,
          }}
        >
         {data.description}
        </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
