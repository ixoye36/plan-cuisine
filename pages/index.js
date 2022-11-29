import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import HeroSection from "../components/HeroSection";
import PricingPlans from "../components/PricingPlans";
import FeaturesSection from "../components/FeaturesSection";
import Head from "next/head";
import HowTo from "../components/HowTo";
import Accordion from "../components/Accordion";
import Script from "next/script";
import BlogLatest from "../components/BlogLatest";
import Image from "next/future/image";
import kitchen from "../assets/images/kitchen-ft-2.jpg";

const Styles = styled.div`
  
  h2, .h2 {
    font-family: "Poppins Bold" !important;
    font-size: 40px !important;
    line-height: 64px !important;
  }
  
  @media screen and (max-width: 767px)
  {
    .faq {
      width: 100% !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .howto-section {
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
      /* overflow-x: auto; */
    }
  }
  
  .footer-img {

  }
  
   .footer-img img {
    object-fit: cover;
  }
`;

const Home = () => {
  return (
    <Styles>
      <Head>
        <title>CuisinePlan - Votre plan cuisine à moindre coût</title>
        <meta name="description" content="Obtenez votre devis de cuisine Leroy Merlin, IKEA ou Brico Depot" />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T6SQ4WH"
          height="0"
          width="0"
          style={
            {
              display: 'none',
              visibility: 'hidden',
            }
          }
        />
      </noscript>
      <HeroSection />
      <FeaturesSection />
      <div className="howto-section pt-5">
        <HowTo />
      </div>
      <div className="text-center my-5 pt-5" id="tarifs">
        <h2 className="mt-5">Nos offres 🔥</h2>
        <PricingPlans />
      </div>
      <div className="container text-center mt-5 py-5">
        <h2 className="">Foire aux questions 🤓</h2>
        <div className="w-75 mx-auto mt-5 pt-5 faq">
          <Accordion />
        </div>
      </div>
      <div className="container-fluid footer-img px-0">
        <Image src={kitchen} layout="raw" />
      </div>
    </Styles>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
