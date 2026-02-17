'use client';

import { useLanguage } from '@/context/LanguageContext';

const team = [
  { name: 'Michael Torres', role: 'Founder & CEO', initials: 'MT', color: 'from-primary to-primary-light' },
  { name: 'Jessica Williams', role: 'Sales Director', initials: 'JW', color: 'from-accent to-cyan-400' },
  { name: 'Robert Kim', role: 'Finance Manager', initials: 'RK', color: 'from-secondary to-secondary-light' },
  { name: 'Amanda Costa', role: 'Customer Relations', initials: 'AC', color: 'from-success to-emerald-400' },
];

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('about.value1Title'),
      text: t('about.value1Text'),
      color: 'primary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: t('about.value2Title'),
      text: t('about.value2Text'),
      color: 'accent',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t('about.value3Title'),
      text: t('about.value3Text'),
      color: 'sale',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: t('about.value4Title'),
      text: t('about.value4Text'),
      color: 'secondary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: 'bg-primary/10', text: 'text-primary-light', border: 'border-primary/20 hover:border-primary/40' },
    accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20 hover:border-accent/40' },
    sale: { bg: 'bg-sale/10', text: 'text-sale', border: 'border-sale/20 hover:border-sale/40' },
    secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20 hover:border-secondary/40' },
  };

  const whyChoose = [
    t('about.why1'),
    t('about.why2'),
    t('about.why3'),
    t('about.why4'),
    t('about.why5'),
    t('about.why6'),
  ];

  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2341] to-[#1a365d] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,58,138,0.2),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/10">
            Car Warriors LLC
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* History */}
        <section className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-foreground">
              {t('about.historyTitle')}
            </h3>
          </div>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>{t('about.historyText1')}</p>
            <p>{t('about.historyText2')}</p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-foreground">
              {t('about.missionTitle')}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const c = colorMap[val.color];
              return (
                <div
                  key={val.title}
                  className={`bg-card border ${c.border} rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 ${c.text}`}>
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">{val.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{val.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-foreground">
              {t('about.teamTitle')}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-white text-xl font-black">{member.initials}</span>
                </div>
                <h4 className="font-bold text-foreground text-lg">{member.name}</h4>
                <p className="text-sm text-primary-light font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-foreground">
              {t('about.whyTitle')}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:border-success/30 hover:bg-success/5 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
