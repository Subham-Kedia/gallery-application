import React from "react";
import { Button, FlatList, View, Text } from "react-native";

const data1 = ['This', 'is', 'horizontal', 'scroll', 'view'];
const data2 = ["This", "is", "vertical", "scroll", "view"];

const FlexBox = ({navigation}) => {
  return (
    <View style={{ padding: 16 }}>
      <Button
        title="Gallery"
        onPress={() => navigation.navigate("Gallery")}
      />
      <View style={{ marginVertical: 16 }}>
        <FlatList
          data={data1}
          renderItem={({ item }) => (
            <View
              style={{
                height: 200,
                width: 200,
                marginRight: 16,
                backgroundColor: "#886677",
                justifyContent: 'center',
              }}
            >
              <Text style={{textAlign:'center'}} >{item}</Text>
            </View>
          )}
          horizontal
        />
      </View>

      <FlatList
        data={data2}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              height: 200,
              width: 200,
              marginBottom: 16,
              backgroundColor: "#ff6677",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlexBox;
