export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            {/* Left Gradient */}
            <div
                className="
                absolute
                -left-50
                -top-50
                h-125
                w-125
                rounded-full
                bg-violet-500/20
                blur-3xl
                "
            />

            {/* Right Gradient */}
            <div
                className="
                absolute
                -bottom-50
                -right-50
                h-125
                w-125
                rounded-full
                bg-fuchsia-500/20
                blur-3xl
                "
            />
        </div>
    )
}