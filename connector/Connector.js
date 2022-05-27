import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

// export const contractAddress = "0x68600492317c31D5102d93D9fDE1d5619e19b0fc"; // Mumbai
// export const contractAddress = "0x35db796b120a05adf89578e6CE0604589CC70770"; // Rinkeby
export const contractAddress = "0x8EAb436cE6d765e66ad6C888142313BF0f2590F2"; // Kovan

export const providerOptions = {
  /* See Provider Options Section */

  // wallet connect
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      chainId: 80001,
      infuraId: "acd485fef89240c2a29744adb8ca8bd1", // required
    },
  },

  // coinbase wallet
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Mixer", // Required
      infuraId: "acd485fef89240c2a29744adb8ca8bd1", // Required
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 80001, // Optional. It defaults to 1 if not provided
      darkMode: false, // Optional. Use dark theme, defaults to false
    },
  },
};

export const DEFAULT_CHAIN = {
  4: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Rinkeby",
    nativeCurrency: {
      name: "Rinkeby Ether",
      symbol: "RIN",
      decimals: 18,
    },
    rpcUrls: [
      "https://rinkeby.infura.io/v3/acd485fef89240c2a29744adb8ca8bd1",
      "wss://rinkeby.infura.io/ws/v3/acd485fef89240c2a29744adb8ca8bd1",
    ],
  },
  42: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Kovan",
    nativeCurrency: {
      name: "Kovan Ether",
      symbol: "KOV",
      decimals: 18,
    },
    rpcUrls: [
      "https://kovan.infura.io/v3/acd485fef89240c2a29744adb8ca8bd1",
      "wss://kovan.infura.io/ws/v3/acd485fef89240c2a29744adb8ca8bd1",
    ],
  },
  80001: {
    rpcUrls: [
      "https://matic-mumbai.chainstacklabs.com",
      "https://rpc-mumbai.maticvigil.com",
      "https://matic-testnet-archive-rpc.bwarelabs.com",
    ],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai Testnet",
  },
};
