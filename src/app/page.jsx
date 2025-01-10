import Projects from "./projects/page";
import Contact from "./contact/page";
import Intro from "./intro/page";

const Home = () => {
  return (
    <>
      <section id="home" className="min-h-screen scroll-mt-32">
        <Intro />
      </section>
      <section id="projects" className="min-h-screen scroll-mt-32">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen scroll-mt-32">
        <Contact />
      </section>
    </>
  );
};

export default Home;
