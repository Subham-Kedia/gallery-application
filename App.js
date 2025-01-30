import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "./pages/Gallery";
import CustomSafeAreaView from './components/CustomSafeAreaView'
import FlexBox from "./pages/FlexBox";
import Home from "./pages/Home";
import Animations from "./pages/Animations";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{ title: "Image Gallery" }}
        />
        <Stack.Screen
          name="Flexbox"
          component={FlexBox}
          options={{ title: "Flex Box" }}
        />
        <Stack.Screen
          name="Animations"
          component={Animations}
          options={{ title: "Animations" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
