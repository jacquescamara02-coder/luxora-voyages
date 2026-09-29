import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import brandAsset from "@/assets/luxora-brand.jpeg.asset.json";
import { submitInquiry, type InquiryInput } from "@/lib/inquiries.functions";
import { Button } from "@/components/ui/button";

export const whatsappUrl = "https://wa.me/33767707916?text=Bonjour%20Luxora%20Voyages%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20de%20voyage.";

export function whatsappServiceUrl(serviceTitle: string) {
  return `https://wa.me/33767707916?text=${encodeURIComponent(`Bonjour Luxora Voyages, je souhaite en savoir plus sur votre offre « ${serviceTitle} ».`)}`;
}

export const services = [
  {
    title: "Business Travel",
    text: "Des déplacements professionnels maîtrisés, un interlocuteur dédié.",
    to: "/business" as const,
    number: "01",
    details: [
      "Vols, hôtels et transferts réservés selon vos horaires et votre politique de frais.",
      "Un interlocuteur dédié joignable avant, pendant et après chaque déplacement.",
      "Gestion des imprévus : modification, report, surclassement, urgence.",
      "Suivi budgétaire et facturation centralisée pour votre entreprise.",
    ],
  },
  {
    title: "Voyages sur mesure",
    text: "Des itinéraires façonnés autour de votre rythme et de vos envies.",
    to: "/voyages" as const,
    number: "02",
    details: [
      "Itinéraire construit autour de votre rythme, jamais d'un catalogue.",
      "Hébergements et adresses rares sélectionnés et testés sur place.",
      "Transferts privés, guides locaux et réservations coordonnés.",
      "Carnet de voyage remis avant le départ, ajustable à volonté.",
    ],
  },
  {
    title: "Luxora Signature",
    text: "Des voyages qui célèbrent les instants qui comptent vraiment.",
    to: "/voyages" as const,
    number: "03",
    details: [
      "Lunes de miel, anniversaires, demandes en mariage et célébrations privées.",
      "Chaque détail pensé comme une attention porteuse d'émotion.",
      "Coordination sur place le jour J, dans la discrétion.",
      "Surprises personnalisées préparées en amont avec vous.",
    ],
  },
  {
    title: "Expériences",
    text: "Des activités choisies pour vivre chaque destination autrement.",
    to: "/experiences" as const,
    number: "04",
    details: [
      "Activités privées : mer, nature, gastronomie, culture, bien-être.",
      "Guides et partenaires exclusifs vérifiés par nos soins.",
      "Créneaux privatisés pour vivre les lieux hors de la foule.",
      "Intégration à votre itinéraire sans logistique à gérer.",
    ],
  },
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span className={`grid h-9 w-9 place-items-center rounded-full border ${inverse ? "border-primary text-primary" : "border-primary text-primary"}`}>
        <Globe2 className="h-5 w-5" strokeWidth={1.35} />
      </span>
      <span className={`font-display text-xl uppercase tracking-[0.2em] ${inverse ? "text-ivory" : "text-foreground"}`}>Luxora</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const links = [
    ["/", "Accueil"], ["/business", "Business"], ["/voyages", "Voyages & Signature"],
    ["/experiences", "Expériences"], ["/contact", "À propos & Contact"],
  ] as const;
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {links.map(([to, label]) => <Link key={to} to={to} className={`nav-link ${pathname === to ? "nav-link-active" : ""}`}>{label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Button asChild size="sm"><Link to="/contact">Demander un devis</Link></Button></div>
        <Button variant="ghost" size="sm" className="px-3 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Navigation mobile">
        <div className="mx-auto flex max-w-7xl flex-col">{links.map(([to, label]) => <Link key={to} to={to} className="border-b border-border py-4 font-medium">{label}</Link>)}</div>
      </nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div><Brand inverse /><p className="mt-5 max-w-sm text-sm leading-7 text-ivory/65">Agence de voyages, business travel et création d’expériences sur mesure. Votre voyage commence par une écoute attentive.</p></div>
        <div><p className="footer-title">Explorer</p><div className="mt-4 flex flex-col gap-3 text-sm text-ivory/70"><Link to="/business">Business Travel</Link><Link to="/voyages">Voyages & Signature</Link><Link to="/experiences">Expériences</Link></div></div>
        <div><p className="footer-title">Nous contacter</p><a className="mt-4 block text-sm text-ivory/70" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp · +33 7 67 70 79 16</a><p className="mt-3 text-sm text-ivory/50">Sur rendez-vous</p></div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-5 text-center text-xs text-ivory/45">© 2026 Luxora Voyages. Mentions légales · Confidentialité · CGV</div>
    </footer>
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
    {visible && <Button variant="icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut"><ArrowUp className="h-5 w-5" /></Button>}
    <Button variant="icon" asChild><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter Luxora sur WhatsApp"><MessageCircle className="h-5 w-5" /></a></Button>
  </div>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current; if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) element.classList.add("is-visible"); }, { threshold: 0.12 });
    observer.observe(element); return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, intro, motif = "flight" }: { eyebrow: string; title: string; intro: string; motif?: string }) {
  return <section className={`page-hero motif-${motif}`}><div className="hero-grid" aria-hidden /><div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40"><Button asChild variant="ghost" size="sm" className="hero-back"><Link to="/"><ArrowLeft className="h-4 w-4" />Retour à l’accueil</Link></Button><p className="eyebrow mt-10 text-primary">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] text-ivory sm:text-6xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-ivory/72 sm:text-lg">{intro}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h2>{text && <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{text}</p>}</div>;
}

type FormKind = "travel_quote" | "business_meeting" | "appointment";
export function InquiryForm({ kind = "travel_quote", compact = false }: { kind?: FormKind; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setError("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload: InquiryInput = {
      inquiryType: kind,
      fullName: String(form.get("fullName") || ""), email: String(form.get("email") || ""), phone: String(form.get("phone") || ""),
      company: String(form.get("company") || ""), roleTitle: String(form.get("roleTitle") || ""), destination: String(form.get("destination") || ""),
      departureCity: String(form.get("departureCity") || ""), travelDates: String(form.get("travelDates") || ""), travelers: String(form.get("travelers") || ""),
      budget: String(form.get("budget") || ""), travelType: String(form.get("travelType") || ""), accommodation: String(form.get("accommodation") || ""),
      activities: String(form.get("activities") || ""), occasion: String(form.get("occasion") || ""), frequency: String(form.get("frequency") || ""),
      message: String(form.get("message") || ""), preferredDate: String(form.get("preferredDate") || ""),
    };
    try { await submitInquiry({ data: payload }); formElement.reset(); setStatus("success"); }
    catch (cause) { setStatus("error"); setError(cause instanceof Error ? cause.message : "Une erreur est survenue."); }
  }
  if (status === "success") return <div className="success-panel"><Check className="h-8 w-8" /><h3 className="font-display text-3xl">Votre demande est bien partie.</h3><p>Notre équipe reviendra vers vous pour imaginer la suite.</p><Button variant="outline" onClick={() => setStatus("idle")}>Nouvelle demande</Button></div>;
  const business = kind === "business_meeting";
  return <form onSubmit={handleSubmit} className="form-grid">
    {business && <><Field name="company" label="Entreprise" required /><Field name="roleTitle" label="Fonction" /></>}
    <Field name="fullName" label="Nom et prénom" required /><Field name="email" label={business ? "E-mail professionnel" : "E-mail"} type="email" required />
    <Field name="phone" label="Téléphone" type="tel" />
    {business ? <><Field name="destination" label="Destinations habituelles" /><Field name="frequency" label="Fréquence des déplacements" /><Field name="preferredDate" label="Date de rendez-vous souhaitée" type="date" /></> : !compact && <><Field name="destination" label="Destination envisagée" /><Field name="departureCity" label="Ville de départ" /><Field name="travelDates" label="Dates ou période" /><Field name="travelers" label="Voyageurs" /><Field name="budget" label="Budget indicatif" /><Field name="travelType" label="Type de voyage" /><Field name="accommodation" label="Hébergement souhaité" /><Field name="occasion" label="Occasion particulière" /></>}
    <label className="field col-span-full"><span>{business ? "Votre besoin" : "Parlez-nous de votre projet"}</span><textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Ce que vous imaginez, vos priorités, vos envies…" /></label>
    {status === "error" && <p className="col-span-full text-sm text-destructive">{error}</p>}
    <div className="col-span-full"><Button type="submit" size="lg" disabled={status === "sending"}>{status === "sending" ? "Envoi en cours…" : business ? "Demander mon rendez-vous" : "Envoyer ma demande"}<ArrowRight className="h-4 w-4" /></Button></div>
  </form>;
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return <label className="field"><span>{label}</span><input name={name} type={type} required={required} maxLength={255} /></label>;
}

export function TrustStrip() {
  return <div className="grid gap-px bg-border sm:grid-cols-3"><Trust icon={<Clock3 />} title="Réponse attentive" text="Chaque demande est étudiée personnellement." /><Trust icon={<ShieldCheck />} title="Interlocuteur dédié" text="Un seul contact du premier échange au retour." /><Trust icon={<Plane />} title="Expertise globale" text="Voyages privés et professionnels, partout." /></div>;
}
function Trust({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <div className="bg-background p-8"><div className="text-primary [&>svg]:h-6 [&>svg]:w-6">{icon}</div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>; }

export function Faq() {
  const items = [
    ["Puis-je confier mon séjour à Luxora si mes vols sont déjà réservés ?", "Oui. Le service Travel Planner organise votre itinéraire, vos transferts, activités et bonnes adresses, même si le transport ou l’hôtel ont déjà été réservés."],
    ["Luxora accompagne-t-elle les entreprises ?", "Oui. Nous gérons les déplacements individuels et de groupe, les modifications, l’hébergement, les transferts et l’assistance."],
    ["Les excursions peuvent-elles être réservées seules ?", "Oui. Une expérience peut être réservée indépendamment ou intégrée à un séjour conçu par Luxora."],
    ["Comment débute un projet de voyage ?", "Par un échange. Nous clarifions vos envies, votre rythme, vos dates et votre budget avant de vous proposer une approche personnalisée."],
  ];
  const [active, setActive] = useState(0);
  return <div className="divide-y divide-border border-y border-border">{items.map(([question, answer], index) => <div key={question}><Button variant="ghost" className="h-auto w-full justify-between rounded-none px-0 py-6 text-left normal-case tracking-normal" onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span className="pr-5 font-display text-xl sm:text-2xl">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${active === index ? "rotate-180" : ""}`} /></Button>{active === index && <p className="max-w-3xl pb-6 leading-7 text-muted-foreground">{answer}</p>}</div>)}</div>;
}

export function MapPanel() {
  const key = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const src = key ? `https://www.google.com/maps/embed/v1/view?key=${encodeURIComponent(key)}&center=48.8566,2.3522&zoom=11` : "";
  return <div className="map-panel">{src ? <iframe title="Zone de rendez-vous Luxora Voyages" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> : <div className="grid h-full place-items-center p-8 text-center"><MapPin className="h-8 w-8 text-primary" /><p className="mt-4">Carte disponible après configuration.</p></div>}<div className="map-caption"><MapPin className="h-5 w-5 text-primary" /><div><strong>Luxora Voyages</strong><p>Sur rendez-vous · Adresse à confirmer</p></div></div></div>;
}

export function BrandArtwork() { return <img src={brandAsset.url} alt="Luxora Voyages Anyele, votre assistante voyage sur mesure" className="brand-artwork" />; }
export { ArrowRight, Sparkles };