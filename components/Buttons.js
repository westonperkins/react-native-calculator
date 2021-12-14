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
    0, 9, 8,

    7, 6, 5,

    4, 3, 2,

    1,
  ];
  let operators = ["/", "*", "-", "+", "."];
  let changers = ["AC"];

  const [equation, setEquation] = useState("");

  const changeValue = (change) => {
    if (change == "AC") {
      setEquation("");
    } else if (
      change == "+/-" &&
      numbers.includes(Number(equation.slice(-1)))
    ) {
      setEquation((equation * -1).toString());
    } else if (change == "%" && numbers.includes(Number(equation.slice(-1)))) {
      setEquation((equation * 0.01).toString());
    }
  };

  const chooseNum = (num) => {
    if (
      (operators.includes(num) && equation == "") ||
      (operators.includes(num) && operators.includes(equation.slice(-1)))
    ) {
      return;
    }
    setEquation(equation + num);
  };

  const calculate = () => {
    setEquation(eval(equation).toString());
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AnswerBar curr={equation} />

      <View style={styles.buttonContainer}>
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
        {numbers.map((number, key) => (
          <TouchableOpacity style={styles.numbers} key={key}>
            <Text
              style={styles.buttonText}
              onPress={() => chooseNum(number.toString())}
            >
              {number}
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
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  numbers: {
    marginBottom: 10,
    margin: 5,
    width: 100,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 3,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  buttons: {
    marginBottom: 10,
    margin: 5,
    width: 100,
    height: 65,
    borderRadius: 80 / 2,
    borderWidth: 3,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  buttonText: {
    width: 100,
    height: 80,
    fontSize: 45,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 26,
    color: "white",
    fontWeight: "400",
  },
});
