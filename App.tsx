import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './src/screens/Home';

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
