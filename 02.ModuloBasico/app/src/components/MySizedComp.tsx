import { StyleProp, Text, View, ViewStyle } from "react-native"

function MySizedComp() {
  const outerViewStyle: StyleProp<ViewStyle> = {
    //width: 60,
    height: 100,
    flex: 1,
    backgroundColor: 'gray'
  };

  const innerViewStyle: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: 'magenta'
  };

  return (
    <View style={outerViewStyle}>
      <View style={innerViewStyle}>
        <Text>Meu texto</Text>
        <Text>Meu texto</Text>
        <Text>Meu texto</Text>
        <Text>Meu texto</Text>
        <Text>Meu texto</Text>
      </View>
      <View style={[innerViewStyle, { backgroundColor: "blue", flex: 2 }]}></View>
    </View>
  )
}

export default MySizedComp