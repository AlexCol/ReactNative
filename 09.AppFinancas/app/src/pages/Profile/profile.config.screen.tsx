import { Feather } from '@expo/vector-icons';
import { DrawerScreenConfig } from '../../routes/types/DrawerScreenConfig';
import NewRegister from '.';
import Profile from '.';

const ProfileScreenConfig: DrawerScreenConfig = {
  name: "Profile",
  component: Profile,
  options: {
    drawerLabel: 'Perfil', // nome que aparece no menu lateral
    drawerIcon: ({ color, size }) => (
      <Feather name="user" size={size} color={color} />
    ),
  },
}
export default ProfileScreenConfig;