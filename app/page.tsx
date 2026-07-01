import MainLayout from "@/components/layout/MainLayout";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Experience />
    </MainLayout>
  );
}
