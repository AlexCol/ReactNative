import { StyleProp, View, ViewStyle } from "react-native"

function MyFlexAndAlignComp() {
  const flexStyles: StyleProp<ViewStyle> = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around', //alinhamento horizontal
    alignItems: 'center', //alinhamento vertical
  };
  return (
    <View style={{ height: 500 }}>
      <View style={flexStyles}>
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
      </View>
    </View>
  )
}

export default MyFlexAndAlignComp