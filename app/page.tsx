import PresentLevels from "./components/Onboarding/PresentLevels";
import Hero from "./components/Onboarding/Hero";
import Offer from "./components/Onboarding/Offer";
import OnBoardingHeader from "./components/Onboarding/OnboardingHeader";
import GoalsAndObjectives from "./components/Onboarding/GoalsAndObjectives";

export default function Home() {
  return (
    <main>
      <OnBoardingHeader />
      <Hero />
      <Offer />
      <GoalsAndObjectives />
      <PresentLevels />
    </main>
  );
}
