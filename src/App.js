import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Navi from './layouts/navi/Navi';
import Sock from './components/sock/Sock';

function App() {
  return (
    <div className="App">
     <Navi />
     <Sock />
    </div>
  );
}

export default App;
