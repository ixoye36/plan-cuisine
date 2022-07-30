import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import HeroSection from "../components/HeroSection";
import PricingPlans from "../components/PricingPlans";

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
      <div className="text-center my-5">
        <h2>Tarifs</h2>
        <PricingPlans />
      </div>
    </Styles>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
