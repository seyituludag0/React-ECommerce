import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
// import Unauthorized from "../../layouts/unauthorized/Unauthorized";
import Cards from "./cards/Cards";

export default function Admin() {

  const [state] = useUserContext();

    return (
      <>
      {state.isAdmin ? (<Cards />):(<h1>Unauthorized</h1>)}
      </>
    );
  }