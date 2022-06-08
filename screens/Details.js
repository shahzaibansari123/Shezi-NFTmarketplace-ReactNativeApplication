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
  const { data } = route.params
  // console.log(
  //   `------------------------------------------------`
  // );
  // console.log(data)
  // console.log(
  //   `------------------------------------------------`
  // );
  return(
   <SafeAreaView style={{flex: 1}}>
     <FocusedStatusBar 
     barStyle="dark-content"
     backgroundColor="transparent"
     translucent={true}
     />

   </SafeAreaView>
  )
};

export default Details;
