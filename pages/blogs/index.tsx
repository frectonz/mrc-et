// Components
import Hero from "../../components/main/Hero";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/utils/MainContainer";
import TwoColumnSection from "../../components/main/TwoColumnSection/TwoColumnSection";

export default function Blogs() {
  return (
    <Layout>
      <Hero title="Blogs" text="" image="/hero/lab.jpg" textColor="white" />
      <MainContainer>
        <TwoColumnSection
          title="Lorem ipsum dolor sit amet consectetur, adipisicing."
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos et laborum deleniti, eos tempora! Possimus, earum? Officia odit explicabo laudantium ea ratione sapiente mollitia libero soluta praesentium necessitatibus, architecto tenetur, beatae impedit eaque in voluptatibus iure eius dolorum dolores! Recusandae eius amet debitis qui ad voluptatem nihil explicabo modi!`}
          link="/services"
          linkText="Read More"
          imageLink="/hero/covid19.png"
        />
      </MainContainer>
      <MainContainer>
        <TwoColumnSection
          title="Lorem ipsum dolor sit amet consectetur, adipisicing."
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos et laborum deleniti, eos tempora! Possimus, earum? Officia odit explicabo laudantium ea ratione sapiente mollitia libero soluta praesentium necessitatibus, architecto tenetur, beatae impedit eaque in voluptatibus iure eius dolorum dolores! Recusandae eius amet debitis qui ad voluptatem nihil explicabo modi!`}
          link="/services"
          linkText="Read More"
          imageLink="/hero/covid19.png"
        />
      </MainContainer>
      <MainContainer>
        <TwoColumnSection
          title="Lorem ipsum dolor sit amet consectetur, adipisicing."
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos et laborum deleniti, eos tempora! Possimus, earum? Officia odit explicabo laudantium ea ratione sapiente mollitia libero soluta praesentium necessitatibus, architecto tenetur, beatae impedit eaque in voluptatibus iure eius dolorum dolores! Recusandae eius amet debitis qui ad voluptatem nihil explicabo modi!`}
          link="/services"
          linkText="Read More"
          imageLink="/hero/covid19.png"
        />
      </MainContainer>
    </Layout>
  );
}
