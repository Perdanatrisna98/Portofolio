"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { aboutTimeline } from "@/data/about";

export default function About() {
    return (
        <section id="about" className="py-24">
            <Container>
                <SectionTitle 
                    title="Tentang Saya"
                    subtitle="ABOUT"
                />

                <div className="space-y-6">
                    {aboutTimeline.map((item, index) => (
                        <motion.div
                        key={item.year} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, }} >
                            <GlassCard>
                                <div className="flex flex-col gap-3 md:flex-row mf:gap-10">
                                    <div className="text-violet-500 font-bold text-xl w-24">
                                        {item.year}
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 opacity-70">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                            
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}