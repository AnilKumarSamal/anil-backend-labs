import Link from "next/link";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCodeBracket,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl lg:p-7">
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
              project.status === "Enterprise"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            {project.status}
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.live && (
            <Link
              href={project.live}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              <HiOutlineArrowTopRightOnSquare size={14} />
              Case Study
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-300 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <HiOutlineCodeBracket size={14} />
              GitHub
            </Link>
          )}
        </div>
      </div>

      {/* Tech */}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition group-hover:border-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3">
        {project.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <HiOutlineCheckCircle size={16} className="text-blue-600" />

            {feature}
          </div>
        ))}
      </div>

      <div className="my-6 h-px bg-slate-100" />

      {/* Metrics */}

      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/30 md:grid-cols-3">
        {project.metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`py-4 text-center ${
              index !== project.metrics.length - 1
                ? "border-b border-slate-200 md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <div className="text-2xl font-bold text-blue-600">
              {metric.value}
            </div>

            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
