import Navbar from "./components/Navbar";
import Profile from "./components/Profile/ProfilePage";
import About from "./components/About/AboutPage";
import Skills from "./components/Skills/SkillsPage";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-15">
        <Profile />
        <About />
        <Skills />
      </main >
      </>
      )
}

export default App;