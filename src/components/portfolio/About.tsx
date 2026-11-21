import { about } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="container-page py-24 md:py-32">
      <SectionHeading label="About" title={about.heading} />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <dl className="divide-y border-y">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-6 py-4">
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="text-right text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
