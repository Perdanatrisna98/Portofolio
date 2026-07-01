import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">

            <Container>

                <nav className="mt-5 flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl">

                    <h1 className="font-bold">
                        Erlangga
                    </h1>
                    
                    <div className="flex items-center gap-6">
                        
                        <ul className="hidden md:flex gap-8">
                            <li>About</li>
                            <li>Projects</li>
                            <li>Experience</li>
                            <li>Contact</li>
                        </ul>

                        <ThemeToggle />

                    </div>

                </nav>

            </Container>

        </header>
    )
}