import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./layouts/navi/Navi";
import Dashboard from "./layouts/dashboard/Dashboard";
import Footer from "./layouts/footer/Footer";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
      <div className="whatsApp-widget">
      <WhatsAppWidget
        phoneNumber="+905522107134"
        textReplyTime="Genellikle bir gün içinde yanıt verir"
        message="Merhaba! 👋🏼 Sizin için ne yapabiliriz?"
        companyName="Uludağ Çorap"
        sendButton="Gönder"
        placeholder="Mesaj"
      />
      </div> 
      <Footer />
    </div>
  );
}

export default App;
