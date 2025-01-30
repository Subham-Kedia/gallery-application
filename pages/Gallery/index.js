import { View } from "react-native";
import { CustomSafeAreaView } from "../../components/CustomSafeAreaView";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Body from "../../components/Body";

const Gallery = () => {
  return (
        <View style={{ flex: 1 }}>
          <Header />
          <Body />
        </View>
  );
}

export default Gallery
