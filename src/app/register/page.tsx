import React from "react";
// UI Components
import { Layout } from "../components/Layout";
import { SignUp } from "./components/SignUp";

export default function Register(): React.ReactElement {
  return (
    <Layout screen="sm">
      <SignUp />
    </Layout>
  );
}
