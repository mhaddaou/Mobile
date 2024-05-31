//@ts-ignore
import { SafeAreaProvider ,useSafAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from './src/components/home-screen';




export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
