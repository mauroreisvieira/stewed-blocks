import { Layout } from "../components/Layout";
import { Details } from "./Details";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <Layout>
      <Details slug={slug} />
    </Layout>
  );
}
