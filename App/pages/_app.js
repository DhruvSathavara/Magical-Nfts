import "../styles/globals.css";
import '../pages/index.css'
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext"; 
import { SupercoolAuthContextProvider } from "../context/supercoolContext"; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
 

  return (
    <>

      <Meta title="Home 1" />

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <SupercoolAuthContextProvider> 
              <UserContext.Provider>
                {pid === "/login" ? (
                  <Component {...pageProps} />
                ) : (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                )}
              </UserContext.Provider>
            </SupercoolAuthContextProvider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
