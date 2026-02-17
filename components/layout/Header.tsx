'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/shared/LanguageSelector';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/inventory', label: t('nav.inventory') },
    { href: '/financing', label: t('nav.financing') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-sale via-sale-light to-secondary text-white text-center py-2 px-4 text-sm font-semibold tracking-wide relative overflow-hidden">
        <div className="animate-shimmer absolute inset-0" />
        <p className="relative z-10 flex items-center justify-center gap-2 flex-wrap">
          <span className="animate-badge-pulse inline-block">&#9733;</span>
          <span className="uppercase tracking-widest text-xs sm:text-sm">
            {t('nav.inventory') === 'Estoque' ? 'MEGA SALE - Ofertas Imperd\u00edveis Este M\u00eas!' : 'MEGA SALE - Unbeatable Deals This Month!'}
          </span>
          <span className="animate-badge-pulse inline-block">&#9733;</span>
          <Link
            href="/inventory"
            className="ml-2 underline underline-offset-2 hover:no-underline font-bold"
          >
            {t('nav.inventory') === 'Estoque' ? 'Ver Ofertas \u2192' : 'Shop Now \u2192'}
          </Link>
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border'
            : 'bg-background/80 backdrop-blur-md border-b border-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Car Warriors LLC - Home">
              <Image
                src="https://dcdws.blob.core.windows.net/dws-14031841-51122-media/sites/51122/2023/05/cw-logo-w300.png"
                alt="Car Warriors LLC"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-muted hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSelector />
              <Link
                href="/inventory"
                className="relative px-4 py-2 text-sm font-bold text-sale border-2 border-sale rounded-lg hover:bg-sale hover:text-white transition-all duration-200"
              >
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-[9px] text-white font-bold animate-badge-pulse">
                  %
                </span>
                SALE
              </Link>
              <Link
                href="/schedule"
                className="px-5 py-2.5 bg-gradient-to-r from-secondary to-secondary-light text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-secondary/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                {t('nav.schedule')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-foreground rounded-lg hover:bg-input transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-base font-semibold text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-3">
                <Link
                  href="/inventory"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 border-2 border-sale text-sale font-bold rounded-lg hover:bg-sale hover:text-white transition-colors"
                >
                  SALE - {t('nav.inventory') === 'Estoque' ? 'Ver Ofertas' : 'Shop Deals'}
                </Link>
                <Link
                  href="/schedule"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3.5 bg-gradient-to-r from-secondary to-secondary-light text-white font-bold rounded-lg"
                >
                  {t('nav.schedule')}
                </Link>
                <div className="pt-2 flex items-center justify-center">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
