import React from "react";
import { useMachine } from "@xstate/react";
import { toggleMachine } from "./machine";
import { Container, Card } from "./styles";

export default function Toggle() {
  const [current, send] = useMachine(toggleMachine);

  return (
    <Container>
      <Card
        active={current.matches("inactive")}
        onClick={() => send("TOGGLE")}
        whileHover={{ y: 50, x: 50, zoom: 1.1 }}
        transition={{ ease: "easeOut" }}
      >
        Click me
      </Card>
    </Container>
  );
}
