import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Defina os tipos dos parâmetros das suas rotas
export type SignInStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignNavigationProp = NativeStackNavigationProp<SignInStackParamList>;