import { FirebaseError } from "firebase/app";

export default function trataErro(error: unknown) {
  let errMesage = "Ocorreu um erro desconhecido.";

  if (error instanceof FirebaseError) {
    if (error.code === "auth/email-already-in-use") {
      errMesage = "Este email já está em uso.";
    } else if (error.code === "auth/invalid-email") {
      errMesage = "Email inválido.";
    } else if (error.code === "auth/missing-password") {
      errMesage = "Senha é obrigatória.";
    } else if (error.code === "auth/user-not-found") {
      errMesage = "Usuário não encontrado. Verifique o email.";
    } else if (error.code === "auth/weak-password") {
      errMesage = "A senha deve ter pelo menos 6 caracteres.";
    } else {
      errMesage = "Erro do Firebase: " + error.message;
    }
  } else if (error instanceof Error) {
    errMesage = "Erro: " + error.message;
  }

  //console.error(errMesage);
  alert(errMesage);
}