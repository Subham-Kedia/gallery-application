import { View, Text } from "react-native";
import { styles } from "./style";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Created with ❤️ by Shubham Kedia</Text>
      <Text style={styles.text}>{`v${process.env.EXPO_PUBLIC_VERSION}`}</Text>
    </View>
  );
};

export default Footer;
