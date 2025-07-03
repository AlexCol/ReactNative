import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AuthorizationStatus } from '@notifee/react-native';
import { useEffect, useState } from 'react';
import pedePermissao from './functions/pedePermissao';
import notificar from './functions/notificar';
import { addEventoParaAppLigado, removeEventoParaAppLigado } from './functions/addEventoParaAppLigado';
import notificarAgendado from './functions/notificarAgendado';
import listNotificacoesAgendadas from './functions/listNotificacoesAgendadas';
import cancelNotificacoesAgendadas from './functions/cancelNotificacoesAgendadas';
import notificarEmIntervalo from './functions/notificarEmIntervalo';

function MyNotificator() {
  const [statusNotification, setStatusNotification] = useState<AuthorizationStatus | null>(null);

  useEffect(() => {
    async function askForPermissions() {
      const permitido = await pedePermissao();
      setStatusNotification(permitido);
    }
    askForPermissions();
    addEventoParaAppLigado(); //mais informações no arquivo addEventoParaAppLigado.ts
    //addEventoParaAppDesligado(); //movido para o index.ts
    return () => { // Opcional: limpar listeners ao desmontar
      removeEventoParaAppLigado();
    };
  }, [])

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => { notificar(statusNotification) }}>
        <Text style={styles.buttonText}>Display Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { notificarAgendado() }}>
        <Text style={styles.buttonText}>Agendar notificação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { listNotificacoesAgendadas() }}>
        <Text style={styles.buttonText}>Listar Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { cancelNotificacoesAgendadas() }}>
        <Text style={styles.buttonText}>Cancelar Notificações Agendadas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { notificarEmIntervalo() }}>
        <Text style={styles.buttonText}>Agendar com Intervalo</Text>
      </TouchableOpacity>
    </>
  )
}

export default MyNotificator;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 4,
    marginVertical: 8,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
})