import { View } from "react-native";
import MyImage from "./src/components/MyImage";
import { useState } from "react";
import MyButton from "./src/components/MyButton";
import MyText from "./src/components/MyText";

export default function App() {
  const [count, setCount] = useState(0);

  let nome = 'Alexandre';
  return (
    <View>
      <MyText str={nome} style={{ color: 'purple' }} />

      <MyImage imageUri="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <MyText str="Meu Componente" />

      <MyText str={count.toString()} />
      <MyButton texto="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

