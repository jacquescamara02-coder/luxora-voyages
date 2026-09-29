import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BrandArtwork, Faq, Reveal, SectionHeading, services, TrustStrip } from "@/components/luxora";
import { Button } from "@/components/ui/button";
import heroTravelVideo from "@/assets/luxora-hero-travel.webm.asset.json";

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
            <div><p className="eyebrow text-primary">Agence de voyages · Paris & au-delà</p><h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.9] text-ivory sm:text-7xl lg:text-[7.25rem]">Le monde,<br /><em className="font-medium text-primary">à votre mesure.</em></h1><p className="mt-7 max-w-xl text-base leading-8 text-ivory/72">Voyages privés, déplacements professionnels et expériences rares, imaginés avec précision par un interlocuteur dédié.</p><Button asChild size="lg" className="mt-8"><Link to="/contact">Imaginer mon voyage <ArrowRight className="h-4 w-4" /></Link></Button></div>
            <div className="hidden justify-self-end lg:block"><BrandArtwork /></div>
          </div>
          <div className="mt-14 flex items-center gap-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ivory/55"><span className="h-px w-12 bg-primary" /> Faites défiler pour voyager</div>
        </div>
      </section>
      <TrustStrip />
      <section className="section"><Reveal><SectionHeading eyebrow="Notre savoir-faire" title="Un voyage ne se réserve pas. Il se compose." text="Nous réunissons logistique, intuition et sens du détail pour construire une expérience fluide, cohérente et profondément personnelle." /></Reveal><div className="mt-14 grid gap-px bg-border md:grid-cols-2">{services.map((service) => <Reveal key={service.number} className="service-card"><span className="text-xs font-bold text-primary">{service.number}</span><h3 className="mt-12 font-display text-3xl">{service.title}</h3><p className="mt-3 max-w-sm leading-7 text-muted-foreground">{service.text}</p><Link to={service.to} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground">Découvrir <ArrowRight className="h-4 w-4" /></Link></Reveal>)}</div></section>
      <section className="story-band"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8"><Reveal><p className="eyebrow text-primary">Luxora Signature</p><h2 className="mt-4 font-display text-5xl leading-none text-ivory lg:text-7xl">Les plus beaux souvenirs commencent par une intention.</h2><p className="mt-6 max-w-xl leading-7 text-ivory/68">Lune de miel, anniversaire, escapade romantique ou célébration privée : nous orchestrons chaque attention pour que l’émotion reste.</p><Button asChild variant="outline" className="mt-8"><Link to="/voyages">Créer mon voyage Signature</Link></Button></Reveal><Reveal className="destination-orbit"><div className="orbit-ring"><span>Zanzibar</span><span>Rome</span><span>Paris</span><span>Maroc</span></div><div className="orbit-core">L</div></Reveal></div></section>
      <section className="section"><Reveal><SectionHeading eyebrow="Questions fréquentes" title="Avant de partir" /></Reveal><Reveal className="mt-12"><Faq /></Reveal></section>
    </>
  );
}
