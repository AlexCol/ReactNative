import { Image } from "react-native";
import styles from "../styles";

function SignInLogo() {
  return (
    <Image
      className={styles.logo}
      source={require("../../../../public/images/Logo.png")}
    />
  )
}

export default SignInLogo;