"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../common/Button";
import { heroData } from "@/data/hero";

export default function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center">

            <Container>
                <div className="text-center">

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl font-bold md:text-7xl">
                        {heroData.name}
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="mt-4 text-violet-500">
                        {heroData.role}
                    </motion.p>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mx-auto mt-6 max-w-2xl text-lg opacity-80">
                        {heroData.description}
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mt-10 flex justify-center gap-4">
                        <Button href="/cv.pdf">
                            Lihat Project
                        </Button>

                        <Button href="#projects">
                            Download CV
                        </Button>
                    </motion.div>

                </div>
            </Container>

        </section>
    )
}