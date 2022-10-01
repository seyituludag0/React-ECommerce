import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import Cards from "./cards/Cards";

export default function Admin() {
  const [state] = useUserContext();
  const [time, setTime] = useState(Date.now());


  const myTimeout = setTimeout(setUserId, 2000);



  function setUserId() {
    localStorage.setItem("userId", state?.authenticatedUser?.id)
    clearTimeout(myTimeout)
  }

  

    return (
      <>
      {state.isAdmin ? (<Cards />):(<h1>Hayır Hayır! Bu alana girmene izin veremeyiz</h1>)}
      </>
    );
  }