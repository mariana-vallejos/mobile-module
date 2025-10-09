import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './src/screens/home/Home';
import Movies from './src/screens/movie/Movies';

function App() {
  return (
    <SafeAreaProvider>
      {/* <Home /> */}
      <Movies/>
    </SafeAreaProvider>
  );
}

export default App;
