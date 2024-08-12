import { Footer } from "@/components/Footer/Footer";
import { Home } from "@/components/Home/Home";
import { NavbarTop } from "@/components/Navbar/navbar";

export default function HomePage() {
  return (
    <section>
      <NavbarTop />
      <Home />
      <Footer />
    </section>
  );
}
