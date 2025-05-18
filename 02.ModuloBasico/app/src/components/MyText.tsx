import { Text, StyleProp, TextStyle } from "react-native";

type MyTextProps = {
  str: string,
  style?: StyleProp<TextStyle>
}
export default function MyText({ str, style }: MyTextProps) {
  const textStyle: StyleProp<TextStyle> = {
    color: 'blue',
    fontSize: 25,
    margin: 15
  }

  return (
    <Text style={[textStyle, style]}>{str}</Text>
  );
};