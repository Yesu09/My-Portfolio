import Navbar from "./components/Navbar";
import Profile from "./components/Profile/ProfilePage";
import About from "./components/About/AboutPage";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-15">
        <Profile />
        <About />
      </main >
      </>
      )
}

export default App;