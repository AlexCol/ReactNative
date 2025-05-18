import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  texto: string;
  onPress?: () => void;
};

export default function MyButton({ texto, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
});
