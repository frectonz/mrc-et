// Components
import Seo from "../components/utils/Seo";
import Hero from "../components/main/Hero";
import InfoList from "../components/main/InfoList";
import MainContainer from "../components/utils/MainContainer";

// Data
import services from "../data/pages/services.json";

export default function Services() {
  return (
    <>
      <Seo title="Services" />
      <Hero
        title={services.headline_title}
        text={services.headline_detail}
        image={services.headline_image}
        textColor="white"
      />
      <MainContainer py={10}>
        <InfoList infos={services.services} />
      </MainContainer>
    </>
  );
}
