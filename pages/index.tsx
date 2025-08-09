import dynamic from "next/dynamic";
import Layout from "~/components/Layouts/Default";
import Hero from "~/components/Hero/Hero";
import HeroFrameworks from "~/components/Hero/HeroFrameworks";

const Features = dynamic(() => import("components/Features/index"));
const CTABanner = dynamic(() => import("components/CTABanner/index"));

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HeroFrameworks />
      <Features />
      <CTABanner className="border-none" />
    </Layout>
  );
};

export default Index;
