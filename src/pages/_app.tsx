// import "../styles/globals.css";
import type { AppProps } from "next/app";
import globalStyles from "../styles/globalStyles";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return <Component {...pageProps} />;
};

export default MyApp;
