import { Picker } from "@react-native-picker/picker"
import { Moeda } from "../../model/moeda.model";

type PickerItemProps = {
  moedas: Moeda[]
}

function PickerItem({ moedas }: PickerItemProps) {
  return (
    <Picker>
      {moedas.map(moeda => (
        <Picker.Item key={moeda.code} label={moeda.name} value={moeda.code} />
      ))}
    </Picker>
  )
}

export default PickerItem;