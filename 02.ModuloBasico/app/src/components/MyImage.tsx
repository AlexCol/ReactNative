import { Image, ImageSourcePropType, ImageStyle, StyleProp } from "react-native"

type MyImageProps = {
  imageUri: string
}

function MyImage(props: MyImageProps) {
  //const imageUri = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const image: ImageSourcePropType = {
    uri: props.imageUri,
  }

  const imageStyle: StyleProp<ImageStyle> = {
    width: '100%',
    height: 300
  }

  return (
    <Image source={image} style={imageStyle} />
  )
}

export default MyImage