import React from "react";
// UI Components
import { Layout } from "./components/Layout";
import { Board } from "./dashboard/Board";

export default function Dashboard(): React.ReactElement {
  return (
    <Layout displayNav>
      <Board />
    </Layout>
  );
}
