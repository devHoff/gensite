"use client";
import { useState } from "react";
import Header       from "@/components/ui/Header";
import Hero         from "@/components/sections/Hero";
import Results      from "@/components/sections/Results";
import Solutions    from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";
import Roadmap      from "@/components/sections/Roadmap";
import DemoSection  from "@/components/sections/DemoSection";
import Footer       from "@/components/ui/Footer";

type Lang = "pt" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <main>
      <Header      lang={lang} setLang={setLang} />
      <Hero        lang={lang} />
      <Results     lang={lang} />
      <Solutions   lang={lang} />
      <Testimonials lang={lang} />
      <Roadmap     lang={lang} />
      <DemoSection lang={lang} />
      <Footer      lang={lang} />
    </main>
  );
}
