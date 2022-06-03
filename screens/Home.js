import { Text, View, SafeAreaView, FlatList } from "react-native";
//flatlist native me as a.map he
import { useState } from "react";

import { COLORS, NFTData } from "../constants";
// import { SafeAreaView } from 'react-native-safe-area-context'
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{height: 300, backgroundColor: COLORS.primary}}/>
          <View style={{flex: 1 , backgroundColor: COLORS.white}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
