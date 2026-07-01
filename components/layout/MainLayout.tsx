import Background from "./Background";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps{
    children: React.ReactNode;
}

export default function MainLayout({
    children,
}:MainLayoutProps) {
    return (
        <>
            <Navbar />

            <Background />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}