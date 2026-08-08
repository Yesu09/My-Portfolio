import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Profile from "./components/Profile/ProfilePage";
import About from "./components/About/AboutPage";
import Skills from "./components/Skills/SkillsPage";
import Projects from "./components/Projects/ProjectsPage";
import Certification from "./components/Certificates/CertificatesPage";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-3"></div>
      <Navbar />
      <LoadingScreen />
      <main className="pt-15">
        <Profile />
        <About />
        <Projects />
        <Skills />
        <Certification />
        <Contact />
      </main >
      </>
      )
}

export default App;