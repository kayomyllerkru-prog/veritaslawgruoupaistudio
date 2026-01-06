import React from 'react';
import { SectionProps } from '../types';
import HeroSection from '../components/HeroSection';
import PainSection from '../components/PainSection';
import SolutionSection from '../components/SolutionSection';
import AboutSection from '../components/AboutSection';
import AreasSection from '../components/AreasSection';
import StepsSection from '../components/StepsSection';
import ValuesSection from '../components/ValuesSection';
import FAQSection from '../components/FAQSection';

interface HomeProps {
  openPopup: () => void;
}

const Home: React.FC<HomeProps> = ({ openPopup }) => {
  return (
    <main>
      <HeroSection openPopup={openPopup} />
      <PainSection />
      <SolutionSection openPopup={openPopup} />
      <AboutSection />
      <AreasSection openPopup={openPopup} />
      <StepsSection />
      <ValuesSection />
      <FAQSection openPopup={openPopup} />
    </main>
  );
};

export default Home;
