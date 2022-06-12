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
      <View style={{marginVertical: SIZES.extraLarge}}> 

      </View>
    </>
  );
};

export default DetailsDesc;
