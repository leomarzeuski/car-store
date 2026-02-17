'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/inventory', label: t('nav.inventory') },
    { href: '/financing', label: t('nav.financing') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/schedule', label: t('nav.schedule') },
  ];

  return (
    <footer className="relative bg-[#0a1628] text-white overflow-hidden" role="contentinfo">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-secondary to-accent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary-light/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="https://dcdws.blob.core.windows.net/dws-14031841-51122-media/sites/51122/2023/05/cw-logo-w300.png"
                alt="Car Warriors LLC"
                width={180}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { name: 'Facebook', letter: 'f' },
                { name: 'Instagram', letter: 'in' },
                { name: 'Twitter', letter: 'X' },
                { name: 'YouTube', letter: 'YT' },
              ].map((social) => (
                <span
                  key={social.name}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xs font-bold text-white/50 hover:bg-primary-light hover:text-white hover:border-primary-light transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  aria-label={social.name}
                  role="link"
                  tabIndex={0}
                >
                  {social.letter}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-white/20 group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm text-white/50">{t('contact.address')}<br />{t('contact.city')}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm text-white/50">{t('contact.phone1')}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-white/50">{t('contact.email1')}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5">{t('contact.hoursTitle')}</h3>
            <div className="space-y-3">
              {[
                { text: t('contact.weekdays'), color: 'bg-success' },
                { text: t('contact.saturday'), color: 'bg-secondary' },
                { text: t('contact.sunday'), color: 'bg-primary-light' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl">
              <p className="text-sm font-semibold text-white/80 mb-3">
                {t('nav.inventory') === 'Estoque' ? 'Pronto para seu novo carro?' : 'Ready for your new car?'}
              </p>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-light transition-colors"
              >
                {t('nav.schedule')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Car Warriors LLC. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <span className="hover:text-white/60 cursor-pointer transition-colors">{t('footer.privacy')}</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
