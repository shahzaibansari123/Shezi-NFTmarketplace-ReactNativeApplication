import { View, Text, Image, TextInput } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const HomeHeader = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={assets.logo} style={{width: 100 , height: 70, marginLeft: -30}} resizeMode="contain" />
      </View>
      
    </View>
  );
};

export default HomeHeader;
