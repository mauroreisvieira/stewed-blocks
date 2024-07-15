import React from "react";
// UI Components
import { Layout } from "./components/Layout";
import { Dashboard } from "./dashboard/Dashboard";

export default function Default(): React.ReactElement {
  return (
    <Layout screen="2xl">
      <Dashboard />
    </Layout>
  );
}
