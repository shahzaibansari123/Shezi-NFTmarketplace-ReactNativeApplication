import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SHADOWS, SIZES, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  SubInfo,
  DetailsDesc,
  DetailsBid,
} from "../components";

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  // console.log(
  //   `------------------------------------------------`
  // );
  // console.log(data)
  // console.log(
  //   `------------------------------------------------`
  // );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  );
};

export default Details;
