interface SectionTitleProps{
    title: string;
    subtitle: string;
}

export default function SectionTitle({
    title, 
    subtitle,
}:SectionTitleProps) {
    return (
        <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
                {subtitle}
            </p>

            <h2 className="mt-2 text-4xl font-bold">
                {title}
            </h2>
        </div>
    )
}