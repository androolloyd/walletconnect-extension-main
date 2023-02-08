import WalletConnectProvider from "@walletconnect/web3-provider";
import provider from "eth-provider";

const wcProvider = new WalletConnectProvider({
  infuraId: "8b014620351a4cbe814220743619df5b",
});
wcProvider.isMetaMask = true;
wcProvider.isMetamask = true;
wcProvider.enable();
window.ethereum = wcProvider;

// window.ethereum =
