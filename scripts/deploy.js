// Setup: npm install alchemy-sdk
// Github: https://github.com/alchemyplatform/alchemy-sdk-js
import { Network, Alchemy } from "alchemy-sdk";

// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "_h7b0uQquHnoOk3x_Bc8ciWU9q4uzEsc", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

alchemy.core.getBalance("vitalik.eth", "latest").then(console.log);
