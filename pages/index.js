import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import HeroSection from "../components/HeroSection";
import PricingPlans from "../components/PricingPlans";
import FeaturesSection from "../components/FeaturesSection";
import Head from "next/head";
import HowTo from "../components/HowTo";

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
        <title>CuisinePlan - Votre assistant cuisine</title>
        <meta name="description" content="Obtenez votre devis de cuisine Leroy Merlin, IKEA ou Brico Depot" />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <HowTo />
      <div className="text-center my-5 pt-5" id="tarifs">
        <h2>Nos offres</h2>
        <PricingPlans />
      </div>
    </Styles>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
