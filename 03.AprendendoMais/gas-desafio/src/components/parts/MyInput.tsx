import { StyleSheet, Text, TextInput, View } from "react-native"

type MyInputProps = {
  label: string;
  placeholder?: string;
  textRef: React.RefObject<string>;
  inputRef: React.RefObject<TextInput | null>;
}

function MyInput({ label, textRef, inputRef, placeholder }: MyInputProps) {
  return (
    <View style={styles.viewInput}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        ref={inputRef}
        onChangeText={(text) => textRef.current = text}
        placeholder={placeholder}
        placeholderTextColor="gray"
        keyboardType="numeric"
        returnKeyType="done"
      />
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
  viewInput: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  inputLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '90%',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%',
  },
});
