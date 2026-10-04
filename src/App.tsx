import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { PanelShowcase } from './components/PanelShowcase';
import { CopilotDiagnostics2027 } from './components/CopilotDiagnostics2027';
import { HardwareSpecs } from './components/HardwareSpecs';
import { LocationPingTester } from './components/LocationPingTester';
import { Testimonials } from './components/Testimonials';
import { AffiliateProgram } from './components/AffiliateProgram';
import { FaqSection } from './components/FaqSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { StatusModal } from './components/StatusModal';
import { SupportModal } from './components/SupportModal';
import { Plan, BotPlan } from './types';

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [supportCategory, setSupportCategory] = useState<string>('technical');
  const [selectedPlan, setSelectedPlan] = useState<Plan | BotPlan | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'minecraft' | 'bot'>('minecraft');

  const handleOpenSupport = (category: string = 'technical') => {
    setSupportCategory(category);
    setIsSupportOpen(true);
  };

  const handleOpenOrder = (plan?: Plan | BotPlan, category: 'minecraft' | 'bot' = 'minecraft') => {
    if (plan) {
      setSelectedPlan(plan);
      setSelectedCategory(category);
    }
    setIsOrderOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060608] text-neutral-100 flex flex-col font-sans selection:bg-[#ff4500]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenOrder={() => handleOpenOrder()}
        onNavigateSection={scrollToSection}
        onOpenStatus={() => setIsStatusOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section matching the screenshot */}
        <div id="hero">
          <Hero
            onViewPlans={() => scrollToSection('pricing')}
            onLearnMore={() => scrollToSection('features')}
            onSelectFeature={(feature) => {
              if (feature === 'uptime') {
                setIsStatusOpen(true);
              } else {
                scrollToSection('features');
              }
            }}
          />
        </div>

        {/* Pricing Plans & Custom Server Configurator */}
        <PricingSection
          onSelectPlan={(plan, category) => handleOpenOrder(plan, category)}
        />

        {/* Interactive Game Control Panel & Console */}
        <PanelShowcase />

        {/* 2027 Next-Gen AI Copilot & Live Crash Diagnostics */}
        <CopilotDiagnostics2027 />

        {/* Enterprise Hardware & DDoS Mitigation Pillars */}
        <HardwareSpecs />

        {/* Global Datacenters & Live Ping Latency Benchmark */}
        <LocationPingTester />

        {/* User Reviews Carousel from Discord and Trustpilot */}
        <Testimonials />

        {/* Affiliate Program Section */}
        <AffiliateProgram onJoinAffiliate={() => handleOpenSupport('affiliate')} />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrder={() => handleOpenOrder()}
        onNavigateSection={scrollToSection}
        onOpenStatus={() => setIsStatusOpen(true)}
        onOpenSupport={() => handleOpenSupport('technical')}
      />

      {/* Modals */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        selectedPlan={selectedPlan}
        category={selectedCategory}
      />

      <StatusModal
        isOpen={isStatusOpen}
        onClose={() => setIsStatusOpen(false)}
      />

      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
        initialCategory={supportCategory}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
