import type { AppProps } from "next/app";
import { GlobalProvider } from "../contexts/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
