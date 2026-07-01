import GlassCard from "./GlassCard";

interface TimelineCardProps {
    year: string;
    company: string;
    position: string;
    location: string;
    description: string;
    technologies: string[];
}

export default function TimelineCard({
    year,
    company,
    position,
    location,
    description,
    technologies
}:TimelineCardProps) {
    return (
        <GlassCard>
            <div className="flex flex-col gap-5">
                <span className="w-fit rounded-full bg-violet-600 px-4 py-1 text-sm text-white">
                    {year}
                </span>
                <div>
                    <h3 className="text-2xl font-bold">
                        {company}
                    </h3>
                    <p className="mt-1 font-medium text-violet-400">
                        {position}
                    </p>
                    <p className="text-sm opacity-70">
                        {location}
                    </p>
                </div>

                <p className="opacity-80">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-violet-500/30 px-3 py-1 text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </GlassCard>
    )
}