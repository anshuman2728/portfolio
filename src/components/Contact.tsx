import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast('Email copied to clipboard.');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Inquiry%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    onShowToast('Message composer opened with your details.');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header & Monumental CTA */}
      <div className="editorial-border-b pb-16 sm:pb-24 space-y-6 text-left">
        <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          [ 05 / GET IN TOUCH ]
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-display tracking-tighter text-white leading-[0.9]">
          <ScrollRevealText
            text="LET'S BUILD TOGETHER."
            trigger="Scroll"
            preset="Fade In Up"
            splitMode="Characters"
            stagger={0.06}
            offsetStart={85}
            offsetEnd={30}
            colorHidden="rgba(255, 255, 255, 0.2)"
            colorRevealed="#ffffff"
          />
        </h2>

        <p className="text-zinc-400 text-base sm:text-xl font-light max-w-2xl pt-2">
          Open to full-time Software Engineer positions, SDE internships, and ambitious engineering collaborations.
        </p>
      </div>

      {/* Grid: Direct Contact Links & Message Composer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-16 items-start">
        
        {/* Left Column: Direct Editorial Contact Directory */}
        <div className="lg:col-span-6 space-y-8 text-left font-mono text-xs">
          
          {/* Email Item */}
          <div className="editorial-border-b pb-6 space-y-2">
            <div className="text-zinc-500 uppercase tracking-widest">
              01 / DIRECT INBOX
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight break-all">
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-4 pt-2 uppercase tracking-wider">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-white border-b border-white pb-0.5 hover:text-zinc-400 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
              >
                <span>COMPOSE</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Telephone Item */}
          <div className="editorial-border-b pb-6 space-y-2">
            <div className="text-zinc-500 uppercase tracking-widest">
              02 / TELEPHONE
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight hover:text-zinc-400 transition-colors block"
            >
              {PERSONAL_INFO.phoneDisplay}
            </a>
            <div className="text-zinc-500 uppercase tracking-wider">
              LOCATION: {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Social Gateways */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-zinc-950/60 border border-zinc-800 hover:border-zinc-500 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">NETWORK</span>
                <span className="text-sm font-bold text-white font-display">LINKEDIN</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-zinc-950/60 border border-zinc-800 hover:border-zinc-500 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">CODEBASE</span>
                <span className="text-sm font-bold text-white font-display">GITHUB</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>

        {/* Right Column: Minimalist Message Form */}
        <div className="lg:col-span-6 p-8 sm:p-10 bg-[#0C0C0F] border border-zinc-800 text-left space-y-6">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            [ SEND A DIRECT MESSAGE ]
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
            <div>
              <label htmlFor="contact-name" className="block text-zinc-400 uppercase tracking-wider mb-2">
                YOUR NAME / ORGANIZATION *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="SARAH JENKINS / HIRING TEAM"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors uppercase text-xs"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-zinc-400 uppercase tracking-wider mb-2">
                YOUR EMAIL ADDRESS *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="SARAH@COMPANY.COM"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors uppercase text-xs"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-zinc-400 uppercase tracking-wider mb-2">
                MESSAGE / OPPORTUNITY DETAILS *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="HI ANSHUMAN, WE REVIEWED YOUR INTERVAI PLATFORM AND WOULD LOVE TO DISCUSS..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors uppercase text-xs resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>MESSAGE SENT SUCCESSFULLY</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
