import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Work
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Production Backend Systems
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A selection of enterprise backend systems built with scalability,
            reliability and cloud-native architecture in mind.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
