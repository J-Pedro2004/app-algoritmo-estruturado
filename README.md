# 📱 Ordenador de Números (Bubble Sort)

Este é um aplicativo móvel desenvolvido em **React Native** criado como entrega para a atividade de implementação de algoritmos estruturados. O objetivo principal do aplicativo é receber uma sequência de números desordenados e organizá-los em ordem crescente utilizando o clássico algoritmo de **Ordenação por Bolha (Bubble Sort)**.

---

## 🛠️ Funcionalidades

* **Entrada Dinâmica:** O usuário pode digitar uma lista de números separados por vírgula (ex: `5, 2, 9, -1, 6`).
* **Tratamento de Dados:** O aplicativo automaticamente remove espaços em branco extras e ignora textos ou caracteres inválidos digitados por engano.
* **Processamento Estruturado:** Implementação real do algoritmo Bubble Sort rodando diretamente no dispositivo.
* **Interface Limpa:** Design simples e focado na usabilidade, com feedback visual em tempo real aguardando a interação do usuário.

---

## 🧠 Como o Algoritmo (Bubble Sort) Funciona no App?

O *Bubble Sort* é um algoritmo de ordenação simples que percorre a lista de números múltiplas vezes. A cada passagem, ele compara elementos adjacentes (lado a lado):
1.  Se o número da esquerda for maior que o da direita, eles trocam de lugar.
2.  Esse processo se repete até que nenhuma troca seja necessária em uma passagem completa, o que significa que a lista está 100% ordenada.
3.  No código (localizado em `app/(tabs)/index.tsx`), isso foi implementado através de um laço `do...while` combinado com um `for`.

---

## 🚀 Tecnologias Utilizadas

* **React Native** (Framework principal)
* **Expo** (Ferramenta de construção e execução)
* **JavaScript / TypeScript** (Lógica de programação)

---

## 💻 Como Rodar o Projeto Localmente

Se desejar testar o projeto no seu próprio computador:

1. Clone este repositório:
   ```bash
   git clone https://github.com/J-Pedro2004/app-algoritmo-estruturado.git

2. Acesse a pasta do projeto:
   ```bash
   cd OrdenadorApp

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor do Expo:
   ```bash
   npx expo start

5. Escaneie o QR Code gerado no terminal usando o aplicativo Expo Go no seu celular, ou pressione w para abrir no navegador.
