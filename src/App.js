
import { Provider } from 'react-redux';
import Index from './components/index';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Index/>
    </Provider>
  );
}

export default App;
