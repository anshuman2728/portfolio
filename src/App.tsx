import { useState } from 'react';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { ExperienceAchievements } from './components/ExperienceAchievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] relative selection:bg-white selection:text-black">
      {/* Dynamic Ambient Background */}
      <BackgroundEffect />

      {/* Persistent Minimal Editorial Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Projects />
        <TechStack />
        <About />
        <ExperienceAchievements />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
