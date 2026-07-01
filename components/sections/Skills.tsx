"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../common/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <Container>
                <SectionTitle title="Skills" subtitle="TECH STACK"/>

                <div className="grid gap-6 md:grid-cols-2">
                    {skills.map((skill, index) => (
                        <motion.div key={skill.category} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, }}>
                            <SkillCard title={skill.category} items={skill.items}/>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}