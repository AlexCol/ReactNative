import { Picker } from "@react-native-picker/picker"
import { Moeda } from "../../model/moeda.model";

type PickerItemProps = {
  moedas: Moeda[],
  moedaSelecionada: Moeda,
  onChange: (moeda: Moeda) => void,
}

function PickerItem({ moedas, moedaSelecionada, onChange }: PickerItemProps) {
  return (
    <Picker selectedValue={moedaSelecionada} onValueChange={(itemValue) => onChange(itemValue)}>
      {moedas.map(moeda => (
        <Picker.Item
          key={moeda.code}
          label={moeda.name}
          value={moeda}
        />
      ))}
    </Picker>
  )
}

export default PickerItem;