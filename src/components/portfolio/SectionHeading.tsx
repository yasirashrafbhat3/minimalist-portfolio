import { Reveal } from "./Reveal";

export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}
