import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function answerBar({curr}) {
  return (
    <SafeAreaView>
      <View style={styles.mainScreen}>
        <Text style={styles.text}>{curr}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "white",
    margin: 25
  },
  mainScreen: {
    width: windowWidth,
    height: 250,
    borderWidth: 3,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
});
