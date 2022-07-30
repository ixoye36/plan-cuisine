import '../styles/globals.css';
import "../styles/Styles.css";
import "../styles/Button.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

