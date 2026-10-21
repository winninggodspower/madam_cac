"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Building2, CalendarCheck, CheckCheck, ChevronDown, Clock, FilePen,
  HeartHandshake, Landmark, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Star, Store, Wallet,
  Layers, Zap, Hexagon, Truck, Sparkles, Leaf, Box, Gem, Globe, Feather,
} from "lucide-react";
import { BlurFade, DotPattern, MagicCard, Marquee, NumberTicker, ShimmerButton } from "./magicui";
import {
  brands, faqs, reasons, services, site, steps, testimonials, whatsappLink,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = { Store, Building2, HeartHandshake, FilePen, CalendarCheck, Landmark };
const reasonIcons = [ShieldCheck, Clock, Wallet, HeartHandshake];
const brandIcons = [Layers, Zap, Hexagon, Truck, Sparkles, Leaf, Box, Gem, Globe, Feather];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-mid">
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <BlurFade className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-emerald-deep md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-ink/65">{sub}</p>}
    </BlurFade>
  );
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-deep/5 bg-cream/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-serif text-2xl font-bold text-emerald-deep">
          Madam <span className="text-gold">CAC</span>
        </a>
        <div className="hidden gap-8 text-sm font-medium text-ink/70 md:flex">
          {["Services", "Process", "Reviews", "FAQ"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-emerald-deep">{l}</a>
          ))}
        </div>
        <ShimmerButton href={whatsappLink()} className="px-5 py-2.5 text-sm">
          <MessageCircle size={16} /> Chat now
        </ShimmerButton>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 pt-32 md:pt-36">

      <div className="relative mx-auto max-w-6xl text-center">
        <BlurFade className="flex justify-center">
          <Eyebrow><BadgeCheck size={14} /> {site.accreditation}</Eyebrow>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h1 className="relative z-0 mt-6 font-serif text-5xl font-semibold leading-[1.02] text-emerald-deep md:text-7xl">
            Hi, I&apos;m Madam CAC
            <span className="block bg-gradient-to-r from-gold to-[#a8842f] bg-clip-text italic text-transparent">
              Your CAC Registration Expert
            </span>
          </h1>
        </BlurFade>

        {/* Photo with flanking content */}
        <div className="relative z-10 -mt-8 grid md:-mt-20 items-end gap-8 md:grid-cols-[1fr_auto_1fr]">
          {/* Right (desktop): chat bubble */}
          <BlurFade delay={0.3} className="order-2 flex justify-center md:order-3 md:mb-40 md:justify-end">
            <div className="animate-float rounded-2xl rounded-bl-sm border border-emerald-deep/10 bg-white px-5 py-4 text-left shadow-xl">
              <p className="text-sm font-semibold text-emerald-deep">&ldquo;I want to register my business.&rdquo;</p>
              <p className="mt-1 font-serif text-sm italic text-gold">Great! Let&apos;s talk about what you need.</p>
            </div>
          </BlurFade>

          {/* Center: portrait */}
          <BlurFade delay={0.2} className="order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-sm">
            <div className="relative">
              <Image src="/madam-cac-cutout.png" alt="Madam CAC, CAC registration agent" width={600} height={800} priority className="relative h-auto w-full object-cover [mask-image:linear-gradient(to_bottom,black_75%,transparent)]" />
            </div>
          </BlurFade>

          {/* Left (desktop): intro text */}
          <BlurFade delay={0.3} className="order-3 md:order-1 md:mb-40 md:text-left">
            <p className="mx-auto max-w-xs text-base leading-relaxed text-ink/70 md:mx-0">
              I help entrepreneurs, companies and NGOs register with the <strong className="text-emerald-deep">Corporate Affairs Commission</strong>: fast, legit and stress-free.
            </p>
          </BlurFade>
        </div>

        {/* Bottom row: social proof + CTA */}
        <BlurFade delay={0.4} className="relative z-20 -mt-6 flex flex-col items-center justify-between gap-6 border-t border-emerald-deep/10 bg-cream/80 py-6 backdrop-blur md:-mt-16 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((t, i) => (
                <div
                  key={t.name}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cream shadow-sm"
                  style={{ zIndex: 4 - i }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-emerald-deep"><NumberTicker value={site.businessesRegistered} />+ businesses registered</p>
              <p className="flex items-center gap-1 text-xs text-ink/55">
                <BadgeCheck size={13} className="text-gold" /> Registering businesses since {site.yearStarted}
              </p>
            </div>
          </div>
          <ShimmerButton href={whatsappLink()}>
            <MessageCircle size={18} /> Start on WhatsApp <ArrowRight size={16} />
          </ShimmerButton>
        </BlurFade>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#071f17] py-16 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(230,207,143,0.10)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
      <BlurFade className="relative mb-12 px-5 text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight text-cream md:text-5xl">
          Trusted by{" "}
          <span className="relative inline-block">
            <span className="absolute -bottom-1 left-0 h-3 w-full -skew-x-6 rounded bg-gold/20 md:h-4" />
            <span className="relative bg-gradient-to-r from-gold-light via-gold to-[#e0bd5f] bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-[0_0_25px_rgba(201,165,76,0.35)] md:text-7xl">
              <NumberTicker value={site.businessesRegistered} />+
            </span>
          </span>{" "}
          businesses
        </h2>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-cream/50">across Nigeria &amp; beyond</p>
      </BlurFade>
      <Marquee duration="35s" className="relative">
        {brands.map((b, i) => {
          const Icon = brandIcons[i % brandIcons.length];
          return (
            <div key={b} className="flex items-center gap-2.5 whitespace-nowrap px-8 font-sans text-lg font-bold tracking-tight text-white/90 transition-colors hover:text-gold-light">
              <Icon size={20} strokeWidth={2.5} />
              {b}
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Our Services"
          title="Everything you need to make your business official"
          sub="From business name registration to annual filings, we handle the entire process without the stress."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <BlurFade key={s.title} delay={i * 0.06} className={cn(s.featured && "md:col-span-1")}>
                <a
                  href={whatsappLink(`Hello Madam CAC, I'm interested in ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${s.title} on WhatsApp`}
                  className="block h-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <MagicCard className={cn("h-full cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-2xl", s.featured && "bg-emerald-deep text-cream")}>
                    <div>
                      <div className={cn("mb-6 grid h-12 w-12 place-items-center rounded-2xl", s.featured ? "bg-gold/20 text-gold" : "bg-emerald-deep/5 text-emerald-deep")}>
                        <Icon size={22} />
                      </div>
                      {s.featured && <span className="absolute right-0 top-0 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-emerald-deep">Popular</span>}
                      <h3 className={cn("font-serif text-2xl font-semibold", !s.featured && "text-emerald-deep")}>{s.title}</h3>
                      <p className={cn("mt-3 leading-relaxed", s.featured ? "text-cream/75" : "text-ink/65")}>{s.desc}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className={cn("font-semibold", s.featured ? "text-gold-light" : "text-gold")}>{s.price}</span>
                      <span className={cn("grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5", s.featured ? "bg-gold text-emerald-deep" : "bg-emerald-deep text-cream")}>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </MagicCard>
                </a>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-emerald-deep px-5 py-24 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(230,207,143,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Sticky Header + Info + CTA */}
          <BlurFade className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              How it works
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
              Registered in 4 simple steps
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70 sm:text-lg">
              No queues. No portal headaches or rejected filings. We guide you from your initial name reservation straight to holding your official certificate.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ShimmerButton
                href={whatsappLink("Hello Madam CAC, I'd like to get started with registration.")}
                className="w-full sm:w-auto"
              >
                <MessageCircle size={18} className="fill-emerald-deep" />
                Start on WhatsApp
              </ShimmerButton>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs text-cream/60">
              <BadgeCheck className="text-gold shrink-0" size={18} />
              <span>Accredited CAC agent filing directly on the official portal</span>
            </div>
          </BlurFade>

          {/* Right Column: Vertical Timeline */}
          <div className="relative lg:col-span-7">
            {/* Continuous vertical gradient line connecting step badges */}
            <div className="absolute bottom-6 left-6 top-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold via-gold/40 to-gold/10 sm:left-7" />

            <div className="space-y-6 sm:space-y-8">
              {steps.map((s, i) => (
                <BlurFade key={s.title} delay={i * 0.1}>
                  <div className="group relative flex items-start gap-5 sm:gap-6">
                    {/* Step Number Circle */}
                    <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold/50 bg-emerald-deep font-serif text-lg font-bold text-gold shadow-[0_0_20px_rgba(201,165,76,0.25)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-xl">
                      {i + 1}
                    </div>

                    {/* Step Content Card */}
                    <div className="flex-1 rounded-2xl border border-gold/15 bg-cream/[0.04] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-gold/35 group-hover:bg-cream/[0.07] group-hover:translate-x-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gold/80">Step 0{i + 1}</span>
                      </div>
                      <h3 className="mt-1 font-serif text-xl font-semibold text-cream sm:text-2xl">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/70 sm:text-base">{s.desc}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <BlurFade>
          <Eyebrow>Why Madam CAC</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-emerald-deep md:text-5xl">A trusted hand for your most important paperwork</h2>
          <p className="mt-5 text-lg text-ink/65">Your business registration is the foundation of everything. We treat it with the care, honesty and speed it deserves.</p>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = reasonIcons[i];
            return (
              <BlurFade key={r.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-emerald-deep/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="text-gold" size={26} />
                  <h3 className="mt-4 font-semibold text-emerald-deep">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">{r.desc}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const chatTimes = ["09:14 AM", "11:42 AM", "01:25 PM", "03:50 PM", "05:18 PM", "07:05 PM", "08:30 PM", "10:12 PM"];

function ReviewCard({ t, index }: { t: (typeof testimonials)[number]; index: number }) {
  const time = chatTimes[index % chatTimes.length];
  return (
    <figure className="w-[330px] shrink-0 overflow-hidden rounded-2xl border border-emerald-deep/10 bg-[#f7f5ee] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-[360px]">
      {/* WhatsApp Chat Header */}
      <div className="mb-3 flex items-center justify-between border-b border-emerald-deep/5 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src={t.avatar}
              alt={t.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover border border-emerald-deep/10 shadow-inner"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
          </div>
          <figcaption className="leading-tight">
            <p className="text-sm font-semibold text-emerald-deep">{t.name}</p>
            <p className="text-[11px] text-ink/50">{t.role}</p>
          </figcaption>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-deep/10 bg-emerald-deep/5 px-2 py-0.5 text-[10px] font-semibold text-emerald-mid">
            <BadgeCheck size={11} className="text-emerald-mid" />
            Verified
          </span>
        </div>
      </div>

      {/* WhatsApp Message Bubble */}
      <div className="relative rounded-2xl rounded-tl-sm border border-emerald-deep/5 bg-white p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <blockquote className="text-sm leading-relaxed text-ink/80">
          “{t.text}”
        </blockquote>
        <div className="mt-2 flex items-center justify-end gap-1.5 text-[11px] text-ink/40">
          <span>{time}</span>
          <CheckCheck size={14} className="text-[#34B7F1]" />
        </div>
      </div>
    </figure>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  return (
    <section id="reviews" className="bg-white/60 py-24">
      <div className="px-5">
        <SectionHead
          eyebrow="Client Reviews"
          title="Direct from our WhatsApp chats"
          sub="Real feedback from entrepreneurs across Nigeria who registered their businesses with Madam CAC."
        />
      </div>
      <div className="flex flex-col gap-6">
        <Marquee duration="50s">
          {testimonials.slice(0, half).map((t, i) => (
            <ReviewCard key={t.name} t={t} index={i} />
          ))}
        </Marquee>
        <Marquee duration="50s" reverse>
          {testimonials.slice(half).map((t, i) => (
            <ReviewCard key={t.name} t={t} index={i + half} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHead eyebrow="FAQ" title="Questions? We've got answers" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <BlurFade key={f.q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-emerald-deep/10 bg-white">
                <button id={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold text-emerald-deep">
                  {f.q}
                  <ChevronDown size={20} className={cn("shrink-0 text-gold transition-transform", open === i && "rotate-180")} />
                </button>
                <div className={cn("grid transition-all duration-300", open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <p className="overflow-hidden px-6 text-ink/65"><span className="block pb-6">{f.a}</span></p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="px-5 pb-24">
      <BlurFade className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-deep to-emerald-mid px-8 py-16 text-center text-cream md:py-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <h2 className="relative font-serif text-4xl font-semibold md:text-6xl">Ready to make it <span className="italic text-gold">official?</span></h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-cream/75">Send a message today and let Madam CAC take care of the rest.</p>
        <div className="relative mt-9 flex justify-center">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-emerald-deep shadow-xl transition hover:scale-105">
            <MessageCircle size={20} /> Chat with Madam CAC
          </a>
        </div>
      </BlurFade>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-emerald-deep/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl font-bold text-emerald-deep">Madam <span className="text-gold">CAC</span></p>
          <p className="mt-2 text-sm text-ink/55">{site.companyName} · RC {site.rcNumber}{" "}
            <a href={site.cacSearchUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-emerald-deep">Verify on CAC</a>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-ink/70 md:flex-row md:gap-8">
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-emerald-deep"><Phone size={16} className="text-gold" />{site.phone}</a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-emerald-deep"><Mail size={16} className="text-gold" />{site.email}</a>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-gold" />{site.address}</span>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-ink/40">© 2026 Madam CAC. Independent registration agent; not affiliated with the Corporate Affairs Commission.</p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-60 cursor-pointer grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 pointer-events-none" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
