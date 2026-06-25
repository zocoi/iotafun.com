import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Gamepad2, Sparkles, Users, Zap, Apple, Globe } from "lucide-react";
import type { ReactNode } from "react";
import solitaireImg from "@/assets/solitaire.jpg";
import pacImg from "@/assets/pacvsghosts.jpg";
import chameleonImg from "@/assets/chameleon.jpg";
import bgGrid from "@/assets/bg-grid.jpg";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iota.fun — A tiny lab making fun games" },
      {
        name: "description",
        content:
          "iota.fun is a startup lab crafting playful games. Meet Solitaire: Classic Angel Dates, the multiplayer arcade Pac vs Ghosts, and the hide-and-seek game Mecha Chameleon.",
      },
      { property: "og:title", content: "iota.fun — A tiny lab making fun games" },
      {
        property: "og:description",
        content:
          "Three games. One tiny lab. Solitaire: Classic Angel Dates on iOS, plus the multiplayer browser games Pac vs Ghosts and Mecha Chameleon.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://iotafun.com/" },
    ],
    links: [{ rel: "canonical", href: "https://iotafun.com/" }],
  }),
  component: Landing,
});

const SOLITAIRE_URL = "https://apps.apple.com/us/app/solitaire-classic-angel-dates/id6779414887";
const PAC_URL = "https://pac-vs-ghosts.pages.dev/";
const CHAMELEON_URL = "https://chameleon-c3z.pages.dev/";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Games />
      <Lab />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-hero">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgGrid})` }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-44">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 font-mono text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-blink" />
          ESTABLISHED PLAYER · STARTUP LABS
        </div>

        <h1 className="mt-6 font-display font-bold text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl">
          A tiny lab <br />
          making <span className="text-gradient-arcade">fun</span> games.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          iota.fun ships small, joyful games — built by a studio obsessed with crisp feel, weird
          ideas, and zero loading screens.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#games"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-arcade text-primary-foreground font-display font-semibold shadow-neon-magenta hover:-translate-y-0.5 transition"
          >
            <Gamepad2 className="w-5 h-5" /> Play our games
          </a>
          <a
            href="#lab"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 hover:bg-card transition font-display font-semibold"
          >
            About the lab <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md">
          <Stat label="games" value="03" />
          <Stat label="platforms" value="iOS · Web" />
          <Stat label="players" value="∞" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-accent/60 pl-3">
      <div className="font-display font-bold text-2xl">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "★ NOW PLAYING",
    "SOLITAIRE: CLASSIC ANGEL DATES",
    "★ MULTIPLAYER",
    "PAC VS GHOSTS",
    "★ HIDE & SEEK",
    "MECHA CHAMELEON",
    "★ MADE WITH LOVE",
    "IOTA.FUN LABS",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-card/30 py-4 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee font-display font-semibold text-2xl">
        {row.map((t, i) => (
          <span key={i} className={i % 2 ? "text-foreground" : "text-accent"}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Games() {
  return (
    <section id="games" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14">
        <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          // The catalogue
        </div>
        <h2 className="font-display font-bold text-5xl md:text-6xl max-w-2xl">
          Three games. Pick your <span className="text-gradient-arcade">mood</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GameCard
          tag="01 · Cozy"
          title="Solitaire: Classic Angel Dates"
          description="A dreamy, slow-burn take on classic solitaire. Soft pastels, angelic card art, satisfying tactile feedback. Built for the quiet five minutes between everything else."
          features={["Daily challenges", "Offline play", "Beautifully animated"]}
          image={solitaireImg}
          imageAlt="Solitaire: Classic Angel Dates key art with angel-themed cards"
          ctaLabel="Get on App Store"
          ctaIcon={<Apple className="w-4 h-4" />}
          href={SOLITAIRE_URL}
          accent="cyan"
          ageLabel="16+"
        />
        <GameCard
          tag="02 · Arcade"
          title="Pac vs Ghosts"
          description="A real-time multiplayer maze chase. Play the chomper or play the ghosts and outsmart your friends in fast, frantic rounds. Runs in any browser. No install."
          features={["Real-time multiplayer", "Browser based", "Built for chaos"]}
          image={pacImg}
          imageAlt="Pac vs Ghosts retro arcade key art with pixel character and ghosts"
          ctaLabel="Play in browser"
          ctaIcon={<Globe className="w-4 h-4" />}
          href={PAC_URL}
          accent="magenta"
          ageLabel="Everyone"
        />
        <GameCard
          tag="03 · Hide & Seek"
          title="Mecha Chameleon"
          description="Paint yourself into a photo and vanish. One player seeks; everyone else camouflages a figure against the crowd and tries to survive the clock. Real-time multiplayer, right in the browser."
          features={["Real-time multiplayer", "Browser based", "Blend in to survive"]}
          image={chameleonImg}
          imageAlt="Mecha Chameleon gameplay: a figure painted to blend into an aerial crosswalk photo"
          ctaLabel="Play in browser"
          ctaIcon={<Globe className="w-4 h-4" />}
          href={CHAMELEON_URL}
          accent="cyan"
          ageLabel="Everyone"
        />
      </div>
    </section>
  );
}

function GameCard({
  tag,
  title,
  description,
  features,
  image,
  imageAlt,
  ctaLabel,
  ctaIcon,
  href,
  accent,
  ageLabel,
}: {
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaIcon: ReactNode;
  href: string;
  accent: "cyan" | "magenta";
  ageLabel?: string;
}) {
  const glow = accent === "cyan" ? "shadow-neon-cyan" : "shadow-neon-magenta";
  return (
    <article className="group relative rounded-3xl bg-gradient-card border border-border/70 p-2 overflow-hidden shadow-arcade hover:border-accent/60 transition">
      <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${glow}`}>
        <div className="absolute inset-0 scanlines z-10" aria-hidden />
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-border font-mono text-[11px] tracking-widest uppercase">
          {tag}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-display font-bold text-3xl md:text-4xl">{title}</h3>
        {ageLabel && (
          <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono text-xs font-semibold">
            {ageLabel}
          </div>
        )}
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {features.map((f) => (
            <li
              key={f}
              className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-mono text-xs"
            >
              {f}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-display font-semibold hover:bg-primary hover:text-primary-foreground transition"
        >
          {ctaIcon} {ctaLabel}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

function Lab() {
  const values = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Small by design",
      body: "No 80-person dev cycles. Every pixel and physics tweak passes through one of us.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Feel over features",
      body: "We obsess over the millisecond between tap and response. If it doesn't feel good, it doesn't ship.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Made for friends",
      body: "Games to play with the people next to you or thousands of miles away. Always low-friction.",
    },
  ];
  return (
    <section id="lab" className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3">
              // The lab
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl leading-[1]">
              We make the kind of games we'd{" "}
              <span className="text-gradient-arcade">actually open</span>.
            </h2>
          </div>
          <div className="space-y-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <span className="flex-none w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  {v.icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-xl">{v.title}</h3>
                  <p className="text-muted-foreground mt-1.5 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
