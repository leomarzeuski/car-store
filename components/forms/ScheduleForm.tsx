'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { getAllVehicles } from '@/lib/vehicles';

interface ScheduleFormProps {
  preselectedVehicle?: string;
}

export default function ScheduleForm({ preselectedVehicle }: ScheduleFormProps) {
  const { t } = useLanguage();
  const vehicles = getAllVehicles();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    vehicle: preselectedVehicle || '',
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
        <h3 className="text-2xl font-black text-foreground mb-2">{t('schedule.success')}</h3>
        <p className="text-muted">{t('schedule.successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={t('schedule.name')}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          label={t('schedule.email')}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <Input
        label={t('schedule.phone')}
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={t('schedule.date')}
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <Input
          label={t('schedule.time')}
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-foreground">
          {t('schedule.vehicleInterest')}
        </label>
        <select
          value={form.vehicle}
          onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        >
          <option value="">{t('schedule.selectVehicle')}</option>
          {vehicles.map((v) => (
            <option key={v.id} value={v.slug}>
              {v.year} {v.brand} {v.model}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-foreground">{t('schedule.message')}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t('schedule.messagePlaceholder')}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        {t('schedule.submit')}
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </Button>
    </form>
  );
}
