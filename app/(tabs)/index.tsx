import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [inputValues, setInputValues] = useState("");
  const [sortedValues, setSortedValues] = useState("");

  const handleSort = () => {
    Keyboard.dismiss();

    let arr = inputValues
      .split(",")
      .map((item) => Number(item.trim()))
      .filter((item) => !isNaN(item));

    if (arr.length === 0) {
      setSortedValues("Por favor, insira números válidos.");
      return;
    }

    let n = arr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    setSortedValues(arr.join(", "));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordenador de Números</Text>
      <Text style={styles.subtitle}>Algoritmo: Bubble Sort</Text>

      <Text style={styles.label}>Digite os números separados por vírgula:</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 5, 2, 9, 1, 5, 6"
        value={inputValues}
        onChangeText={setInputValues}
        keyboardType="numbers-and-punctuation"
      />

      <TouchableOpacity style={styles.button} onPress={handleSort}>
        <Text style={styles.buttonText}>Ordenar</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Resultado:</Text>
        <Text style={styles.resultText}>
          {sortedValues ? sortedValues : "Aguardando números..."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 40,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    color: "#007BFF",
    fontWeight: "500",
    textAlign: "center",
  },
});
