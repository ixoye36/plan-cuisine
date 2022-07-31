import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import HeroSection from "../components/HeroSection";
import PricingPlans from "../components/PricingPlans";
import FeaturesSection from "../components/FeaturesSection";

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
      <HeroSection />
      <FeaturesSection />
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
