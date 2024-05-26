import { Layout, AssetsOverview } from "@/components";
import { selectedChain  } from "@/config/mock_assets";

export default function Home() {
  return (
    <Layout>
      <AssetsOverview selectedChainName={selectedChain}></AssetsOverview>
    </Layout>
  );
}
