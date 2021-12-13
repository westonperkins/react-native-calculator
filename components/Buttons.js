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
  let operators = ["÷", "x", "-", "+", "="];
  let changers = ["AC", "+/-", "%", "."];

  const [state, setstate] = useState("");
  const [op, setop] = useState("");
  const [change, setchange] = useState("");

  const changeValue = (change) => {
    if (change == "AC") {
      setstate(0);
    } else if (change == "+/-") {
      setstate(state * -1);
    } else if (change == "%") {
      setstate(state * 0.01);
    } else if (change == ".") {
      setstate(state + ".");
    }
  };

  const chooseNum = (num) => {
    if (op != "") {
      if (op == "+") {
        setstate(num + state);
      } else if (op == "-") {
        console.log(state);
        console.log(num);
        setstate(state - num);
      } else if (op == "÷") {
        setstate(state / num);
      } else if (op == "x") {
        setstate(num * state);
      }
    } else {
      setstate(parseInt(state + num));
    }
  };

  const chooseOp = (op) => {
    setop(op);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AnswerBar curr={state} />
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
            <Text style={styles.buttonText} onPress={() => chooseOp(operator)}>
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
