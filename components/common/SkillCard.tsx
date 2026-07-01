interface SkillCardProps {
    title: string;
    items: string[];
}

export default function SkillCard({
    title,
    items, 
}:SkillCardProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50">
            <h3 className="mb-4 text-xl font-bold">
                {title}
            </h3>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item} className="opacity-80">
                        • {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}