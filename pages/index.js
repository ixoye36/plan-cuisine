import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import HeroSection from "../components/HeroSection";
import PricingPlans from "../components/PricingPlans";
import FeaturesSection from "../components/FeaturesSection";
import Head from "next/head";
import HowTo from "../components/HowTo";
import Accordion from "../components/Accordion";

const Styles = styled.div`
  
  h2, .h2 {
    font-family: "Poppins Bold" !important;
    font-size: 40px !important;
    line-height: 64px !important;
  }
`;

const Home = () => {
  return (
    <Styles>
      <Head>
        <title>CuisinePlan - Votre plan cuisine à moindre coût</title>
        <meta name="description" content="Obtenez votre devis de cuisine Leroy Merlin, IKEA ou Brico Depot" />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <HowTo />
      <div className="text-center my-5 pt-5" id="tarifs">
        <h2 className="mt-5">Nos offres 🔥</h2>
        <PricingPlans />
      </div>
      <div className="container text-center mt-5 py-5">
        <h2 className="">Foire aux questions 🤓</h2>
        <div className="w-75 mx-auto mt-5 pt-5 mb-5 pb-5">
          <Accordion />
        </div>
      </div>
    </Styles>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
