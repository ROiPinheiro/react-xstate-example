import React from "react";
import { useMachine } from "@xstate/react";
import { toggleMachine } from "./machine";

export default function Toggle() {
  const [current, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send("TOGGLE")}>
      {current.matches("inactive") ? "OFF" : "ON"}
    </button>
  );
}
