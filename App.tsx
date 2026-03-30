import { SafeAreaProvider } from 'react-native-safe-area-context';
import StoppedRecordingScreen from './src/screens/StoppedRecordingScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BPG-Nino': require('./assets/fonts/bpg_nino_mtavruli_normal.otf'),
  });
  
  return (
    <SafeAreaProvider>
      <StoppedRecordingScreen />
    </SafeAreaProvider>
  );
}