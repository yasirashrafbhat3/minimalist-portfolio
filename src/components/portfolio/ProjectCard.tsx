import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  Completed: "border-primary/40 text-primary",
  "In progress": "border-primary/30 text-primary",
  Planned: "border-foreground/20 text-muted-foreground",
  Concept: "border-foreground/20 text-muted-foreground",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 md:p-8">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium",
            statusStyles[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
      {project.statusNote && (
        <p className="mt-3 text-sm text-foreground/70">{project.statusNote}</p>
      )}

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Github className="size-4" />
            View on GitHub
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">No public repository yet</span>
        )}
      </div>
    </article>
  );
}
