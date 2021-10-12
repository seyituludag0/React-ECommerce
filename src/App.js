import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from './layouts/navi/Navi';
import Dashboard from './layouts/dashboard/Dashboard';
import Footer from "./layouts/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
