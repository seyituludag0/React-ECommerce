import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import Cards from "./cards/Cards";

export default function Admin() {

  const [state] = useUserContext();

    return (
      <>
      {state.isAdmin ? (<Cards />):(<h1>YETKIN YOK</h1>)}
      </>
    );
  }