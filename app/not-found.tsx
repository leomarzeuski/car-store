'use client';

import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-light/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative text-center px-4 animate-slide-up">
        <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/10">
          <span className="text-5xl font-black gradient-text">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">{t('common.notFound')}</h1>
        <p className="text-muted text-lg mb-10 max-w-md mx-auto">
          {t('common.notFoundText')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" className="bg-gradient-to-r from-primary to-primary-light text-white border-0 shadow-lg shadow-primary/20">
            {t('common.backToHome')}
          </Button>
          <Button href="/inventory" variant="outline">
            {t('common.browseInventory')}
          </Button>
        </div>
      </div>
    </div>
  );
}
