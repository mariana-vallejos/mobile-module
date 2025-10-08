import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './src/screens/home/Home';

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
