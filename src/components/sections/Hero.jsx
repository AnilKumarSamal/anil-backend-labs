import { heroData } from "@/data/hero";
export default function Hero() {
  return (
    <section>
      <section>
        <h1>{heroData.title}</h1>

        <p>{heroData.description}</p>
      </section>
    </section>
  );
}
