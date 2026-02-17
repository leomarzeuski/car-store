'use client';

import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#0c1a35]">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/10">
          {t('nav.inventory') === 'Estoque' ? 'N\u00e3o perca essa chance' : "Don't miss out"}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {t('home.ctaTitle')}
        </h2>
        <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('home.ctaSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/schedule" size="lg" className="bg-gradient-to-r from-secondary to-secondary-light text-white font-bold shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all border-0">
            {t('home.ctaButton')}
          </Button>
          <Button
            href="/financing"
            size="lg"
            className="glass text-white hover:bg-white/15 border-white/20 transition-all font-bold"
          >
            {t('home.ctaButtonAlt')}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap gap-6 justify-center">
          {[
            { icon: '&#9733;', text: '4.9/5 Google Reviews' },
            { icon: '&#10003;', text: 'BBB Accredited' },
            { icon: '&#9830;', text: 'Licensed & Insured' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-white/40">
              <span className="text-secondary" dangerouslySetInnerHTML={{ __html: item.icon }} />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
