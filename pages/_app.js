import { SessionProvider, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import Head from "next/head";

import { wrapper } from "../redux/app/store";
import "../styles/globals.css";
import NonSSRWrapper from "../components/NonSSRWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>School management system</title>
        <meta name="description" content="school management" />
        <meta name="keywords" content="school management" />
      </Head>

      <Component {...pageProps} />

      {/* <NonSSRWrapper>
        <Component {...pageProps} />
      </NonSSRWrapper> */}
    </SessionProvider>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
