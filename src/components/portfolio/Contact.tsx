import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { contact, profile } from "@/content/portfolio";
import { Reveal } from "./Reveal";

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string | null;
  href: string | null;
}) {
  const content = (
    <>
      <span className="flex items-center gap-4">
        <span className="text-muted-foreground">{icon}</span>
        <span className="text-lg">{label}</span>
      </span>
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="hidden sm:inline">{value ?? "Coming soon"}</span>
        {href && (
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        )}
      </span>
    </>
  );

  const rowClass = "group flex items-center justify-between gap-4 py-6";

  return href ? (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`${rowClass} transition-colors hover:text-primary`}
    >
      {content}
    </a>
  ) : (
    <div className={`${rowClass} opacity-60`}>{content}</div>
  );
}

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="border-t">
      <div className="container-page py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Let's connect<span className="text-primary">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Open to conversations about data, AI and learning opportunities.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 divide-y border-y">
          <ContactRow
            icon={<Github className="size-5" />}
            label="GitHub"
            value={contact.github?.replace("https://", "") ?? null}
            href={contact.github}
          />
          <ContactRow
            icon={<Linkedin className="size-5" />}
            label="LinkedIn"
            value={contact.linkedin?.replace(/^https?:\/\/(www\.)?/, "") ?? null}
            href={contact.linkedin}
          />
          <ContactRow
            icon={<Mail className="size-5" />}
            label="Email"
            value={contact.email}
            href={contact.email ? `mailto:${contact.email}` : null}
          />
        </Reveal>

        <footer className="mt-20 flex flex-col justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <span>
            © {year} {profile.name}
          </span>
          <a href="#home" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
