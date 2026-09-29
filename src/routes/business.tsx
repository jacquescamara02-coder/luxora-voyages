import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness, CalendarCheck, Headphones, Hotel, Plane, Route as RouteIcon, UsersRound } from "lucide-react";
import { InquiryForm, CascadeTitle, PageHero, Reveal, SectionHeading } from "@/components/luxora";

export const Route = createFileRoute("/business")({
  head: () => ({ meta: [
    { title: "Business Travel | Luxora Voyages" }, { name: "description", content: "Déplacements professionnels, groupes, hôtels, transferts et assistance avec un interlocuteur dédié." },
    { property: "og:title", content: "Business Travel | Luxora Voyages" }, { property: "og:description", content: "Vos déplacements professionnels, simplement maîtrisés." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BusinessPage,
});
function BusinessPage() {
  const items = [[Plane,"Billetterie aérienne"],[Hotel,"Hôtels sélectionnés"],[RouteIcon,"Transferts & chauffeurs"],[UsersRound,"Voyages de groupes"],[Headphones,"Assistance & modifications"],[CalendarCheck,"Séjours professionnels"]] as const;
  return <><PageHero eyebrow="Business Travel" title="Vos déplacements, simplement maîtrisés." intro="Luxora devient le point de contact unique de vos collaborateurs, de la première réservation au retour." motif="business" />
    <section className="section"><Reveal><SectionHeading eyebrow="Service professionnel" title="La précision d’une agence. La disponibilité d’un partenaire." /></Reveal><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{items.map(([Icon,label])=><Reveal key={label} className="icon-card"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-8 font-display text-2xl">{label}</h3></Reveal>)}</div></section>
    <section className="section bg-secondary"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr]"><Reveal><BriefcaseBusiness className="h-8 w-8 text-primary"/><CascadeTitle text="Parlons de vos habitudes de déplacement." className="mt-6 font-display text-5xl" /><p className="mt-5 leading-7 text-muted-foreground">Quelques informations suffisent pour préparer un échange utile, concret et adapté à votre entreprise.</p></Reveal><Reveal className="form-panel"><InquiryForm kind="business_meeting" /></Reveal></div></section>
  </>;
}