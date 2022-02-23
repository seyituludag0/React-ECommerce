import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import Cards from "./cards/Cards";

export default function Admin() {

  const [state] = useUserContext();

    return (
      <>
      {state.isAdmin ? (<Cards />):(<h1>Hayır Hayır! Bu alana girmene izin veremeyiz</h1>)}
      </>
    );
  }