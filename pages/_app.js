import Header from "../src/components/common/Header";
import CssBaseline from "@mui/material/CssBaseline";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
