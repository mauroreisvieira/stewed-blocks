import React from "react";
// UI Components
import { Layout } from "../components/Layout";
import { SignIn } from "./components/SignIn";

export default function Login(): React.ReactElement {
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
}
