import { persistor, useStore } from "@/store";
import "@/styles/index.scss";
import { NextPage } from "next";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import DefaultLayout from "@/layouts";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { styled, ThemeProvider } from "@mui/styles";
import { getMuiTheme } from "@/styles/theme";

const HeadCustom = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
    </Head>
  );
};

function App(props: AppProps<{ initialReduxState: any }>) {
  const { pageProps } = props;
  const store = useStore(pageProps.initialReduxState);
  const theme = getMuiTheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppBody {...props} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  /**
   * allow chain per page, empty array bypass chain block modal
   * @default [ChainId.BSC]
   * */
  chains?: number[];
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function AppBody(props: AppPropsWithLayout) {
  const { pageProps, Component } = props;
  const Layout = Component.Layout || DefaultLayout;
  const { pathname } = useRouter();

  const renderCurrentSelection = () => {
    switch (pathname) {
      case "/invite":
      case "/login":
      case "/forgot-password":
        return (
          <>
            <HeadCustom />
          </>
        );

      case "/sign-up":
      case "/create-company-account":
        return <Component {...pageProps} />;
      default:
        return (
          <Layout>
            <HeadCustom />
            <Component {...pageProps} />
          </Layout>
        );
    }
  };

  return <>{renderCurrentSelection()}</>;
}

export default App;
