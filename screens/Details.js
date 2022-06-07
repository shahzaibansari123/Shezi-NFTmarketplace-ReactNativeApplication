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
  const { data } = route.parametersconsole.log(
    `----------------------------- ${data}-------------------`
  );
  return <Text>Details</Text>;
};

export default Details;
