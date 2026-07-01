"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import TimelineCard from "../common/TimelineCard";
import { experience } from "@/data/experience";

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <Container>
                <SectionTitle title="Experience" subtitle="MY JOURNEY"/>

                <div className="space-y-8">
                    {experience.map((experience, index) => (
                        <motion.div key={experience.company} initial={{ opacity: 0, y:50, }} whileInView={{ opacity: 1, y:0, }} viewport={{ once: true, }} transition={{ delay: index * .15, }}>
                            <TimelineCard 
                                {...experience}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}