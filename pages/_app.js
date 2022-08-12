import '../styles/globals.css';
import "../styles/Styles.css";
import "../styles/Button.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script type="text/javascript" src="/scripts.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

