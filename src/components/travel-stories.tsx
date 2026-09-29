import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CascadeTitle, Reveal } from "@/components/luxora";
import dakarArtwork from "@/assets/carnet-dakar.webp.asset.json";
import zanzibarArtwork from "@/assets/carnet-zanzibar.webp.asset.json";

const stories = [
  {
    id: "dakar",
    tab: "Dakar · Un anniversaire surprise",
    label: "Carnet d’émotions · Témoignage client",
    title: "Dakar, le voyage de mes 40 ans",
    intro: "Elle pensait partir déjeuner en amoureux. Son mari lui réservait en réalité un anniversaire surprise à Dakar, entièrement orchestré dans le secret.",
    image: dakarArtwork.url,
    imageAlt: "Illustration du littoral de Dakar issue du carnet de voyage",
    imageCaption: "Dakar · Un anniversaire surprise",
    moments: [
      { number: "01", title: "Une destination tenue secrète", text: "À l’aéroport, la voyageuse découvre qu’elle part pour Dakar. Billets, bagages et séjour avaient été préparés sans qu’elle le sache." },
      { number: "02", title: "Une célébration dans les airs", text: "À bord, une annonce du commandant de bord, un gâteau et un toast partagé transforment le vol en premier souvenir inoubliable." },
      { number: "03", title: "La plus belle surprise", text: "À Dakar, après un accueil personnalisé, sa famille la rejoint au dîner. Le lendemain, tous découvrent ensemble la ville et l’île de Gorée." },
    ],
    quote: "C’est plus qu’une agence de voyage : c’est un faiseur de rêve.",
    attribution: "Une voyageuse Luxora · Témoignage transmis par la voyageuse",
    action: "Imaginer une célébration",
  },
  {
    id: "zanzibar",
    tab: "Zanzibar · Un carnet sur mesure",
    label: "Carnet de voyage · Exemple de création",
    title: "Entre océan et savane",
    intro: "Pour célébrer dix années de mariage, un itinéraire à deux a été pensé entre les eaux de Zanzibar et les paysages de Tanzanie. Voici un aperçu du carnet préparé pour ce voyage.",
    image: zanzibarArtwork.url,
    imageAlt: "Illustration d’un couple sur une plage, issue du carnet de voyage Zanzibar et Tanzanie",
    imageCaption: "Zanzibar & Tanzanie · Carnet préparé pour 2026",
    moments: [
      { number: "01", title: "Prendre le temps à Zanzibar", text: "Premiers jours au bord de l’océan, soin en duo et dîner imaginés autour d’une occasion à célébrer." },
      { number: "02", title: "Explorer ensemble", text: "Une escapade en kayak, une sortie vers Prison Island et Nakupenda, puis des journées libres pour suivre son propre rythme." },
      { number: "03", title: "Au cœur de la Tanzanie", text: "Un safari privé avec guide francophone vers Tarangire et le cratère du Ngorongoro, avant un retour sur l’île." },
    ],
    quote: "Un voyage pensé dans les détails, avec assez de liberté pour laisser place à l’inattendu.",
    attribution: "L’esprit du carnet · Luxora Voyages",
    action: "Créer mon voyage sur mesure",
  },
] as const;

export function TravelStories() {
  const [selected, setSelected] = useState<(typeof stories)[number]["id"]>("dakar");
  const story = stories.find((item) => item.id === selected) ?? stories[0];

  return (
    <section className="travel-stories" id="carnets" aria-labelledby="stories-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Carnets Luxora</p>
          <CascadeTitle text="Des voyages vécus. Des histoires à raconter." className="mt-4 scroll-mt-28 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl" />
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Un témoignage confié par une voyageuse, et un aperçu de la façon dont nous composons un carnet de voyage personnel.</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Choisir un carnet">
          {stories.map((item) => (
            <Button key={item.id} type="button" aria-pressed={selected === item.id} variant={selected === item.id ? "primary" : "outline"} onClick={() => setSelected(item.id)}>
              <BookOpen className="h-4 w-4" />{item.tab}
            </Button>
          ))}
        </div>

        <div key={story.id} className="story-editorial mt-12" aria-live="polite">
          <div className="story-cover">
            <img src={story.image} alt={story.imageAlt} loading="lazy" width={1024} height={1536} />
            <p>{story.imageCaption}</p>
          </div>
          <div className="story-copy">
            <p className="eyebrow">{story.label}</p>
            <CascadeTitle as="h3" text={story.title} className="mt-4 font-display text-4xl leading-tight sm:text-5xl" />
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{story.intro}</p>
            <ol className="story-moments mt-8">
              {story.moments.map((moment) => (
                <li key={moment.number}>
                  <span aria-hidden="true">{moment.number}</span>
                  <div><h4 className="font-display text-2xl">{moment.title}</h4><p className="mt-1 text-sm leading-7 text-muted-foreground">{moment.text}</p></div>
                </li>
              ))}
            </ol>
            <blockquote className="story-quote mt-8">
              <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">« {story.quote} »</p>
              <footer className="mt-3 text-xs font-bold uppercase text-muted-foreground">{story.attribution}</footer>
            </blockquote>
            <Button asChild className="mt-8"><Link to="/contact">{story.action}<ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}