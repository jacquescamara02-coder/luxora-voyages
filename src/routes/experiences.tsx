import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/luxora";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import announcementZanzibar from "@/assets/announcement-zanzibar.jpg";
import announcementTanzania from "@/assets/announcement-tanzania.jpg";
import announcementRome from "@/assets/announcement-rome.jpg";
import announcementMarrakech from "@/assets/announcement-marrakech.jpg";
import announcementParis from "@/assets/announcement-paris.jpg";

export const Route = createFileRoute("/experiences")({ head: () => ({ meta: [
  { title: "Excursions & Expériences | Luxora Voyages" }, { name: "description", content: "Safaris, sorties en bateau, gastronomie, bien-être et expériences privées à réserver seules ou avec votre séjour." },
  { property: "og:title", content: "Excursions & Expériences | Luxora" }, { property: "og:description", content: "Vivez la destination autrement." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ExperiencesPage });
const experiences = [
  { slug:"safari-bleu-prive", category:"Nature", place:"Zanzibar", title:"Safari bleu privé", duration:"Journée", image:announcementZanzibar, alt:"Boutre traditionnel sur un lagon turquoise à Zanzibar", description:"Navigation privée, lagons translucides et banc de sable composent une journée ajustée au rythme de votre séjour." },
  { slug:"safari-lever-du-jour", category:"Nature", place:"Tanzanie", title:"Safari au lever du jour", duration:"2 jours", image:announcementTanzania, alt:"Safari privé face aux éléphants au lever du soleil en Tanzanie", description:"Une immersion dans la savane dès l’aube, avec un itinéraire pensé pour observer la faune dans le calme." },
  { slug:"rome-a-table", category:"Gastronomie", place:"Rome", title:"Rome à table", duration:"4 heures", image:announcementRome, alt:"Table gastronomique sur une terrasse avec vue sur Rome", description:"Adresses confidentielles, cuisine italienne et table choisie dessinent une découverte sensible de la ville." },
  { slug:"medina-confidentielle", category:"Culture", place:"Marrakech", title:"Médina confidentielle", duration:"Demi-journée", image:announcementMarrakech, alt:"Cour intérieure raffinée d’un riad à Marrakech", description:"Un parcours guidé entre ateliers d’artisans, riads secrets et lieux préservés, loin des circuits attendus." },
  { slug:"diner-prive-seine", category:"Mer", place:"Paris", title:"Dîner privé sur la Seine", duration:"3 heures", image:announcementParis, alt:"Dîner privé sur la Seine avec vue sur la tour Eiffel", description:"Une parenthèse élégante sur l’eau, orchestrée pour un tête-à-tête ou une célébration particulière." },
  { slug:"rituel-bien-etre-ocean", category:"Bien-être", place:"Zanzibar", title:"Rituel bien-être face à l’océan", duration:"2 heures", image:announcementZanzibar, alt:"Plage paisible et lagon turquoise à Zanzibar", description:"Un rituel apaisant face au lagon, réservé dans un cadre intime et intégré naturellement à votre séjour." },
];

function ExperiencesPage() {
  const [filter, setFilter] = useState("Toutes");
  const categories = ["Toutes", "Nature", "Gastronomie", "Culture", "Mer", "Bien-être"];
  const shown = filter === "Toutes" ? experiences : experiences.filter((experience) => experience.category === filter);
  return <><PageHero eyebrow="Excursions & Expériences" title="Vivez la destination autrement." intro="Des moments choisis avec soin, à réserver seuls ou à intégrer naturellement dans votre séjour Luxora." motif="experience"/><section className="section"><Reveal><SectionHeading eyebrow="Collection" title="Choisissez une émotion, nous créons le moment."/></Reveal><div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les expériences">{categories.map((category)=><Button key={category} variant={filter===category?"primary":"outline"} size="sm" onClick={()=>setFilter(category)}>{category}</Button>)}</div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map(({slug,title,place,duration,category,image,alt,description})=><Reveal key={title} className="experience-card"><article id={slug} className="scroll-mt-28"><div className="experience-visual"><img src={image} alt={alt} loading="lazy" width={1280} height={800}/><span>{place}</span></div><div className="p-6"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">{category} · {duration}</p><h3 className="mt-3 font-display text-3xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p><Button asChild variant="ghost" className="mt-5 px-0"><Link to="/contact">Demander un devis <ArrowRight className="h-4 w-4"/></Link></Button></div></article></Reveal>)}</div></section></>;
}