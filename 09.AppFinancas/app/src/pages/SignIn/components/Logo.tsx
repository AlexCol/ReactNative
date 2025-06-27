import { Image } from "react-native";
import styles from "../styles";

function Logo() {
  return (
    <Image
      className={styles.logo}
      source={require("../../../../public/images/Logo.png")}
    />
  )
}

export default Logo