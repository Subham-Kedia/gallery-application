import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";

const Header = () => {
  const [input, setInput] = useState("");
  const historyRef = useRef([])
  const [showHistory, setShowHistory] = useState(false);

  const suggestions = input ? historyRef.current.filter((item) => item.toLowerCase().includes(input.toLocaleLowerCase())) : []

  useEffect(() => {
    retrieve("gallery-search-history").then((res) => {
      if(res)
      historyRef.current = JSON.parse(res)
    });
  }, []);
  const handlePress = () => {
    setShowHistory(false)
    if(input){
      historyRef.current.push(input);
      setItem("gallery-search-history", JSON.stringify(historyRef.current));
      setInput("");
    }
  };

  async function setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log(err);
    }
  }

  async function retrieve(key) {
    try {
      const res = await AsyncStorage.getItem(key);
      return res
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search here"
          value={input}
          onChangeText={setInput}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setShowHistory(false)}
        />
        <Button style={styles.button} title="Search" onPress={handlePress} />
        {showHistory && (
          <FlatList
            style={styles.autoComplete}
            data={suggestions}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
