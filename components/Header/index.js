import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Gallery</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search here" />
        <Button title="Search" />
      </View>
    </View>
  );
};

export default Header;
