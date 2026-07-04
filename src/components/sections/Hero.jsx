import Link from "next/link";
import Container from "@/components/ui/Container";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {heroData.badge}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {heroData.title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            {heroData.description}
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-500">
            {heroData.subDescription}
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              {heroData.buttons.primary}
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              {heroData.buttons.secondary}
            </Link>
          </div>

          <p className="mt-8 text-gray-500">{heroData.subText}</p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {heroData.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 md:grid-cols-4">
            {heroData.stats.map((item) => (
              <div key={item.label}>
                <h2 className="text-4xl font-bold text-blue-600">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
