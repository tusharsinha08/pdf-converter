import CTA from "./CTA";
import Features from "./Features";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Tools from "./Tools";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <Tools></Tools>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <CTA></CTA>
    </>
  );
}