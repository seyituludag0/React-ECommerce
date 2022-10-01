import React from 'react'
import Card from "./utils/Card";


export default function SelectableCard() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Card type={"free"} />
      <Card type={"premium"} />
    </div>
  )
}
