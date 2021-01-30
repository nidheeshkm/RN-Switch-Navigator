import React, { useState, useContext, useEffect } from "react";
import { Context as AuthContext } from "../src/context/authContext";

const authResolveScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
};

export default authResolveScreen;
