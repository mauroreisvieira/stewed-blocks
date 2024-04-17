import React from "react";
// UI Components
import { LayoutWithNav } from "./components/LayoutWithNav";
import { Board } from "./dashboard/Board";

export default function Dashboard(): React.ReactElement {
  return (
    <LayoutWithNav>
      <Board />
    </LayoutWithNav>
  );
}
