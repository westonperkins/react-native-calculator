import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { Dimensions } from "react-native";
import AnswerBar from "./AnswerBar";

const windowHeight = Dimensions.get("window").height;

export default function buttons() {
  let numbers = [
    1, 2, 3,

    4, 5, 6,

    7, 8, 9,

    0,
  ];
  let operators = ["/", "*", "-", "+"];
  let changers = ["AC", "+/-", "%", "."];

  const [number, setNumber] = useState("");
  const [op, setop] = useState("");
  const [change, setchange] = useState("");
  const [equation, setEquation] = useState("");

  const changeValue = (change) => {};

  const chooseNum = (num) => {
    // for(let i =0;i<operators.length; i++) {
    //     if(equation[equation.length-1] == operators[i]) {
    //         return
    //     }
    // }
    if (
      (operators.includes(num) && equation == "") ||
      (operators.includes(num) && operators.includes(equation.slice(-1)))
    ) {return
    }
    setEquation(equation + num);
    console.log(equation[equation.length - 1]);
  };

  const chooseOp = (op) => {
    setop(op);
  };

  const calculate = () => {
    setEquation(eval(equation));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AnswerBar curr={equation} />
      <View style={styles.buttonContainer}>
        {numbers.map((number, key) => (
          <TouchableOpacity style={styles.buttons} key={key}>
            <Text
              style={styles.buttonText}
              onPress={() => chooseNum(number.toString())}
            >
              {number}
            </Text>
          </TouchableOpacity>
        ))}
        {operators.map((operator, key) => (
          <TouchableOpacity style={styles.buttons} key={key}>
            <Text
              style={styles.buttonText}
              onPress={() => chooseNum(operator.toString())}
            >
              {operator}
            </Text>
          </TouchableOpacity>
        ))}
        {changers.map((changer, key) => (
          <TouchableOpacity style={styles.buttons} key={key}>
            <Text
              style={styles.buttonText}
              onPress={() => changeValue(changer)}
            >
              {changer}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText} onPress={calculate}>
            =
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  buttons: {
    marginBottom: 10,
    margin: 5,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 3,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  buttonText: {
    fontSize: 45,
    color: "white",
    fontWeight: "400",
  },
});
