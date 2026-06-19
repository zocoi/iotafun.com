import { Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <Logo />
          <span>
            iota<span className="text-accent">.fun</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-mono">
          <a href="/" className="hover:text-foreground transition">
            games
          </a>
          <a href="/" className="hover:text-foreground transition">
            lab
          </a>
          <a href="mailto:hi@iota.fun" className="hover:text-foreground transition">
            contact
          </a>
        </nav>
        <Link
          to="/"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground font-mono text-xs font-semibold hover:scale-105 transition"
        >
          PLAY <Zap className="w-3.5 h-3.5" />
        </Link>
      </div>
    </header>
  );
}
