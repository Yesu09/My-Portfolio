import Navbar from "./components/Navbar";
import Profile from "./components/Profile/ProfilePage";
import About from "./components/About/AboutPage";
import Skills from "./components/Skills/SkillsPage";
import Projects from "./components/Projects/ProjectsPage";
import Certification from "./components/Certificates/CertificatesPage";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-15">
        <Profile />
        <About />
        <Projects />
        <Skills />
        <Certification />
      </main >
      </>
      )
}

export default App;