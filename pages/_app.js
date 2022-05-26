import Layout from "../components/layouts/Layout";
import "../styles/globals.css";
import { Web3Provider } from "../context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  );
}

export default MyApp;
