import { describe, expect, it } from "vitest";
import { contact, projects } from "@/content/portfolio";

const byTitle = (title: string) => projects.find((p) => p.title === title);

describe("portfolio content stays accurate", () => {
  it("labels DataDrift as a concept with no repository", () => {
    expect(byTitle("DataDrift")?.status).toBe("Concept");
    expect(byTitle("DataDrift")?.github).toBeUndefined();
  });

  it("shows no GitHub link for the Expense Anomaly Auditor", () => {
    expect(byTitle("Corporate Expense Anomaly Auditor")?.github).toBeUndefined();
  });

  it("links the two real repositories", () => {
    expect(byTitle("Student Data Pipeline")?.github).toBe(
      "https://github.com/yasirashrafbhat3/student-data-pipeline-project",
    );
    expect(byTitle("CleanSlate")?.github).toBe("https://github.com/yasirashrafbhat3/CleanSlate");
  });

  it("uses the real GitHub profile", () => {
    expect(contact.github).toBe("https://github.com/yasirashrafbhat3");
  });
});
