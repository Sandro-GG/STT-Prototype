import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import HistoryScreen from './src/screens/HistoryScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BPG-Nino': require('./assets/fonts/bpg_nino_mtavruli_normal.otf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <HistoryScreen />
    </SafeAreaProvider>
  );
}