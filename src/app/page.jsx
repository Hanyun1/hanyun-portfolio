import RootLayout from "./layout";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Intro from "./intro/page";


const Home = () => {
  return (
    <>
    <section id="home">
      <Intro/>
    </section>
    <section id="projects">
    <Projects/>
    </section>
    <section id="contact">
    <Contact/>
    </section>
    </>
  );
};

export default Home;
