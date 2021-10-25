import * as React from 'react';
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export default function WidgetWhatsApp() {
  return (
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
  );
}
