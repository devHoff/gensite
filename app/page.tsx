"use client";
import { useState } from "react";
import Header       from "@/components/ui/Header";
import Hero         from "@/components/sections/Hero";
import Resultados   from "@/components/sections/Resultados";
import Solucoes     from "@/components/sections/Solucoes";
import Depoimentos  from "@/components/sections/Depoimentos";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Demo         from "@/components/sections/Demo";
import Footer       from "@/components/ui/Footer";

export type Lang = "pt" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <main>
      <Header lang={lang} setLang={setLang} />
      <Hero         lang={lang} />
      <Resultados   lang={lang} />
      <Solucoes     lang={lang} />
      <Depoimentos  lang={lang} />
      <ComoFunciona lang={lang} />
      <Demo         lang={lang} />
      <Footer       lang={lang} />
    </main>
  );
}
