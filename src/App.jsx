import useLenis from "./hooks/useLenis";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import SceneBackground from "./components/SceneBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Services from "./sections/Services";
import WhyChooseMe from "./sections/WhyChooseMe";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Loader />
      <CursorGlow />
      <SceneBackground />
      <div className="noise" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Services />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
