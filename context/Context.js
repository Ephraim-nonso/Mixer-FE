import { useState, useEffect, createContext } from "react";
import Web3Modal, { CHAIN_DATA_LIST } from "web3modal";
import { ethers } from "ethers";
import { providerOptions, DEFAULT_CHAIN } from "../connector/Connector";

// const DEFAULT_CHAIN_ID = 80001;
// const DEFAULT_CHAIN_ID = 4;
const DEFAULT_CHAIN_ID = 42;

export const Web3Context = createContext();

export const Web3Provider = (props) => {
  const { children } = props;
  const [provider, setProvider] = useState();
  const [wallet, setWallet] = useState();
  const [modal, setModal] = useState();

  //////////////-------- CONNECT WALLET -----------////////////////////
  const onConnect = async (modal) => {
    const instance = await modal?.connect();
    if (!instance) {
      return undefined;
    }

    instance.on("accountsChanged", (accounts) => {
      const prov = new ethers.providers.Web3Provider(instance);
      if (wallet?.address !== accounts[0]) {
        getWeb3Account(prov);
      }
    });

    instance.on("chainChanged", (chainId) => {
      const prov = new ethers.providers.Web3Provider(instance);
      connectTo(DEFAULT_CHAIN_ID);
      getWeb3Account(prov);
    });

    const prov = new ethers.providers.Web3Provider(instance);
    const { chainId } = await prov.getNetwork();
    if (chainId !== DEFAULT_CHAIN_ID) {
      connectTo(DEFAULT_CHAIN_ID);
      setProvider(prov);
      getWeb3Account(prov);

      return prov;
    }
    setProvider(prov);
    getWeb3Account(prov);

    return prov;
  };

  //////////////-------- GET WALLET DETAILS -----------////////////////////
  const getWeb3Account = async (provider) => {
    if (!provider) {
      throw new Error("provider is not defined");
    }
    const myWallet = {};
    try {
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      myWallet.address = address;
      const balanceOfWallet = await provider.getBalance(address);
      myWallet.balance = balanceOfWallet;
    } catch (e) {
      console.error(e);
    }
    setWallet(myWallet);
    return myWallet;
  };

  //////////////-------- DISCONNECT WALLET -----------////////////////////
  const onDisconnect = async () => {
    if (modal) {
      modal?.clearCachedProvider();
      setWallet(undefined);
    }
  };

  //////////////-------- CLEAR CACHE OF PREVIOUD CONNECTED WALLET -----------////////////////////
  // when modal is available
  useEffect(() => {
    if (modal?.cachedProvider) {
      onConnect(modal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);
  /////////////////////////////////////////////////////////

  // on page load init web3modal
  useEffect(() => {
    const web3Modal = new Web3Modal({
      network: CHAIN_DATA_LIST[DEFAULT_CHAIN_ID].network,
      cacheProvider: true,
      providerOptions,
      theme: {
        background: "rgb(14, 12, 39)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgb(145, 126, 255, 0.14)",
        hover: "rgb(145, 126, 255, .3)",
      },
    });
    setModal(web3Modal);
  }, []);

  /////////////////////////////////////////////////////////

  /**
   * Calling connect on the Web3Modal instance will open the modal and return a provider
   * @returns ethers.providers.Web3Provider (or undefined if not connected)
   */

  const connect = async () => {
    if (modal) {
      try {
        const provider = await onConnect(modal);
        return provider;
      } catch (error) {
        console.error(error);
      }
    }
    return undefined;
  };

  //////////////////////
  /**
   * Connect to a specific chain (asking wallet to switch/add network before connecting)
   * @param chainId chainId to connect to
   * @returns
   */
  const connectTo = async (chainId) => {
    if (!window.ethereum) {
      throw Error("No web3 provider found");
    }
    if (!DEFAULT_CHAIN.hasOwnProperty(chainId)) {
      throw Error(
        "Provided ChainId not supported. Supported chains are: ",
        DEFAULT_CHAIN
      );
    }
    const walletNetwork = window.ethereum.networkVersion;
    // console.log('current and default wallet network: ', walletNetwork);
    if (walletNetwork !== chainId.toString()) {
      return window.ethereum
        .request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...DEFAULT_CHAIN[chainId.toString()],
            },
          ],
        })
        .then(() => {
          return connect();
        })
        .catch((e) => {
          console.error(e);
          return undefined;
        });
    } else {
      return connect();
    }
  };

  /*** Disconnect wallet*/
  const disconnect = () => {
    onDisconnect();
  };

  return (
    <Web3Context.Provider
      value={{ wallet, provider, connect, connectTo, disconnect }}
    >
      {children}
    </Web3Context.Provider>
  );
};
