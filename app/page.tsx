import MainLayout from "@/components/layout/MainLayout";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <MainLayout>
        <Hero />
        <About />
    </MainLayout>
  );
}
