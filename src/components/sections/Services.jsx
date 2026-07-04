import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Backend Engineering Expertise
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I build scalable backend systems, cloud infrastructure and
            production-ready APIs with a focus on performance, reliability and
            maintainability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
