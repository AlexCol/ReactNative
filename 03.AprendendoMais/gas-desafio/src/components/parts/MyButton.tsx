import { StyleSheet, Text, TouchableOpacity } from "react-native"

type MyButtonProps = {
  label?: string;
  style?: object;
  onPress?: () => void;
}

function MyButton({ label, style, onPress }: MyButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>
        {label || "Calcular"}
      </Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '72%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});