import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            EXPERTISE
          </p>

          <h2 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
            Backend Engineering Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I design and build production-grade backend systems focused on
            scalability, cloud infrastructure, performance and clean
            architecture.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg "
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon
                    size={24}
                    className="text-blue-600 transition group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[20px] font-bold leading-tight text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[16px] leading-8 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
