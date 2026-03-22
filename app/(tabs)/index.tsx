import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {
  // 1. ESTADOS DO APLICATIVO
  // Armazenam o que o usuário digita e o resultado final da ordenação
  const [inputValues, setInputValues] = useState('');
  const [sortedValues, setSortedValues] = useState('');

  // 2. FUNÇÃO PRINCIPAL DO ALGORITMO ESTRUTURADO
  const handleSort = () => {
    Keyboard.dismiss(); // Esconde o teclado do celular ao clicar no botão

    // --- FASE 1: Tratamento e Limpeza de Dados ---
    // Pega o texto digitado, separa onde tem vírgula e converte para uma lista de números
    let arr = inputValues
      .split(',')
      .map(item => Number(item.trim())) // Remove espaços e converte para Número
      .filter(item => !isNaN(item));    // Ignora letras ou caracteres inválidos

    // Validação de segurança caso o usuário não digite nada válido
    if (arr.length === 0) {
      setSortedValues('Por favor, insira números válidos.');
      return;
    }

    // --- FASE 2: Implementação do Algoritmo Bubble Sort ---
    let n = arr.length;
    let swapped;
    
    // O laço 'do...while' garante que o array será percorrido até estar totalmente ordenado
    do {
      swapped = false;
      // O laço 'for' compara os números em pares (lado a lado)
      for (let i = 0; i < n - 1; i++) {
        // Se o número atual for MAIOR que o próximo, eles trocam de posição
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];       // Guarda o valor atual temporariamente
          arr[i] = arr[i + 1];     // Puxa o menor valor para a esquerda
          arr[i + 1] = temp;       // Joga o maior valor para a direita
          swapped = true;          // Sinaliza que houve uma troca nesta rodada
        }
      }
      // Otimização: A cada rodada completa, o maior número já foi "borbulhado" para o final,
      // então não precisamos verificar a última posição novamente.
      n--; 
    } while (swapped);

    // --- FASE 3: Atualização da Interface ---
    // Junta os números ordenados de volta em um texto separado por vírgulas para mostrar na tela
    setSortedValues(arr.join(', '));
  };

  // 3. ESTRUTURA VISUAL DO APLICATIVO (INTERFACE)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordenador de Números</Text>
      <Text style={styles.subtitle}>Algoritmo: Bubble Sort</Text>

      <Text style={styles.label}>Digite os números separados por vírgula:</Text>
      
      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Ex: 5, 2, 9, 1, 5, 6"
        value={inputValues}
        onChangeText={setInputValues}
        keyboardType="numbers-and-punctuation"
      />

      {/* Botão que aciona o algoritmo */}
      <TouchableOpacity style={styles.button} onPress={handleSort}>
        <Text style={styles.buttonText}>Ordenar</Text>
      </TouchableOpacity>

      {/* Área que exibe o resultado final */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Resultado:</Text>
        <Text style={styles.resultText}>
          {sortedValues ? sortedValues : 'Aguardando números...'}
        </Text>
      </View>
    </View>
  );
}

// 4. ESTILIZAÇÃO DO APLICATIVO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 40,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    color: '#007BFF',
    fontWeight: '500',
    textAlign: 'center',
  },
});
