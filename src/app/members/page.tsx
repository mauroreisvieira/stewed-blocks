import React from "react";
// UI Components
import { Layout } from "../components/Layout";
import { Members } from "./components/Members";

export default function Login(): React.ReactElement {
  return (
    <Layout>
      <Members />
    </Layout>
  );
}
