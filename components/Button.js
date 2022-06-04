import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SHADOWS, SIZES, FONTS } from "../constants";

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        position: "absolute",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode="contained" style={{width: 24 , height: 24}}/>
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};
