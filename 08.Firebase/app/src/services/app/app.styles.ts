import { StatusBar, StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20, // Adiciona margem superior para evitar sobreposição com a barra de status
    marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20, // Adiciona margem inferior para evitar sobreposição com a barra de status
  },
  btn: {
    //backgroundColor: '#4169e1',
    padding: 10,
    borderRadius: 5,
    //alignSelf: 'flex-start'
  },
  enabledBtn: {
    backgroundColor: '#4169e1',
  },
  disabledBtn: {
    backgroundColor: '#ccc',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  }
});