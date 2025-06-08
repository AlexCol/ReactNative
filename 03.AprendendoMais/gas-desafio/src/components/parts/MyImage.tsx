import { Image, ImageSourcePropType, StyleSheet } from "react-native"

type MyImageProps = {
  source: ImageSourcePropType | undefined;
}

function MyImage({ source }: MyImageProps) {
  return (
    <Image
      source={source}
      style={styles.logo}
    />

  )
}

export default MyImage;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});