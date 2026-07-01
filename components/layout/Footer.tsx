import Container from "./Container";

export default function Footer() {
    return (
        <footer className="py-10">

            <Container>
                <p className="text-center text-sm opacity-70">
                    &copy; {new Date().getFullYear()}

                    {" "}

                    Erlangga Trisna Yudha Perdana
                </p>

            </Container>

        </footer>
    )
}