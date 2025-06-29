import { Feather } from '@expo/vector-icons';
import { DrawerScreenConfig } from '../../routes/types/DrawerScreenConfig';
import NewRegister from '.';

const NewRegisterScreenConfig: DrawerScreenConfig = {
  name: "NewRegister",
  component: NewRegister,
  options: {
    drawerLabel: 'Registrar', // nome que aparece no menu lateral
    drawerIcon: ({ color, size }) => (
      <Feather name="plus" size={size} color={color} />
    ),
  },
}
export default NewRegisterScreenConfig;