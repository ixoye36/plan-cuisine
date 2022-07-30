import PropTypes from "prop-types";
import styled from "styled-components";
import Script from "next/script";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const Styles = styled.div`
  min-height: calc(100vh - var(--header-h) - var(--footer-h));
`;

const DefaultLayout = ({ children }) => (
  <div className="d-flex flex-column">
    <NavigationBar />
    <Styles>{children}</Styles>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    <Footer />
  </div>
);

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
