import { AuthProvider } from './src/hooks/AuthContext';
import AppRoot from './AppRoot';

export default function App() {
  return ( //criado approot para pode usar as variaveis do contexto de autenticação
    <AuthProvider>
      <AppRoot />
    </AuthProvider>
  );
}