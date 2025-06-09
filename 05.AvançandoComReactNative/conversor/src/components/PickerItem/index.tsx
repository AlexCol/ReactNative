import { Picker } from "@react-native-picker/picker"

function PickerItem() {
  return (
    <Picker>
      <Picker.Item label="Real" value="BRL" />
      <Picker.Item label="Dólar" value="USD" />
      <Picker.Item label="Euro" value="EUR" />
    </Picker>
  )
}

export default PickerItem;