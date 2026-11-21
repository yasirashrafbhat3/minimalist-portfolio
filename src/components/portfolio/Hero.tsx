import { ArrowDown, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-end overflow-hidden md:items-center">
      {/* Background photo (or placeholder until a photo is added in src/content/portfolio.ts) */}
      {profile.photo ? (
        <img
          src={profile.photo}
          alt={profile.photoAlt}
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
      ) : (
        <div className="absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center md:flex">
          <div className="flex aspect-[3/4] w-3/5 max-w-sm flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-foreground/15 bg-card text-muted-foreground">
            <ImageIcon className="size-8" />
            <span className="text-sm">Your photo goes here</span>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-hero-fade" />

      <div className="container-page relative pb-24 pt-32 md:pb-0">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="eyebrow">{profile.name}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            {profile.tagline}
          </h1>
          <div className="mt-6 h-px w-16 bg-primary" />
          <p className="mt-6 text-base text-foreground/90 md:text-lg">
            {profile.role}
            <br />
            <span className="text-muted-foreground">{profile.institution}</span>
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
