import PresentLevels from "./components/Onboarding/PresentLevels";
import Hero from "./components/Onboarding/Hero";
import Offer from "./components/Onboarding/Offer";
import OnBoardingHeader from "./components/Onboarding/OnboardingHeader";
import GoalsAndObjectives from "./components/Onboarding/GoalsAndObjectives";
import FAQs from "./components/Onboarding/FAQs";
import GetStarted from "./components/Onboarding/GetStarted";
import OnboardingFooter from "./components/Onboarding/OnboardingFooter";

export default function Home() {
  return (
    <main>
      <OnBoardingHeader />
      <Hero />
      <Offer />
      <GoalsAndObjectives />
      <PresentLevels />
      <FAQs />
      <GetStarted />
      <OnboardingFooter />
    </main>
  );
}
