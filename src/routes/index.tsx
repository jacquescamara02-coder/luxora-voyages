import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { BrandArtwork, Faq, InquiryForm, CascadeTitle, Reveal, SectionHeading, TrustStrip, services, whatsappServiceUrl } from "@/components/luxora";
import { Button } from "@/components/ui/button";
import heroTravelVideo from "@/assets/luxora-hero-travel.webm.asset.json";
import businessTravelImage from "@/assets/service-business-travel.jpg";
import bespokeTravelImage from "@/assets/service-voyage-sur-mesure.jpg";
import signatureImage from "@/assets/service-luxora-signature.jpg";
import experiencesImage from "@/assets/service-experiences-couple.jpg.asset.json";
import { TravelStories } from "@/components/travel-stories";
import { CircularTestimonials, type Testimonial } from "@/components/ui/circular-testimonials";
import dakarArtwork from "@/assets/carnet-dakar.webp.asset.json";
import zanzibarArtwork from "@/assets/carnet-zanzibar.webp.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Luxora Voyages | Voyages sur mesure & Business Travel" },
    { name: "description", content: "Luxora imagine vos voyages sur mesure, déplacements professionnels et expériences privées avec un accompagnement dédié." },
    { property: "og:title", content: "Luxora Voyages | L’art du voyage sur mesure" },
    { property: "og:description", content: "Voyages, Business Travel et expériences façonnés autour de vous." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const serviceImages = [businessTravelImage, bespokeTravelImage, signatureImage, experiencesImage.url];
  const testimonials: Testimonial[] = [
    {
      quote: "C’est plus qu’une agence de voyage : c’est un faiseur de rêve.",
      name: "Une voyageuse Luxora",
      designation: "Anniversaire surprise · Dakar",
      src: dakarArtwork.url,
      imageAlt: "Illustration du littoral de Dakar issue du carnet de voyage",
    },
    {
      quote: "À l’aéroport, j’ai découvert une destination tenue secrète et un séjour entièrement préparé à mon insu.",
      name: "Une voyageuse Luxora",
      designation: "Souvenir confié à Luxora · Dakar",
      src: zanzibarArtwork.url,
      imageAlt: "Illustration d’un carnet de voyage Luxora",
    },
    {
      quote: "Le lendemain, nous avons découvert ensemble la ville et l’île de Gorée. Un souvenir que je n’oublierai jamais.",
      name: "Une voyageuse Luxora",
      designation: "Voyage en famille · Dakar",
      src: experiencesImage.url,
      imageAlt: "Expérience en couple sur une eau turquoise",
    },
  ];
  return (
    <>
      <section className="home-hero">
        <video
          className="home-hero-video"
          src={heroTravelVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="home-hero-video-overlay" aria-hidden />
        <div className="cinema-lines" aria-hidden><i /><i /><i /><i /></div>
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <div><p className="eyebrow text-primary">Agence de voyages · Paris & au-delà</p><CascadeTitle as="h1" text="Le monde," accent="à votre mesure." className="mt-5 max-w-4xl font-display text-6xl leading-[0.9] text-ivory sm:text-7xl lg:text-[7.25rem]" /><p className="mt-7 max-w-xl text-base leading-8 text-ivory/72">Voyages privés, déplacements professionnels et expériences rares, imaginés avec précision par un interlocuteur dédié.</p><Button asChild size="lg" className="mt-8"><Link to="/contact">Imaginer mon voyage <ArrowRight className="h-4 w-4" /></Link></Button></div>
            <div className="hidden justify-self-end lg:block"><BrandArtwork /></div>
          </div>
          <div className="mt-14 flex items-center gap-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ivory/55"><span className="h-px w-12 bg-primary" /> Faites défiler pour voyager</div>
        </div>
      </section>
      <section className="hero-booking" aria-labelledby="booking-title">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[.65fr_1.35fr] lg:px-8 lg:py-16">
          <Reveal><p className="eyebrow">Votre prochain départ</p><CascadeTitle text="Commençons par votre envie d’ailleurs." className="mt-4 font-display text-4xl leading-tight sm:text-5xl" /><p className="mt-5 max-w-md leading-7 text-muted-foreground">Partagez-nous l’essentiel. Votre interlocuteur Luxora vous répond avec une première approche personnalisée.</p></Reveal>
          <Reveal className="form-panel home-booking-form"><InquiryForm compact /></Reveal>
        </div>
      </section>
      <TrustStrip />
      <section className="section"><Reveal><SectionHeading eyebrow="Notre savoir-faire" title="Un voyage ne se réserve pas. Il se compose." text="Nous réunissons logistique, intuition et sens du détail pour construire une expérience fluide, cohérente et profondément personnelle." /></Reveal><div className="mt-14 grid gap-5 md:grid-cols-2">{services.map((service, index) => <ServiceCard key={service.number} service={service} image={serviceImages[index]!} />)}</div></section>
      <TravelStories />
      <section className="testimonial-section" aria-label="Avis clients">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal><p className="eyebrow text-primary">Avis client</p><CascadeTitle text="Le voyage continue dans leurs mots." className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl" /><p className="mt-5 max-w-2xl leading-7 text-ivory/70">Un récit authentique confié à Luxora, présenté avec discrétion pour préserver l’intimité de la voyageuse.</p></Reveal>
          <Reveal className="mt-14"><CircularTestimonials testimonials={testimonials} /></Reveal>
        </div>
      </section>
      <section className="story-band"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8"><Reveal><p className="eyebrow text-primary">Luxora Signature</p><CascadeTitle text="Les plus beaux souvenirs commencent par une intention." className="mt-4 font-display text-5xl leading-none text-ivory lg:text-7xl" /><p className="mt-6 max-w-xl leading-7 text-ivory/68">Lune de miel, anniversaire, escapade romantique ou célébration privée : nous orchestrons chaque attention pour que l’émotion reste.</p><Button asChild variant="outline" className="mt-8"><Link to="/voyages">Créer mon voyage Signature</Link></Button></Reveal><Reveal className="destination-orbit"><div className="orbit-ring"><span>Zanzibar</span><span>Rome</span><span>Paris</span><span>Maroc</span></div><div className="orbit-core">L</div></Reveal></div></section>
      <section className="section"><Reveal><SectionHeading eyebrow="Questions fréquentes" title="Avant de partir" /></Reveal><Reveal className="mt-12"><Faq /></Reveal></section>
    </>
  );
}

type Service = (typeof services)[number];

function ServiceCard({ service, image }: { service: Service; image: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className="service-card">
      <div className="service-card-media"><img src={image} alt={service.title} loading="lazy" width={1280} height={912} /></div>
      <div className="service-card-body">
        <span className="text-xs font-bold text-primary">{service.number}</span>
        <h3 className="mt-8 font-display text-3xl">{service.title}</h3>
        <p className="mt-3 max-w-sm leading-7 text-muted-foreground">{service.text}</p>
        <button type="button" className="service-toggle mt-8" aria-expanded={open} aria-controls={`service-details-${service.number}`} onClick={() => setOpen((v) => !v)}>
          Découvrir <ArrowRight className="h-4 w-4" />
        </button>
        <div id={`service-details-${service.number}`} className={`service-details ${open ? "is-open" : ""}`}>
          <div className="service-details-inner">
            <div className="service-details-content">
              <p className="text-sm leading-6 text-foreground/85">Ce que comprend cette prestation Luxora :</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}><Check className="h-4 w-4" strokeWidth={2.4} /> {detail}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a className="whatsapp-cta" href={whatsappServiceUrl(service.title)} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} /> Réserver sur WhatsApp
                </a>
                <Link to={service.to} className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">Voir la page dédiée <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
