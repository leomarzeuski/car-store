'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20">
        <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-foreground mb-2">{t('contact.success')}</h3>
        <p className="text-muted">{t('contact.successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label={t('contact.name')}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={t('contact.email')}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Input
          label={t('contact.phone')}
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <Input
        label={t('contact.subject')}
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        required
      />
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-foreground">{t('contact.message')}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t('contact.messagePlaceholder')}
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        {t('contact.submit')}
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Button>
    </form>
  );
}
