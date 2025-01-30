import React from "react";
import { Button, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ display: 'flex', flexDirection:"column", gap: 12, padding: 12  }}>
      <Button title="Gallery" onPress={() => navigation.navigate("Gallery")} />
      <Button title="FlexBox" onPress={() => navigation.navigate("Flexbox")} />
      <Button title="Animations" onPress={() => navigation.navigate("Animations")} />
    </View>
  );
};

export default Home;
