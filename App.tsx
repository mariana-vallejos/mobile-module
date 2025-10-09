import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './src/screens/home/Home';
import Movies from './src/screens/movie/Movies';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        {/* <Home /> */}
        <Movies />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
