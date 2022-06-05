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
        <Image
          source={assets.logo}
          style={{ width: 70, height: 65 }}
          resizeMode="contain"
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{ width: 15, height: 15 , position: "absolute" , bottom: 0, right: 0}}
          />
        </View>
      </View>
      <View style={{marginVertical: SIZES.font}}>
        <Text style={{fontSize: SIZES.small, fontFamily: Fonts.regular, color: COLORS.white}}>
          hello, Shahzaib 👋 

        </Text>
        <Text style={{fontSize: SIZES.small, fontFamily: Fonts.regular, color: COLORS.white}}>
          hello, Shahzaib 👋 

        </Text>

      </View>
    </View>
  );
};

export default HomeHeader;
