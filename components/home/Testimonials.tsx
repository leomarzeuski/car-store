"use client";

import { useLanguage } from "@/context/LanguageContext";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-secondary" : "text-muted-light/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { locale, t } = useLanguage();
  const data = testimonials as Testimonial[];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute -right-40 top-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            {t("home.testimonialsBadge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            {t("home.testimonialsTitle")}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("home.testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {data.map((testimonial, i) => (
            <article
              key={testimonial.id}
              className={`relative bg-card border border-border rounded-2xl p-7 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-5xl font-serif text-primary-light/10 leading-none select-none">
                &ldquo;
              </div>

              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-5 text-foreground leading-relaxed flex-1 text-[15px]">
                &ldquo;
                {locale === "pt"
                  ? testimonial.textPt
                  : locale === "es" && testimonial.textEs
                    ? testimonial.textEs
                    : testimonial.text}
                &rdquo;
              </blockquote>
              <footer className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">
                    {testimonial.vehiclePurchased}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
