import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import CustomSafeAreaView from "./components/CustomSafeAreaView";

export default function App() {
  return (
    <View style={{ backgroundColor: "#141b26", flex: 1 }}>
      <CustomSafeAreaView>
        <ScrollView>
          <Header />
          <Body />
        </ScrollView>
      </CustomSafeAreaView>
    </View>
  );
}
