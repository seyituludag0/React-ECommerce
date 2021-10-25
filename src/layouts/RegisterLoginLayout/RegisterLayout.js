import React from "react";
import { Segment, Tab } from "semantic-ui-react";
import CustomerRegister from "../register/CustomerRegister";
import AdminRegister from "../register/AdminRegister";

export default function RegisterLayout() {
  const tabs = [
    {
      menuItem: "MÜŞTERİ OLARAK KAYIT OL",
      render: () => <CustomerRegister />,
    },
    {
      menuItem: "ADMİNLİK İÇİN BAŞVURUDA BULUN",
      render: () => <AdminRegister />,
    },
  ];

  return (
    <div size="large">
      <Segment stacked className="tabsssssssssss">
        <Tab panes={tabs} menu={{ secondary: true }} style={{marginLeft:"1rem"}} />
      </Segment>
    </div>
  );
}
