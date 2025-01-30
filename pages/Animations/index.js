import { View, Text } from "react-native"
import FadeInView from "./FadeInView";

 const Animations = () => {
    return (
      <View
        style={{
          flex: 1,
          padding: 12,
          alignItems: "center",
        }}
      >
        <FadeInView
          style={{
            width: 250,
            backgroundColor: "powderblue",
          }}
        >
          <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
            Fading in
          </Text>
        </FadeInView>
      </View>
    );
}

export default Animations