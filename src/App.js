import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './layouts/dashboard/Dashboard';
import Navi from './layouts/navi/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
    </div>
  );
}

export default App;
