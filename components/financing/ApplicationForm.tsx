'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { getAllVehicles } from '@/lib/vehicles';

interface ApplicationFormProps {
  preselectedVehicle?: string;
}

export default function ApplicationForm({ preselectedVehicle }: ApplicationFormProps) {
  const { t } = useLanguage();
  const vehicles = getAllVehicles();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    income: '',
    employment: '',
    creditScore: '',
    vehicle: preselectedVehicle || '',
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
        <h3 className="text-2xl font-black text-foreground mb-2">{t('financing.success')}</h3>
        <p className="text-muted">{t('financing.successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={t('financing.name')}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          label={t('financing.email')}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={t('financing.phone')}
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <Input
          label={t('financing.income')}
          type="number"
          value={form.income}
          onChange={(e) => setForm({ ...form, income: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-foreground">{t('financing.employment')}</label>
          <select
            value={form.employment}
            onChange={(e) => setForm({ ...form, employment: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          >
            <option value="" disabled>--</option>
            <option value="employed">{t('financing.employed')}</option>
            <option value="self-employed">{t('financing.selfEmployed')}</option>
            <option value="retired">{t('financing.retired')}</option>
            <option value="other">{t('financing.other')}</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-foreground">{t('financing.creditScore')}</label>
          <select
            value={form.creditScore}
            onChange={(e) => setForm({ ...form, creditScore: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          >
            <option value="" disabled>--</option>
            <option value="excellent">{t('financing.excellent')}</option>
            <option value="good">{t('financing.good')}</option>
            <option value="fair">{t('financing.fair')}</option>
            <option value="needs-work">{t('financing.needsWork')}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-foreground">{t('financing.vehicleInterest')}</label>
        <select
          value={form.vehicle}
          onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        >
          <option value="">{t('financing.selectVehicle')}</option>
          {vehicles.map((v) => (
            <option key={v.id} value={v.slug}>
              {v.year} {v.brand} {v.model}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" size="lg" className="w-full">
        {t('financing.submit')}
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </Button>
    </form>
  );
}
