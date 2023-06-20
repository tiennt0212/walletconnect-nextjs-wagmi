"use client";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";

const chains = [arbitrum, mainnet, polygon];
const projectId = "4ece6b1bd0a2feee12ee203fa0e1355d";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletConnectPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WagmiConfig config={wagmiConfig}>
        <h1>Wallet Connect Page</h1>
        <Web3Button />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </main>
  );
};

export default WalletConnectPage;
