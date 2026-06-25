import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const SOLITAIRE_URL = "https://apps.apple.com/us/app/solitaire-classic-angel-dates/id6779414887";
const PAC_URL = "https://pac-vs-ghosts.pages.dev/";
const CHAMELEON_URL = "https://chameleon-c3z.pages.dev/";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-display font-bold">
          <Logo />
          <span>
            iota<span className="text-accent">.fun</span>
          </span>
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} · A startup lab
          </span>
        </div>
        <div className="flex gap-6 font-mono text-xs text-muted-foreground">
          <a
            href={SOLITAIRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            Solitaire ↗
          </a>
          <a
            href={PAC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            Pac vs Ghosts ↗
          </a>
          <a
            href={CHAMELEON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            Mecha Chameleon ↗
          </a>
          <Link to="/privacy" className="hover:text-foreground transition">
            Privacy
          </Link>
          <a href="mailto:hi@iota.fun" className="hover:text-foreground transition">
            hi@iota.fun
          </a>
        </div>
      </div>
    </footer>
  );
}
