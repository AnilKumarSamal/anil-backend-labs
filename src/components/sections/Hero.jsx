import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CodeWindow from "./CodeWindow";
import { heroData } from "@/data/hero";
import { HiCheckCircle, HiGlobeAlt, HiBriefcase } from "react-icons/hi2";

const availabilityIcons = {
  "Immediate Joiner": HiCheckCircle,
  Remote: HiGlobeAlt,
  "Backend Consultant": HiBriefcase,
};
export default function Hero() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Content */}
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Available for Full-Time Opportunities
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
              Node.js
              <br />
              <span className="text-blue-600"> Backend</span>
              <br />
              Engineer
            </h1>
            <p className="mt-6 text-xl font-medium leading-8 text-gray-600">
              Building scalable APIs, microservices & cloud-native systems.
            </p>
            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Senior Backend Engineer with <strong>10+ years</strong> of
              experience building scalable APIs, microservices, fintech
              platforms and cloud-native applications using Node.js, AWS and
              PostgreSQL.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button>View Projects →</Button>

              <Button variant="secondary">Download Resume</Button>
            </div>

            {/* Availability */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroData.availability.map((item) => {
                const Icon = availabilityIcons[item];

                return (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-700"
                  >
                    <Icon className="h-4 w-4 text-blue-600" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
            {/* Tech Stack */}

            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Primary Stack
              </p>

              <div className="flex flex-wrap gap-3">
                {heroData.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50"
                    >
                      <Icon size={16} color={tech.color} />

                      <span className="text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <CodeWindow />
        </div>
      </Container>
    </section>
  );
}
