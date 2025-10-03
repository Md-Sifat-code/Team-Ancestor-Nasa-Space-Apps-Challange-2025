import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import MarsSection from "@/components/MarsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ImpactSection from "@/components/ImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <MarsSection />
        <SustainabilitySection />
        <ImpactSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
