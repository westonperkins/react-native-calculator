import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Buttons from './components/Buttons'

export default function App() {
  return (
    <View style={styles.layout}>
      <Buttons/>
    </View>
  );
}


const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
  }
});
