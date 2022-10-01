import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/navi/Navi";
import Dashboard from "./layouts/dashboard/Dashboard";
import "react-whatsapp-widget/dist/index.css";
import {
  ContextProvider,
  reducer,
  cartState,
} from "./contexts/ContextProvider";
import { Helmet } from "react-helmet"

function App() {
  return (
    <ContextProvider reducer={reducer} cartState={cartState}>
      <div className="App">
        <Helmet>
          <title>ULUDAĞ ÇORAP</title>
          <meta name="description" content="Hızlı ve güvenli alışverişin adresi" />
          <meta name="keywords" content="Uludağ Çorap, Giyim, Tişört, Pantolon, Çorap" />
        </Helmet>
          <Navi />
          <Dashboard />
      </div>
    </ContextProvider>
  );
}

export default App;
