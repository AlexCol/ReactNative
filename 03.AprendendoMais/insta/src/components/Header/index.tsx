import { TouchableOpacity, View, Image } from "react-native"
import { styles } from "./header.styles"

function Header() {
  const basepPath = '../../../assets/img/';
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={require(`${basepPath}logo.png`)}
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require(`${basepPath}send.png`)}
          style={styles.send}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header

